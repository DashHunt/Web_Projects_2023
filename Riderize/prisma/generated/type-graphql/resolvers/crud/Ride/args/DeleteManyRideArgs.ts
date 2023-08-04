import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RideWhereInput } from "../../../inputs/RideWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyRideArgs {
  @TypeGraphQL.Field(_type => RideWhereInput, {
    nullable: true
  })
  where?: RideWhereInput | undefined;
}
