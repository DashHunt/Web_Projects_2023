import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("SubscribedRideScalarWhereWithAggregatesInput", {})
export class SubscribedRideScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [SubscribedRideScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: SubscribedRideScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubscribedRideScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: SubscribedRideScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubscribedRideScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: SubscribedRideScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  ride_id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  user_id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  subscription_date?: DateTimeWithAggregatesFilter | undefined;
}
