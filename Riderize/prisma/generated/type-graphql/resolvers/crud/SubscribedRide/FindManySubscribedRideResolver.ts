import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindManySubscribedRideArgs } from "./args/FindManySubscribedRideArgs";
import { SubscribedRide } from "../../../models/SubscribedRide";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SubscribedRide)
export class FindManySubscribedRideResolver {
  @TypeGraphQL.Query(_returns => [SubscribedRide], {
    nullable: false
  })
  async subscribedRides(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManySubscribedRideArgs): Promise<SubscribedRide[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).subscribedRide.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
