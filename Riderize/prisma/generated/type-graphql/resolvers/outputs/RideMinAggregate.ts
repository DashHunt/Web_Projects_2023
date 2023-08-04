import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("RideMinAggregate", {})
export class RideMinAggregate {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  start_date!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  start_date_registration!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  end_date_registration!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  additional_information!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  start_place!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  participants_limit!: number | null;
}
