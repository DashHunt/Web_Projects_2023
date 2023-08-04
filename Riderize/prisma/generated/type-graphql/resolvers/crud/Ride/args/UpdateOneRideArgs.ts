import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RideUpdateInput } from "../../../inputs/RideUpdateInput";
import { RideWhereUniqueInput } from "../../../inputs/RideWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneRideArgs {
  @TypeGraphQL.Field(_type => RideUpdateInput, {
    nullable: false
  })
  data!: RideUpdateInput;

  @TypeGraphQL.Field(_type => RideWhereUniqueInput, {
    nullable: false
  })
  where!: RideWhereUniqueInput;
}
