import { singleton } from "tsyringe";
import GeographyEntity from "@domain/models/GeographyEntity";
import IGeographyCosmosDbm from "../cosmosDbModels/IGeographyDbm";
import GeographyType from "@domain/models/GeographyType";

@singleton()
class GeographyDbmMapper {

  dbmToEntity(dbm: IGeographyCosmosDbm): GeographyEntity {
    return new GeographyEntity(
      dbm.id.toString(),
      dbm.name,
      (() => {
        switch (dbm.type) {
          case "country":
            return GeographyType.Country;
          case "state":
            return GeographyType.State;
          case "city":
            return GeographyType.City;
          default:
            throw new Error(`geography type for geography ${dbm.id} is invalid`);
        }
      })(),
      dbm.parentGeographyId?.toString() ?? null
    );
  }

  entityToDbm(entity: GeographyEntity): IGeographyCosmosDbm {
    return {
      id: entity.id,
      name: entity.name,
      type: ((() => {
        switch (entity.type) {
          case GeographyType.Country:
            return "country";
          case GeographyType.State:
            return "state";
          case GeographyType.City:
            return "city"
        }
      })()),
      parentGeographyId: entity.parentGeographyId,
    };
  }
}

export default GeographyDbmMapper;
