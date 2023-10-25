import { singleton } from "tsyringe";
import IGeographyLocationDbm from "../cosmosDbModels/IGeographyLocationDbm";
import GeographyLocation from "@domain/models/GeographyLocation";
import GeographyDbmMapper from "./GeographyDbmMapper";

@singleton()
class GeographyLocationDbmMapper {

  constructor(
    private geographyDbmMapper: GeographyDbmMapper
  ){ }

  dbmToValue(dbm: IGeographyLocationDbm): GeographyLocation {
    return new GeographyLocation(
      this.geographyDbmMapper.dbmToEntity(dbm.country),
      dbm.state === null ? null : this.geographyDbmMapper.dbmToEntity(dbm.state),
      dbm.city === null ? null : this.geographyDbmMapper.dbmToEntity(dbm.city),
    );
  }

  valueToDbm(value: GeographyLocation): IGeographyLocationDbm {
    return {
      country: this.geographyDbmMapper.entityToDbm(value.country),
      state: value.department === null ? null : this.geographyDbmMapper.entityToDbm(value.department),
      city: value.city === null ? null : this.geographyDbmMapper.entityToDbm(value.city),
    };
  }

}

export default GeographyLocationDbmMapper;
