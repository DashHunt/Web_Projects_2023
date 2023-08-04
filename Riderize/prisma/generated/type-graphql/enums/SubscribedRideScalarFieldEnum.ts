import * as TypeGraphQL from "type-graphql";

export enum SubscribedRideScalarFieldEnum {
  id = "id",
  ride_id = "ride_id",
  user_id = "user_id",
  subscription_date = "subscription_date"
}
TypeGraphQL.registerEnumType(SubscribedRideScalarFieldEnum, {
  name: "SubscribedRideScalarFieldEnum",
  description: undefined,
});
