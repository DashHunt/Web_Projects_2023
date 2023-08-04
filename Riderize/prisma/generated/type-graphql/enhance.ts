import { ClassType } from "type-graphql";
import * as tslib from "tslib";
import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as argsTypes from "./resolvers/crud/args.index";
import * as actionResolvers from "./resolvers/crud/resolvers-actions.index";
import * as models from "./models";
import * as outputTypes from "./resolvers/outputs";
import * as inputTypes from "./resolvers/inputs";

export type MethodDecoratorOverrideFn = (decorators: MethodDecorator[]) => MethodDecorator[];

const crudResolversMap = {
  Users: crudResolvers.UsersCrudResolver,
  Ride: crudResolvers.RideCrudResolver,
  SubscribedRide: crudResolvers.SubscribedRideCrudResolver
};
const actionResolversMap = {
  Users: {
    aggregateUsers: actionResolvers.AggregateUsersResolver,
    createManyUsers: actionResolvers.CreateManyUsersResolver,
    createOneUsers: actionResolvers.CreateOneUsersResolver,
    deleteManyUsers: actionResolvers.DeleteManyUsersResolver,
    deleteOneUsers: actionResolvers.DeleteOneUsersResolver,
    findFirstUsers: actionResolvers.FindFirstUsersResolver,
    findFirstUsersOrThrow: actionResolvers.FindFirstUsersOrThrowResolver,
    findManyUsers: actionResolvers.FindManyUsersResolver,
    findUniqueUsers: actionResolvers.FindUniqueUsersResolver,
    findUniqueUsersOrThrow: actionResolvers.FindUniqueUsersOrThrowResolver,
    groupByUsers: actionResolvers.GroupByUsersResolver,
    updateManyUsers: actionResolvers.UpdateManyUsersResolver,
    updateOneUsers: actionResolvers.UpdateOneUsersResolver,
    upsertOneUsers: actionResolvers.UpsertOneUsersResolver
  },
  Ride: {
    aggregateRide: actionResolvers.AggregateRideResolver,
    createManyRide: actionResolvers.CreateManyRideResolver,
    createOneRide: actionResolvers.CreateOneRideResolver,
    deleteManyRide: actionResolvers.DeleteManyRideResolver,
    deleteOneRide: actionResolvers.DeleteOneRideResolver,
    findFirstRide: actionResolvers.FindFirstRideResolver,
    findFirstRideOrThrow: actionResolvers.FindFirstRideOrThrowResolver,
    rides: actionResolvers.FindManyRideResolver,
    ride: actionResolvers.FindUniqueRideResolver,
    getRide: actionResolvers.FindUniqueRideOrThrowResolver,
    groupByRide: actionResolvers.GroupByRideResolver,
    updateManyRide: actionResolvers.UpdateManyRideResolver,
    updateOneRide: actionResolvers.UpdateOneRideResolver,
    upsertOneRide: actionResolvers.UpsertOneRideResolver
  },
  SubscribedRide: {
    aggregateSubscribedRide: actionResolvers.AggregateSubscribedRideResolver,
    createManySubscribedRide: actionResolvers.CreateManySubscribedRideResolver,
    createOneSubscribedRide: actionResolvers.CreateOneSubscribedRideResolver,
    deleteManySubscribedRide: actionResolvers.DeleteManySubscribedRideResolver,
    deleteOneSubscribedRide: actionResolvers.DeleteOneSubscribedRideResolver,
    findFirstSubscribedRide: actionResolvers.FindFirstSubscribedRideResolver,
    findFirstSubscribedRideOrThrow: actionResolvers.FindFirstSubscribedRideOrThrowResolver,
    subscribedRides: actionResolvers.FindManySubscribedRideResolver,
    subscribedRide: actionResolvers.FindUniqueSubscribedRideResolver,
    getSubscribedRide: actionResolvers.FindUniqueSubscribedRideOrThrowResolver,
    groupBySubscribedRide: actionResolvers.GroupBySubscribedRideResolver,
    updateManySubscribedRide: actionResolvers.UpdateManySubscribedRideResolver,
    updateOneSubscribedRide: actionResolvers.UpdateOneSubscribedRideResolver,
    upsertOneSubscribedRide: actionResolvers.UpsertOneSubscribedRideResolver
  }
};
const crudResolversInfo = {
  Users: ["aggregateUsers", "createManyUsers", "createOneUsers", "deleteManyUsers", "deleteOneUsers", "findFirstUsers", "findFirstUsersOrThrow", "findManyUsers", "findUniqueUsers", "findUniqueUsersOrThrow", "groupByUsers", "updateManyUsers", "updateOneUsers", "upsertOneUsers"],
  Ride: ["aggregateRide", "createManyRide", "createOneRide", "deleteManyRide", "deleteOneRide", "findFirstRide", "findFirstRideOrThrow", "rides", "ride", "getRide", "groupByRide", "updateManyRide", "updateOneRide", "upsertOneRide"],
  SubscribedRide: ["aggregateSubscribedRide", "createManySubscribedRide", "createOneSubscribedRide", "deleteManySubscribedRide", "deleteOneSubscribedRide", "findFirstSubscribedRide", "findFirstSubscribedRideOrThrow", "subscribedRides", "subscribedRide", "getSubscribedRide", "groupBySubscribedRide", "updateManySubscribedRide", "updateOneSubscribedRide", "upsertOneSubscribedRide"]
};
const argsInfo = {
  AggregateUsersArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyUsersArgs: ["data", "skipDuplicates"],
  CreateOneUsersArgs: ["data"],
  DeleteManyUsersArgs: ["where"],
  DeleteOneUsersArgs: ["where"],
  FindFirstUsersArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstUsersOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyUsersArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueUsersArgs: ["where"],
  FindUniqueUsersOrThrowArgs: ["where"],
  GroupByUsersArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyUsersArgs: ["data", "where"],
  UpdateOneUsersArgs: ["data", "where"],
  UpsertOneUsersArgs: ["where", "create", "update"],
  AggregateRideArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyRideArgs: ["data", "skipDuplicates"],
  CreateOneRideArgs: ["data"],
  DeleteManyRideArgs: ["where"],
  DeleteOneRideArgs: ["where"],
  FindFirstRideArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstRideOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyRideArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueRideArgs: ["where"],
  FindUniqueRideOrThrowArgs: ["where"],
  GroupByRideArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyRideArgs: ["data", "where"],
  UpdateOneRideArgs: ["data", "where"],
  UpsertOneRideArgs: ["where", "create", "update"],
  AggregateSubscribedRideArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManySubscribedRideArgs: ["data", "skipDuplicates"],
  CreateOneSubscribedRideArgs: ["data"],
  DeleteManySubscribedRideArgs: ["where"],
  DeleteOneSubscribedRideArgs: ["where"],
  FindFirstSubscribedRideArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstSubscribedRideOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManySubscribedRideArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueSubscribedRideArgs: ["where"],
  FindUniqueSubscribedRideOrThrowArgs: ["where"],
  GroupBySubscribedRideArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManySubscribedRideArgs: ["data", "where"],
  UpdateOneSubscribedRideArgs: ["data", "where"],
  UpsertOneSubscribedRideArgs: ["where", "create", "update"]
};

