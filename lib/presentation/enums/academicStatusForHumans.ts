import AcademicStatus from "@domain/models/AcademicStatus";

export default function academicStatusForHumans(academicStatus: AcademicStatus): string {
  switch (academicStatus) {
    case AcademicStatus.AcademicStop:
      return "AcademicStop";
    case AcademicStatus.DropOut:
      return "DropOut";
    case AcademicStatus.Graduated:
      return "Graduado";
    case AcademicStatus.GraduationProcess:
      return "En proceso de grado";
    case AcademicStatus.Studing:
      return "Estudiando";
  }
}
