import AcademicDegree from "@domain/models/AcademicDegree";
import AcademicStatus from "@domain/models/AcademicStatus";
import { DataError } from "@infrastructure/errors";
import IAcademicDegreeDbm from "../cosmosDbModels/IAcademicDegreeDbm";

export default class AcademicDegreeDbmMapper {

  valueToDbm(value: AcademicDegree): IAcademicDegreeDbm {
    return {
      personId: value.personId,
      createdAt: value.createdAt.getTime(),
      updatedAt: value.updatedAt.getTime(),
      academicStatus: (() => {
        switch (value.academicStatus) {
          case AcademicStatus.AcademicStop:
            return "academicStop";
          case AcademicStatus.DropOut:
            return "dropOut";
          case AcademicStatus.Graduated:
            return "graduated";
          case AcademicStatus.GraduationProcess:
            return "graduationProcess";
          case AcademicStatus.Studing:
            return "studing";
        }
      })(),
      degreeObtained: value.degreeObtained,
      egressDate: value.egressDate === null
        ? null
        : value.egressDate.getTime(),
    }
  }

  dbmToValue(dbm: IAcademicDegreeDbm): AcademicDegree {
    return new AcademicDegree(
      dbm.personId,
      new Date(dbm.createdAt),
      new Date(dbm.updatedAt),
      (() => {
        switch (dbm.academicStatus) {
          case "academicStop":
            return AcademicStatus.AcademicStop;
          case "dropOut":
            return AcademicStatus.DropOut;
          case "graduated":
            return AcademicStatus.Graduated;
          case "graduationProcess":
            return AcademicStatus.GraduationProcess;
          case "studing":
            return AcademicStatus.Studing;
          default:
            throw new DataError(`${dbm.academicStatus} is invalid AcademicStatusDbm`)
        }
      })(),
      dbm.degreeObtained,
      dbm.egressDate === null
        ? null
        : new Date(dbm.egressDate)
    );
  }
}