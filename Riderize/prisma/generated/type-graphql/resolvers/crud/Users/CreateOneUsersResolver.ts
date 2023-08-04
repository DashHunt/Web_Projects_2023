import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateOneUsersArgs } from "./args/CreateOneUsersArgs";
import { Users } from "../../../models/Users";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import bcrypt from "bcrypt";

@TypeGraphQL.Resolver(_of => Users)
export class CreateOneUsersResolver {
  @TypeGraphQL.Mutation(_returns => Users, {
    nullable: false
  })
  async createOneUsers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneUsersArgs): Promise<Users> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    const user = args
    const newPassword = await bcrypt.hash(user.data.password, 12)
    user.data.password = newPassword
    

    return getPrismaFromContext(ctx).users.create({
      ...user,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
