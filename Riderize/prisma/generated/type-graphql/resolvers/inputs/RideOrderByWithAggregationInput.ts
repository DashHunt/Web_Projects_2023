import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RideAvgOrderByAggregateInput } from "../inputs/RideAvgOrderByAggregateInput";
import { RideCountOrderByAggregateInput } from "../inputs/RideCountOrderByAggregateInput";
import { RideMaxOrderByAggregateInput } from "../inputs/RideMaxOrderByAggregateInput";
import { RideMinOrderByAggregateInput } from "../inputs/RideMinOrderByAggregateInput";
import { RideSumOrderByAggregateInput } from "../inputs/RideSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("RideOrderByWithAggregationInput", {})
export class RideOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  start_date?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  start_date_registration?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  end_date_registration?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  additional_information?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  start_place?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  participants_limit?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => RideCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: RideCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => RideAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: RideAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => RideMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: RideMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => RideMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: RideMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => RideSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: RideSumOrderByAggregateInput | undefined;
}
