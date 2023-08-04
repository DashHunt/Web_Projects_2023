import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateRideArgs } from "./args/AggregateRideArgs";
import { Ride } from "../../../models/Ride";
import { AggregateRide } from "../../outputs/AggregateRide";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Ride)
export class AggregateRideResolver {
  @TypeGraphQL.Query(_returns => AggregateRide, {
    nullable: false
  })
  async aggregateRide(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateRideArgs): Promise<AggregateRide> {
    return getPrismaFromContext(ctx).ride.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
