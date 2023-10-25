import { RefObject, useState } from "react";


export function useElementHeight(ref: RefObject<HTMLElement>): number | undefined {
  // const [height, setHeight] = useState<number | undefined>()
  if(!ref.current) return undefined
  return ref.current.offsetHeight;
}
