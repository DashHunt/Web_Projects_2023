import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RideAvgAggregate } from "../outputs/RideAvgAggregate";
import { RideCountAggregate } from "../outputs/RideCountAggregate";
import { RideMaxAggregate } from "../outputs/RideMaxAggregate";
import { RideMinAggregate } from "../outputs/RideMinAggregate";
import { RideSumAggregate } from "../outputs/RideSumAggregate";

@TypeGraphQL.ObjectType("RideGroupBy", {})
export class RideGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  start_date!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  start_date_registration!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  end_date_registration!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  additional_information!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  start_place!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  participants_limit!: number;

  @TypeGraphQL.Field(_type => RideCountAggregate, {
    nullable: true
  })
  _count!: RideCountAggregate | null;

  @TypeGraphQL.Field(_type => RideAvgAggregate, {
    nullable: true
  })
  _avg!: RideAvgAggregate | null;

  @TypeGraphQL.Field(_type => RideSumAggregate, {
    nullable: true
  })
  _sum!: RideSumAggregate | null;

  @TypeGraphQL.Field(_type => RideMinAggregate, {
    nullable: true
  })
  _min!: RideMinAggregate | null;

  @TypeGraphQL.Field(_type => RideMaxAggregate, {
    nullable: true
  })
  _max!: RideMaxAggregate | null;
}
