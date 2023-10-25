
interface IRequestOptions {
  parseResponseAs?: "json" | "text" | "blob";
  headers?: { [k: string]: string };
}

export default IRequestOptions;
