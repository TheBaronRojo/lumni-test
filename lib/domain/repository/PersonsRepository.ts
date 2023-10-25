import { singleton } from "tsyringe";
import PersonEntity from "../models/PersonEntity";

@singleton()
class PersonsRepository {
  fetchById(id: string): Promise<PersonEntity | null> {
    throw new Error("Not implemented");
  }

  fetchByEmploymentInfoKeyWords(searchString: string): Promise<PersonEntity[] | null> {
    throw new Error("Not implemented");
  }

  fetchAllWithEmploymentInfo(): Promise<PersonEntity[]> {
    throw new Error("Not implemented");
  }
}

export default PersonsRepository;
