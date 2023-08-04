import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupBySubscribedRideArgs } from "./args/GroupBySubscribedRideArgs";
import { SubscribedRide } from "../../../models/SubscribedRide";
import { SubscribedRideGroupBy } from "../../outputs/SubscribedRideGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SubscribedRide)
export class GroupBySubscribedRideResolver {
  @TypeGraphQL.Query(_returns => [SubscribedRideGroupBy], {
    nullable: false
  })
  async groupBySubscribedRide(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupBySubscribedRideArgs): Promise<SubscribedRideGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).subscribedRide.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
