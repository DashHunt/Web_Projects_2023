import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RideCreateManyInput } from "../../../inputs/RideCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyRideArgs {
  @TypeGraphQL.Field(_type => [RideCreateManyInput], {
    nullable: false
  })
  data!: RideCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
