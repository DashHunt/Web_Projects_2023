import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SubscribedRideUpdateManyMutationInput } from "../../../inputs/SubscribedRideUpdateManyMutationInput";
import { SubscribedRideWhereInput } from "../../../inputs/SubscribedRideWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManySubscribedRideArgs {
  @TypeGraphQL.Field(_type => SubscribedRideUpdateManyMutationInput, {
    nullable: false
  })
  data!: SubscribedRideUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => SubscribedRideWhereInput, {
    nullable: true
  })
  where?: SubscribedRideWhereInput | undefined;
}
