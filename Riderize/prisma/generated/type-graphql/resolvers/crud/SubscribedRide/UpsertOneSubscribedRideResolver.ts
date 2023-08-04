import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneSubscribedRideArgs } from "./args/UpsertOneSubscribedRideArgs";
import { SubscribedRide } from "../../../models/SubscribedRide";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SubscribedRide)
export class UpsertOneSubscribedRideResolver {
  @TypeGraphQL.Mutation(_returns => SubscribedRide, {
    nullable: false
  })
  async upsertOneSubscribedRide(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneSubscribedRideArgs): Promise<SubscribedRide> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).subscribedRide.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
