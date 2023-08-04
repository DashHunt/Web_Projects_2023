import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SubscribedRideOrderByWithRelationInput } from "../../../inputs/SubscribedRideOrderByWithRelationInput";
import { SubscribedRideWhereInput } from "../../../inputs/SubscribedRideWhereInput";
import { SubscribedRideWhereUniqueInput } from "../../../inputs/SubscribedRideWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateSubscribedRideArgs {
  @TypeGraphQL.Field(_type => SubscribedRideWhereInput, {
    nullable: true
  })
  where?: SubscribedRideWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SubscribedRideOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: SubscribedRideOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => SubscribedRideWhereUniqueInput, {
    nullable: true
  })
  cursor?: SubscribedRideWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
