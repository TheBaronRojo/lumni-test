import { singleton } from "tsyringe";

@singleton()
export default class KeywordsJobOfferSearch {

  constructor(
    public readonly keywords: string,
    public readonly isApprovedForPublication: boolean | null,
    public readonly expiresAfter: Date | null,
  ) { }

}
