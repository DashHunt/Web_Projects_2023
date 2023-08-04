import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RideWhereUniqueInput } from "../../../inputs/RideWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneRideArgs {
  @TypeGraphQL.Field(_type => RideWhereUniqueInput, {
    nullable: false
  })
  where!: RideWhereUniqueInput;
}
