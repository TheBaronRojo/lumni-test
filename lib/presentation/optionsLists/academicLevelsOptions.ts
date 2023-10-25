import AcademicLevel from "@domain/models/AcademicLevel";
import academicLevelForHumans from "@presentation/enums/academicLevelForHumans";

export const academicLevelsOptionsValues = [
  AcademicLevel.Technical,
  AcademicLevel.Tenogologist,
  AcademicLevel.Professional,
  AcademicLevel.Specialization,
  AcademicLevel.Master,
];

const academicLevelsOptions = academicLevelsOptionsValues
  .map(x => ({ value: x, text: academicLevelForHumans(x)}));

export default academicLevelsOptions;
