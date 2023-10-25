
export class PropertyError<T extends Object> extends Error {
  constructor(obj: T, property: keyof T, message: string) {
    super(`${obj.constructor.name}.${property as string | number}: ${message}`);
  }
}

export class ValueError extends Error {

}

export class BussinessError extends Error {

}
