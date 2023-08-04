import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SubscribedRideCreateInput } from "../../../inputs/SubscribedRideCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneSubscribedRideArgs {
  @TypeGraphQL.Field(_type => SubscribedRideCreateInput, {
    nullable: false
  })
  data!: SubscribedRideCreateInput;
}