type ResolverModelNames = keyof typeof crudResolversMap;

type ModelResolverActionNames<
  TModel extends ResolverModelNames
> = keyof typeof crudResolversMap[TModel]["prototype"];

export type ResolverActionsConfig<
  TModel extends ResolverModelNames
> = Partial<Record<ModelResolverActionNames<TModel>, MethodDecorator[] | MethodDecoratorOverrideFn>>
  & {
    _all?: MethodDecorator[];
    _query?: MethodDecorator[];
    _mutation?: MethodDecorator[];
  };

export type ResolversEnhanceMap = {
  [TModel in ResolverModelNames]?: ResolverActionsConfig<TModel>;
};

export function applyResolversEnhanceMap(
  resolversEnhanceMap: ResolversEnhanceMap,
) {
  const mutationOperationPrefixes = [
    "createOne", "createMany", "deleteOne", "updateOne", "deleteMany", "updateMany", "upsertOne"
  ];
  for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
    const modelName = resolversEnhanceMapKey as keyof typeof resolversEnhanceMap;
    const crudTarget = crudResolversMap[modelName].prototype;
    const resolverActionsConfig = resolversEnhanceMap[modelName]!;
    const actionResolversConfig = actionResolversMap[modelName];
    const allActionsDecorators = resolverActionsConfig._all;
    const resolverActionNames = crudResolversInfo[modelName as keyof typeof crudResolversInfo];
    for (const resolverActionName of resolverActionNames) {
      const maybeDecoratorsOrFn = resolverActionsConfig[
        resolverActionName as keyof typeof resolverActionsConfig
      ] as MethodDecorator[] | MethodDecoratorOverrideFn | undefined;
      const isWriteOperation = mutationOperationPrefixes.some(prefix => resolverActionName.startsWith(prefix));
      const operationKindDecorators = isWriteOperation ? resolverActionsConfig._mutation : resolverActionsConfig._query;
      const mainDecorators = [
        ...allActionsDecorators ?? [],
        ...operationKindDecorators ?? [],
      ]
      let decorators: MethodDecorator[];
      if (typeof maybeDecoratorsOrFn === "function") {
        decorators = maybeDecoratorsOrFn(mainDecorators);
      } else {
        decorators = [...mainDecorators, ...maybeDecoratorsOrFn ?? []];
      }
      const actionTarget = (actionResolversConfig[
        resolverActionName as keyof typeof actionResolversConfig
      ] as Function).prototype;
      tslib.__decorate(decorators, crudTarget, resolverActionName, null);
      tslib.__decorate(decorators, actionTarget, resolverActionName, null);
    }
  }
}

