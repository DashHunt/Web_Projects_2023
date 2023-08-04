import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneSubscribedRideArgs } from "./args/DeleteOneSubscribedRideArgs";
import { SubscribedRide } from "../../../models/SubscribedRide";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SubscribedRide)
export class DeleteOneSubscribedRideResolver {
  @TypeGraphQL.Mutation(_returns => SubscribedRide, {
    nullable: true
  })
  async deleteOneSubscribedRide(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneSubscribedRideArgs): Promise<SubscribedRide | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).subscribedRide.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
