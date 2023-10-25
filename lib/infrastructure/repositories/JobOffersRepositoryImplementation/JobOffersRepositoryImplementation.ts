import JobOfferEntity from "@domain/models/JobOfferEntity";
import JobOffersRepository from "@domain/repository/JobOffersRepository";
import { singleton } from "tsyringe";
import JobOfferDbmMapper from "../../cosmosDbmMappers/JobOfferDbmMapper";
import IJobOfferDbm from "../../cosmosDbModels/IJobOfferDbm";
import KeywordsJobOfferSearch from "@domain/models/KeywordsJobOfferSearch";
import KeywordsServices from "@domain/keywords/KeywordsServices";
import { dummyJobOffers } from "./dummyJobOffers";
import { delay } from "../dummyRepositoryUtils";

@singleton()
class JobOffersCosmosRepository extends JobOffersRepository {

  constructor(
    private jobOfferDbmMapper: JobOfferDbmMapper,
    private keywordsServices: KeywordsServices,
  ) {
    super();
  }

  override async fetchById(id: string): Promise<JobOfferEntity | null> {
    await delay(500);
    const dbm = this.items().find(x => x.id === id) ?? null;
    return dbm && this.jobOfferDbmMapper.dbmToEntity(dbm);
  }

  override async fetchAll(): Promise<JobOfferEntity[]> {
    await delay(1000);
    return this.items().map(x => this.jobOfferDbmMapper.dbmToEntity(x));
  }

  override async saveNew(entity: JobOfferEntity): Promise<void> {
    await delay(500);
    const oldDbm = this.items().find(x => x.id === entity.id);
    if (oldDbm) throw new Error(`${JobOfferEntity.name} with id = '${entity.id} already exist'`);

    const newDbm = this.jobOfferDbmMapper.entityToDbm(entity);
    this.items().push(newDbm);
  }

  override async saveUpdates(entity: JobOfferEntity): Promise<void> {
    await delay(500);
    const oldDbm = this.items().find(x => x.id === entity.id);
    if (!oldDbm) throw new Error(`${JobOfferEntity.name} with id = '${entity.id} not exist'`);
    const newDbm = this.jobOfferDbmMapper.entityToDbm(entity);
    Object.assign(oldDbm, newDbm);
  }

  override async fetchByKeywordsSearch(search: KeywordsJobOfferSearch): Promise<JobOfferEntity[] | null> {
    await delay(1500);
    const searchKeyWords = this.keywordsServices.extractKeyWordsFromString(search.keywords);
    const searchKeyWordsSplit = this.keywordsServices.keyWordsToArray(searchKeyWords);

    if (searchKeyWordsSplit.length == 0) return null;

    let dbms = this.items();
    if (search.isApprovedForPublication !== null) {
      dbms = dbms.filter(x => x.isApprovedForPublication === search.isApprovedForPublication)
    }
    if (search.expiresAfter !== null) {
      const expiresAfterDbm = search.expiresAfter.getTime();
      dbms = dbms.filter(x => x.expiresAt == null || x.expiresAt > expiresAfterDbm);
    }
    dbms = dbms.filter(x => x.keyWords && searchKeyWordsSplit.every(keyword => x.keyWords && x.keyWords.includes(keyword)));

    return dbms.map(x => this.jobOfferDbmMapper.dbmToEntity(x));
  }

  override async fetchAllPublished(): Promise<JobOfferEntity[]> {
    await delay(1000);
    const expiresAfterDbm = new Date().getTime();
    let dbms = this.items().filter(x => x.isApprovedForPublication === true && (x.expiresAt == null || x.expiresAt > expiresAfterDbm));
    return dbms.map(x => this.jobOfferDbmMapper.dbmToEntity(x));
  }

  // Private methods

  private items() {
    return dummyJobOffers as IJobOfferDbm[];
  }
}

export default JobOffersCosmosRepository;