type ArgsTypesNames = keyof typeof argsTypes;

type ArgFieldNames<TArgsType extends ArgsTypesNames> = Exclude<
  keyof typeof argsTypes[TArgsType]["prototype"],
  number | symbol
>;

type ArgFieldsConfig<
  TArgsType extends ArgsTypesNames
> = FieldsConfig<ArgFieldNames<TArgsType>>;

export type ArgConfig<TArgsType extends ArgsTypesNames> = {
  class?: ClassDecorator[];
  fields?: ArgFieldsConfig<TArgsType>;
};

export type ArgsTypesEnhanceMap = {
  [TArgsType in ArgsTypesNames]?: ArgConfig<TArgsType>;
};

export function applyArgsTypesEnhanceMap(
  argsTypesEnhanceMap: ArgsTypesEnhanceMap,
) {
  for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
    const argsTypeName = argsTypesEnhanceMapKey as keyof typeof argsTypesEnhanceMap;
    const typeConfig = argsTypesEnhanceMap[argsTypeName]!;
    const typeClass = argsTypes[argsTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      argsInfo[argsTypeName as keyof typeof argsInfo],
    );
  }
}

type TypeConfig = {
  class?: ClassDecorator[];
  fields?: FieldsConfig;
};

export type PropertyDecoratorOverrideFn = (decorators: PropertyDecorator[]) => PropertyDecorator[];

type FieldsConfig<TTypeKeys extends string = string> = Partial<
  Record<TTypeKeys, PropertyDecorator[] | PropertyDecoratorOverrideFn>
> & { _all?: PropertyDecorator[] };

function applyTypeClassEnhanceConfig<
  TEnhanceConfig extends TypeConfig,
  TType extends object
