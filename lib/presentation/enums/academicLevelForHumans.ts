import AcademicLevel from "@domain/models/AcademicLevel";

export default function academicLevelForHumans(academicLevel: AcademicLevel): string {
  switch (academicLevel) {
    case AcademicLevel.Technical:
      return "Técnico";
    case AcademicLevel.Tenogologist:
      return "Tecnólogo";
    case AcademicLevel.Professional:
      return "Profesional";
    case AcademicLevel.Specialization:
      return "Especialización";
    case AcademicLevel.Master:
      return "Maestría";
  }
}
