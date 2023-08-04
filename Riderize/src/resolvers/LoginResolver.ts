import * as TypeGraphQL from "type-graphql";
import { GraphQLError, type GraphQLResolveInfo } from "graphql";
import { CreateOneUsersArgs } from "../../prisma/generated/type-graphql/resolvers/crud/Users/args/CreateOneUsersArgs";
import { Users } from "../../prisma/generated/type-graphql/models/Users";
import { getPrismaFromContext } from "../../prisma/generated/type-graphql/helpers";
import { LoginModel } from "../models/LoginModel";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";

interface JWT {
  token: string;
}

interface Context {
  prisma: PrismaClient;
  SECRET: any;
  id: string | string[] | undefined;
}

@TypeGraphQL.Resolver((_of) => Users)
export class CustomUserResolver {
  @TypeGraphQL.Mutation((_returns) => LoginModel, {
    nullable: false,
  })
  async login(@TypeGraphQL.Ctx() ctx: Context, @TypeGraphQL.Args() args: CreateOneUsersArgs): Promise<JWT> {
    const user = await getPrismaFromContext(ctx).users.findFirst({
      where: { user_name: args.data.user_name },
    });

    if (!user) {
      throw new GraphQLError("User don't exist");
    }

    const valid = await bcrypt.compare(args.data.password, user.password);
    if (!valid) {
      throw new GraphQLError("User password is incorrect");
    }

    const token = jwt.sign(
      {
        id: user.user_id,
        user: user.user_name,
      },
      ctx.SECRET,
      {
        expiresIn: "1h",
      }
    );

    return {
      token: token,
    };
  }

  @TypeGraphQL.Mutation((_returns) => Users, {
    nullable: false,
  })
  async register(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateOneUsersArgs): Promise<Users> {
    const user = await getPrismaFromContext(ctx).users.findFirst({
      where: { user_name: args.data.user_name },
    });

    if (user) {
      throw new GraphQLError("User already exists");
    }

    const hashPassword = await bcrypt.hash(args.data.password, 12);
    args.data.password = hashPassword;

    return getPrismaFromContext(ctx).users.create({
      ...args,
    });
  }
}
