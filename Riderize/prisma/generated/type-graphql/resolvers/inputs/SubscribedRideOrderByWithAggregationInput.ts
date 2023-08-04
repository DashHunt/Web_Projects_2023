import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SubscribedRideAvgOrderByAggregateInput } from "../inputs/SubscribedRideAvgOrderByAggregateInput";
import { SubscribedRideCountOrderByAggregateInput } from "../inputs/SubscribedRideCountOrderByAggregateInput";
import { SubscribedRideMaxOrderByAggregateInput } from "../inputs/SubscribedRideMaxOrderByAggregateInput";
import { SubscribedRideMinOrderByAggregateInput } from "../inputs/SubscribedRideMinOrderByAggregateInput";
import { SubscribedRideSumOrderByAggregateInput } from "../inputs/SubscribedRideSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("SubscribedRideOrderByWithAggregationInput", {})
export class SubscribedRideOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  ride_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  user_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  subscription_date?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SubscribedRideCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: SubscribedRideCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SubscribedRideAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: SubscribedRideAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SubscribedRideMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: SubscribedRideMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SubscribedRideMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: SubscribedRideMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SubscribedRideSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: SubscribedRideSumOrderByAggregateInput | undefined;
}
