import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateSubscribedRideArgs } from "./args/AggregateSubscribedRideArgs";
import { SubscribedRide } from "../../../models/SubscribedRide";
import { AggregateSubscribedRide } from "../../outputs/AggregateSubscribedRide";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SubscribedRide)
export class AggregateSubscribedRideResolver {
  @TypeGraphQL.Query(_returns => AggregateSubscribedRide, {
    nullable: false
  })
  async aggregateSubscribedRide(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateSubscribedRideArgs): Promise<AggregateSubscribedRide> {
    return getPrismaFromContext(ctx).subscribedRide.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
