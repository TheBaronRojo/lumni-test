import KeywordsJobOfferSearch from "@domain/models/KeywordsJobOfferSearch";
import { singleton } from "tsyringe";
import JobOfferEntity from "../models/JobOfferEntity";

@singleton()
class JobOffersRepository {
  fetchById(id: string): Promise<JobOfferEntity | null> {
    throw new Error("Not implemented");
  }

  fetchAll(): Promise<JobOfferEntity[]> {
    throw new Error("Not implemented");
  }

  fetchByKeywordsSearch(search: KeywordsJobOfferSearch): Promise<JobOfferEntity[] | null> {
    throw new Error("Not implemented");
  }

  fetchAllPublished(): Promise<JobOfferEntity[]>{
    throw new Error("Not implemented");
  }

  saveNew(entity: JobOfferEntity): Promise<void> {
    throw new Error("Not implemented");
  }

  saveUpdates(entity: JobOfferEntity): Promise<void> {
    throw new Error("Not implemented")
  }
}

export default JobOffersRepository;
