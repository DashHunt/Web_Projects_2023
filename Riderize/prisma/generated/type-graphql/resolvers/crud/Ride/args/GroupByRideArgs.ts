import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RideOrderByWithAggregationInput } from "../../../inputs/RideOrderByWithAggregationInput";
import { RideScalarWhereWithAggregatesInput } from "../../../inputs/RideScalarWhereWithAggregatesInput";
import { RideWhereInput } from "../../../inputs/RideWhereInput";
import { RideScalarFieldEnum } from "../../../../enums/RideScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByRideArgs {
  @TypeGraphQL.Field(_type => RideWhereInput, {
    nullable: true
  })
  where?: RideWhereInput | undefined;

  @TypeGraphQL.Field(_type => [RideOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: RideOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [RideScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "name" | "start_date" | "start_date_registration" | "end_date_registration" | "additional_information" | "start_place" | "participants_limit">;

  @TypeGraphQL.Field(_type => RideScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: RideScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
