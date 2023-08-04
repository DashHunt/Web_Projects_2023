import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RideOrderByWithRelationInput } from "../../../inputs/RideOrderByWithRelationInput";
import { RideWhereInput } from "../../../inputs/RideWhereInput";
import { RideWhereUniqueInput } from "../../../inputs/RideWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateRideArgs {
  @TypeGraphQL.Field(_type => RideWhereInput, {
    nullable: true
  })
  where?: RideWhereInput | undefined;

  @TypeGraphQL.Field(_type => [RideOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: RideOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => RideWhereUniqueInput, {
    nullable: true
  })
  cursor?: RideWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