>(
  enhanceConfig: TEnhanceConfig,
  typeClass: ClassType<TType>,
  typePrototype: TType,
  typeFieldNames: string[]
) {
  if (enhanceConfig.class) {
    tslib.__decorate(enhanceConfig.class, typeClass);
  }
  if (enhanceConfig.fields) {
    const allFieldsDecorators = enhanceConfig.fields._all ?? [];
    for (const typeFieldName of typeFieldNames) {
      const maybeDecoratorsOrFn = enhanceConfig.fields[
        typeFieldName
      ] as PropertyDecorator[] | PropertyDecoratorOverrideFn | undefined;
      let decorators: PropertyDecorator[];
      if (typeof maybeDecoratorsOrFn === "function") {
        decorators = maybeDecoratorsOrFn(allFieldsDecorators);
      } else {
        decorators = [...allFieldsDecorators, ...maybeDecoratorsOrFn ?? []];
      }
      tslib.__decorate(decorators, typePrototype, typeFieldName, void 0);
    }
  }
}

const modelsInfo = {
  Users: ["user_id", "user_name", "password"],
  Ride: ["id", "name", "start_date", "start_date_registration", "end_date_registration", "additional_information", "start_place", "participants_limit"],
  SubscribedRide: ["id", "ride_id", "user_id", "subscription_date"]
};

type ModelNames = keyof typeof models;

type ModelFieldNames<TModel extends ModelNames> = Exclude<
  keyof typeof models[TModel]["prototype"],
  number | symbol
>;

type ModelFieldsConfig<TModel extends ModelNames> = FieldsConfig<
  ModelFieldNames<TModel>
>;

export type ModelConfig<TModel extends ModelNames> = {
  class?: ClassDecorator[];
  fields?: ModelFieldsConfig<TModel>;
};

export type ModelsEnhanceMap = {
  [TModel in ModelNames]?: ModelConfig<TModel>;
};

export function applyModelsEnhanceMap(modelsEnhanceMap: ModelsEnhanceMap) {
  for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
    const modelName = modelsEnhanceMapKey as keyof typeof modelsEnhanceMap;
    const modelConfig = modelsEnhanceMap[modelName]!;
    const modelClass = models[modelName];
    const modelTarget = modelClass.prototype;
    applyTypeClassEnhanceConfig(
      modelConfig,
      modelClass,
      modelTarget,
      modelsInfo[modelName as keyof typeof modelsInfo],
    );
  }
}

