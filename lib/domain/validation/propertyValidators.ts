import { isNumber } from "class-validator";
import { PropertyError } from "../errors";
import {
  isArrayOf,
  isBoolean,
  isValidateId,
  isInstanceOf,
  isString,
  isURL,
  isEnum,
  isDate,
  isEmail,
} from "./valueValidators";

export interface IValidationOptions {
  nullable?: boolean;
}

function validateGenericProperty<T>(
  object: T,
  property: keyof T,
  validator: (value: any) => boolean,
  options?: IValidationOptions
) {
  const value = object[property];
  if (options && options.nullable && value === null) return;
  if (!validator(value)) {
    throw new PropertyError(object as any, property as any, "Is Invalid");
  }
}

export function validateIdProperty<T>(object: T, property: keyof T) {
  validateGenericProperty(object, property, isValidateId);
}

export function validateStringProperty<T>(object: T, property: keyof T, options?: IValidationOptions) {
  validateGenericProperty(object, property, isString, options);
}

export function validateEmailProperty<T>(object: T, property: keyof T, options?: IValidationOptions) {
  validateGenericProperty(object, property, isEmail, options);
}

export function validateNumberProperty<T>(object: T, property: keyof T, options?: IValidationOptions) {
  validateGenericProperty(object, property, isNumber, options);
}

export function validateDateProperty<T>(object: T, property: keyof T, options?: IValidationOptions) {
  validateGenericProperty(object, property, isDate, options);
}

export function validateUrlStringProperty<T>(object: T, property: keyof T, options?: IValidationOptions) {
  validateGenericProperty(object, property, isURL, options);
}

export function validateBooleanProperty<T>(object: T, property: keyof T, options?: IValidationOptions) {
  validateGenericProperty(object, property, isBoolean, options);
}

export function validateModelProperty<T>(object: T, model: Function, property: keyof T, options?: IValidationOptions) {
  validateGenericProperty(object, property, v => isInstanceOf(model, v), options);
}

export function validateArrayProperty<T>(
  object: T,
  property: keyof T,
  itemValidator: (value: any) => boolean,
  options?: IValidationOptions,
) {
  validateGenericProperty(object, property, v => isArrayOf(v, itemValidator), options);
}

export function validateEnumProperty<T>(object: T, model: object, property: keyof T, options?: IValidationOptions) {
  validateGenericProperty(object, property, v => isEnum(model, v), options);
}
