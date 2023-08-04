import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SubscribedRideOrderByWithAggregationInput } from "../../../inputs/SubscribedRideOrderByWithAggregationInput";
import { SubscribedRideScalarWhereWithAggregatesInput } from "../../../inputs/SubscribedRideScalarWhereWithAggregatesInput";
import { SubscribedRideWhereInput } from "../../../inputs/SubscribedRideWhereInput";
import { SubscribedRideScalarFieldEnum } from "../../../../enums/SubscribedRideScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupBySubscribedRideArgs {
  @TypeGraphQL.Field(_type => SubscribedRideWhereInput, {
    nullable: true
  })
  where?: SubscribedRideWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SubscribedRideOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: SubscribedRideOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubscribedRideScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "ride_id" | "user_id" | "subscription_date">;

  @TypeGraphQL.Field(_type => SubscribedRideScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: SubscribedRideScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