const outputsInfo = {
  AggregateUsers: ["_count", "_avg", "_sum", "_min", "_max"],
  UsersGroupBy: ["user_id", "user_name", "password", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateRide: ["_count", "_avg", "_sum", "_min", "_max"],
  RideGroupBy: ["id", "name", "start_date", "start_date_registration", "end_date_registration", "additional_information", "start_place", "participants_limit", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateSubscribedRide: ["_count", "_avg", "_sum", "_min", "_max"],
  SubscribedRideGroupBy: ["id", "ride_id", "user_id", "subscription_date", "_count", "_avg", "_sum", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  UsersCountAggregate: ["user_id", "user_name", "password", "_all"],
  UsersAvgAggregate: ["user_id"],
  UsersSumAggregate: ["user_id"],
  UsersMinAggregate: ["user_id", "user_name", "password"],
  UsersMaxAggregate: ["user_id", "user_name", "password"],
  RideCountAggregate: ["id", "name", "start_date", "start_date_registration", "end_date_registration", "additional_information", "start_place", "participants_limit", "_all"],
  RideAvgAggregate: ["id", "participants_limit"],
  RideSumAggregate: ["id", "participants_limit"],
  RideMinAggregate: ["id", "name", "start_date", "start_date_registration", "end_date_registration", "additional_information", "start_place", "participants_limit"],
  RideMaxAggregate: ["id", "name", "start_date", "start_date_registration", "end_date_registration", "additional_information", "start_place", "participants_limit"],
  SubscribedRideCountAggregate: ["id", "ride_id", "user_id", "subscription_date", "_all"],
  SubscribedRideAvgAggregate: ["id", "ride_id", "user_id"],
  SubscribedRideSumAggregate: ["id", "ride_id", "user_id"],
  SubscribedRideMinAggregate: ["id", "ride_id", "user_id", "subscription_date"],
  SubscribedRideMaxAggregate: ["id", "ride_id", "user_id", "subscription_date"]
};

type OutputTypesNames = keyof typeof outputTypes;

type OutputTypeFieldNames<TOutput extends OutputTypesNames> = Exclude<
  keyof typeof outputTypes[TOutput]["prototype"],
  number | symbol
>;

type OutputTypeFieldsConfig<
  TOutput extends OutputTypesNames
> = FieldsConfig<OutputTypeFieldNames<TOutput>>;

export type OutputTypeConfig<TOutput extends OutputTypesNames> = {
  class?: ClassDecorator[];
  fields?: OutputTypeFieldsConfig<TOutput>;
};

export type OutputTypesEnhanceMap = {
  [TOutput in OutputTypesNames]?: OutputTypeConfig<TOutput>;
};

export function applyOutputTypesEnhanceMap(
  outputTypesEnhanceMap: OutputTypesEnhanceMap,
) {
  for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
    const outputTypeName = outputTypeEnhanceMapKey as keyof typeof outputTypesEnhanceMap;
    const typeConfig = outputTypesEnhanceMap[outputTypeName]!;
    const typeClass = outputTypes[outputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      outputsInfo[outputTypeName as keyof typeof outputsInfo],
    );
  }
}

const inputsInfo = {
  UsersWhereInput: ["AND", "OR", "NOT", "user_id", "user_name", "password"],
  UsersOrderByWithRelationInput: ["user_id", "user_name", "password"],
  UsersWhereUniqueInput: ["user_id", "AND", "OR", "NOT", "user_name", "password"],
  UsersOrderByWithAggregationInput: ["user_id", "user_name", "password", "_count", "_avg", "_max", "_min", "_sum"],
  UsersScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "user_id", "user_name", "password"],
  RideWhereInput: ["AND", "OR", "NOT", "id", "name", "start_date", "start_date_registration", "end_date_registration", "additional_information", "start_place", "participants_limit"],
  RideOrderByWithRelationInput: ["id", "name", "start_date", "start_date_registration", "end_date_registration", "additional_information", "start_place", "participants_limit"],
  RideWhereUniqueInput: ["id", "AND", "OR", "NOT", "name", "start_date", "start_date_registration", "end_date_registration", "additional_information", "start_place", "participants_limit"],
  RideOrderByWithAggregationInput: ["id", "name", "start_date", "start_date_registration", "end_date_registration", "additional_information", "start_place", "participants_limit", "_count", "_avg", "_max", "_min", "_sum"],
  RideScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "start_date", "start_date_registration", "end_date_registration", "additional_information", "start_place", "participants_limit"],
  SubscribedRideWhereInput: ["AND", "OR", "NOT", "id", "ride_id", "user_id", "subscription_date"],
  SubscribedRideOrderByWithRelationInput: ["id", "ride_id", "user_id", "subscription_date"],
  SubscribedRideWhereUniqueInput: ["id", "AND", "OR", "NOT", "ride_id", "user_id", "subscription_date"],
  SubscribedRideOrderByWithAggregationInput: ["id", "ride_id", "user_id", "subscription_date", "_count", "_avg", "_max", "_min", "_sum"],
  SubscribedRideScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "ride_id", "user_id", "subscription_date"],
  UsersCreateInput: ["user_name", "password"],
  UsersUpdateInput: ["user_name", "password"],
  UsersCreateManyInput: ["user_id", "user_name", "password"],
  UsersUpdateManyMutationInput: ["user_name", "password"],
  RideCreateInput: ["name", "start_date", "start_date_registration", "end_date_registration", "additional_information", "start_place", "participants_limit"],
  RideUpdateInput: ["name", "start_date", "start_date_registration", "end_date_registration", "additional_information", "start_place", "participants_limit"],
  RideCreateManyInput: ["id", "name", "start_date", "start_date_registration", "end_date_registration", "additional_information", "start_place", "participants_limit"],
  RideUpdateManyMutationInput: ["name", "start_date", "start_date_registration", "end_date_registration", "additional_information", "start_place", "participants_limit"],
  SubscribedRideCreateInput: ["ride_id", "user_id", "subscription_date"],
  SubscribedRideUpdateInput: ["ride_id", "user_id", "subscription_date"],
  SubscribedRideCreateManyInput: ["id", "ride_id", "user_id", "subscription_date"],
  SubscribedRideUpdateManyMutationInput: ["ride_id", "user_id", "subscription_date"],
  IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  UsersCountOrderByAggregateInput: ["user_id", "user_name", "password"],
  UsersAvgOrderByAggregateInput: ["user_id"],
  UsersMaxOrderByAggregateInput: ["user_id", "user_name", "password"],
  UsersMinOrderByAggregateInput: ["user_id", "user_name", "password"],
  UsersSumOrderByAggregateInput: ["user_id"],
  IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  SortOrderInput: ["sort", "nulls"],
  RideCountOrderByAggregateInput: ["id", "name", "start_date", "start_date_registration", "end_date_registration", "additional_information", "start_place", "participants_limit"],
  RideAvgOrderByAggregateInput: ["id", "participants_limit"],
  RideMaxOrderByAggregateInput: ["id", "name", "start_date", "start_date_registration", "end_date_registration", "additional_information", "start_place", "participants_limit"],
  RideMinOrderByAggregateInput: ["id", "name", "start_date", "start_date_registration", "end_date_registration", "additional_information", "start_place", "participants_limit"],
  RideSumOrderByAggregateInput: ["id", "participants_limit"],
  DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  SubscribedRideCountOrderByAggregateInput: ["id", "ride_id", "user_id", "subscription_date"],
  SubscribedRideAvgOrderByAggregateInput: ["id", "ride_id", "user_id"],
  SubscribedRideMaxOrderByAggregateInput: ["id", "ride_id", "user_id", "subscription_date"],
  SubscribedRideMinOrderByAggregateInput: ["id", "ride_id", "user_id", "subscription_date"],
  SubscribedRideSumOrderByAggregateInput: ["id", "ride_id", "user_id"],
  StringFieldUpdateOperationsInput: ["set"],
  IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  DateTimeFieldUpdateOperationsInput: ["set"],
  NullableStringFieldUpdateOperationsInput: ["set"],
  NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"]
};

type InputTypesNames = keyof typeof inputTypes;

type InputTypeFieldNames<TInput extends InputTypesNames> = Exclude<
  keyof typeof inputTypes[TInput]["prototype"],
  number | symbol
>;

type InputTypeFieldsConfig<
  TInput extends InputTypesNames
> = FieldsConfig<InputTypeFieldNames<TInput>>;

export type InputTypeConfig<TInput extends InputTypesNames> = {
  class?: ClassDecorator[];
  fields?: InputTypeFieldsConfig<TInput>;
};

export type InputTypesEnhanceMap = {
  [TInput in InputTypesNames]?: InputTypeConfig<TInput>;
};

export function applyInputTypesEnhanceMap(
  inputTypesEnhanceMap: InputTypesEnhanceMap,
) {
  for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
    const inputTypeName = inputTypeEnhanceMapKey as keyof typeof inputTypesEnhanceMap;
    const typeConfig = inputTypesEnhanceMap[inputTypeName]!;
    const typeClass = inputTypes[inputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      inputsInfo[inputTypeName as keyof typeof inputsInfo],
    );
  }
}

