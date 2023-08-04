import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RideUpdateManyMutationInput } from "../../../inputs/RideUpdateManyMutationInput";
import { RideWhereInput } from "../../../inputs/RideWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyRideArgs {
  @TypeGraphQL.Field(_type => RideUpdateManyMutationInput, {
    nullable: false
  })
  data!: RideUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => RideWhereInput, {
    nullable: true
  })
  where?: RideWhereInput | undefined;
}
