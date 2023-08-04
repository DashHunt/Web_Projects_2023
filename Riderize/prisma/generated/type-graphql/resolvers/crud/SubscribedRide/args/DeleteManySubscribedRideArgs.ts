import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SubscribedRideWhereInput } from "../../../inputs/SubscribedRideWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManySubscribedRideArgs {
  @TypeGraphQL.Field(_type => SubscribedRideWhereInput, {
    nullable: true
  })
  where?: SubscribedRideWhereInput | undefined;
}
