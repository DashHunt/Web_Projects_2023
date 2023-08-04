import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SubscribedRideOrderByWithRelationInput } from "../../../inputs/SubscribedRideOrderByWithRelationInput";
import { SubscribedRideWhereInput } from "../../../inputs/SubscribedRideWhereInput";
import { SubscribedRideWhereUniqueInput } from "../../../inputs/SubscribedRideWhereUniqueInput";
import { SubscribedRideScalarFieldEnum } from "../../../../enums/SubscribedRideScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstSubscribedRideOrThrowArgs {
  @TypeGraphQL.Field(_type => SubscribedRideWhereInput, {
    nullable: true
  })
  where?: SubscribedRideWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SubscribedRideOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: SubscribedRideOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => SubscribedRideWhereUniqueInput, {
    nullable: true
  })
  cursor?: SubscribedRideWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [SubscribedRideScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "ride_id" | "user_id" | "subscription_date"> | undefined;
}
