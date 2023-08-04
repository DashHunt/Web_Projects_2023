import * as TypeGraphQL from "type-graphql";

export enum UsersScalarFieldEnum {
  user_id = "user_id",
  user_name = "user_name",
  password = "password"
}
TypeGraphQL.registerEnumType(UsersScalarFieldEnum, {
  name: "UsersScalarFieldEnum",
  description: undefined,
});
