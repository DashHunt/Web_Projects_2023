import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SubscribedRideUpdateInput } from "../../../inputs/SubscribedRideUpdateInput";
import { SubscribedRideWhereUniqueInput } from "../../../inputs/SubscribedRideWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneSubscribedRideArgs {
  @TypeGraphQL.Field(_type => SubscribedRideUpdateInput, {
    nullable: false
  })
  data!: SubscribedRideUpdateInput;

  @TypeGraphQL.Field(_type => SubscribedRideWhereUniqueInput, {
    nullable: false
  })
  where!: SubscribedRideWhereUniqueInput;
}
