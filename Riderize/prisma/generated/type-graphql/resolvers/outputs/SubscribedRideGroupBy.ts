import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SubscribedRideAvgAggregate } from "../outputs/SubscribedRideAvgAggregate";
import { SubscribedRideCountAggregate } from "../outputs/SubscribedRideCountAggregate";
import { SubscribedRideMaxAggregate } from "../outputs/SubscribedRideMaxAggregate";
import { SubscribedRideMinAggregate } from "../outputs/SubscribedRideMinAggregate";
import { SubscribedRideSumAggregate } from "../outputs/SubscribedRideSumAggregate";

@TypeGraphQL.ObjectType("SubscribedRideGroupBy", {})
export class SubscribedRideGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  ride_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  user_id!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  subscription_date!: Date;

  @TypeGraphQL.Field(_type => SubscribedRideCountAggregate, {
    nullable: true
  })
  _count!: SubscribedRideCountAggregate | null;

  @TypeGraphQL.Field(_type => SubscribedRideAvgAggregate, {
    nullable: true
  })
  _avg!: SubscribedRideAvgAggregate | null;

  @TypeGraphQL.Field(_type => SubscribedRideSumAggregate, {
    nullable: true
  })
  _sum!: SubscribedRideSumAggregate | null;

  @TypeGraphQL.Field(_type => SubscribedRideMinAggregate, {
    nullable: true
  })
  _min!: SubscribedRideMinAggregate | null;

  @TypeGraphQL.Field(_type => SubscribedRideMaxAggregate, {
    nullable: true
  })
  _max!: SubscribedRideMaxAggregate | null;
}
