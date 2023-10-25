export { isString, isBoolean, isNumber, isEmail, isURL, isDate, isObject } from "class-validator";

export interface IValidationOptions {
  nullable?: boolean;
  valueName?: string;
}

export function isValidateId(value: any): boolean {
  return typeof value === "string" && value.length > 5;
}

export function isInstanceOf(model: Function, value: any): boolean {
  return value instanceof model;
}

export function isArrayOf(value: any[], itemValidator: (value: any) => boolean): boolean {
  if (!(Array.isArray(value))) return false;
  for (let item of value) {
    if (!itemValidator(item)) return false;
  }
  return true;
}

export function isEnum(model: object, value: any): boolean {
  return value in model;
}
