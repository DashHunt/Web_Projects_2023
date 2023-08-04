import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstSubscribedRideOrThrowArgs } from "./args/FindFirstSubscribedRideOrThrowArgs";
import { SubscribedRide } from "../../../models/SubscribedRide";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SubscribedRide)
export class FindFirstSubscribedRideOrThrowResolver {
  @TypeGraphQL.Query(_returns => SubscribedRide, {
    nullable: true
  })
  async findFirstSubscribedRideOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstSubscribedRideOrThrowArgs): Promise<SubscribedRide | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).subscribedRide.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
