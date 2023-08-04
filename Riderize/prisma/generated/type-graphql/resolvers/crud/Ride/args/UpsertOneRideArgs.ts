import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RideCreateInput } from "../../../inputs/RideCreateInput";
import { RideUpdateInput } from "../../../inputs/RideUpdateInput";
import { RideWhereUniqueInput } from "../../../inputs/RideWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneRideArgs {
  @TypeGraphQL.Field(_type => RideWhereUniqueInput, {
    nullable: false
  })
  where!: RideWhereUniqueInput;

  @TypeGraphQL.Field(_type => RideCreateInput, {
    nullable: false
  })
  create!: RideCreateInput;

  @TypeGraphQL.Field(_type => RideUpdateInput, {
    nullable: false
  })
  update!: RideUpdateInput;
}
