import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RideCreateInput } from "../../../inputs/RideCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneRideArgs {
  @TypeGraphQL.Field(_type => RideCreateInput, {
    nullable: false
  })
  data!: RideCreateInput;
}
