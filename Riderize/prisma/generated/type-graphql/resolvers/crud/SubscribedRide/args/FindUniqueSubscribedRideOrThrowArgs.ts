import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SubscribedRideWhereUniqueInput } from "../../../inputs/SubscribedRideWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueSubscribedRideOrThrowArgs {
  @TypeGraphQL.Field(_type => SubscribedRideWhereUniqueInput, {
    nullable: false
  })
  where!: SubscribedRideWhereUniqueInput;
}
