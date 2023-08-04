import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SubscribedRideCreateInput } from "../../../inputs/SubscribedRideCreateInput";
import { SubscribedRideUpdateInput } from "../../../inputs/SubscribedRideUpdateInput";
import { SubscribedRideWhereUniqueInput } from "../../../inputs/SubscribedRideWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneSubscribedRideArgs {
  @TypeGraphQL.Field(_type => SubscribedRideWhereUniqueInput, {
    nullable: false
  })
  where!: SubscribedRideWhereUniqueInput;

  @TypeGraphQL.Field(_type => SubscribedRideCreateInput, {
    nullable: false
  })
  create!: SubscribedRideCreateInput;

  @TypeGraphQL.Field(_type => SubscribedRideUpdateInput, {
    nullable: false
  })
  update!: SubscribedRideUpdateInput;
}
