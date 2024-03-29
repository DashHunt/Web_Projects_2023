import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("UsersScalarWhereWithAggregatesInput", {})
export class UsersScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [UsersScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: UsersScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [UsersScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: UsersScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [UsersScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: UsersScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  user_id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  user_name?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  password?: StringWithAggregatesFilter | undefined;
}
