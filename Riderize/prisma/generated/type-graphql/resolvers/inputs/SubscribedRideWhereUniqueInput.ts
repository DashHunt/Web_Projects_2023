import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { SubscribedRideWhereInput } from "../inputs/SubscribedRideWhereInput";

@TypeGraphQL.InputType("SubscribedRideWhereUniqueInput", {})
export class SubscribedRideWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => [SubscribedRideWhereInput], {
    nullable: true
  })
  AND?: SubscribedRideWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubscribedRideWhereInput], {
    nullable: true
  })
  OR?: SubscribedRideWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubscribedRideWhereInput], {
    nullable: true
  })
  NOT?: SubscribedRideWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  ride_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  user_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  subscription_date?: DateTimeFilter | undefined;
}
