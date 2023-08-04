import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SubscribedRideCreateManyInput } from "../../../inputs/SubscribedRideCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManySubscribedRideArgs {
  @TypeGraphQL.Field(_type => [SubscribedRideCreateManyInput], {
    nullable: false
  })
  data!: SubscribedRideCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
