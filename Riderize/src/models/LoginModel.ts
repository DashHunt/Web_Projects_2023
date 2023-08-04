import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.ObjectType("Token", {})
export class LoginModel {
  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  token!: string;
}
