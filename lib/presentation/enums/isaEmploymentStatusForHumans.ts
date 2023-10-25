import IsaEmploymentStatus from "@domain/models/IsaEmploymentStatus";

export default function isaEmploymentStatusForHumans(status: IsaEmploymentStatus): string {
  switch (status) {
    case IsaEmploymentStatus.EmployedWithPresumptiveIncome:
      return "Empleado con ingreso presuntivo";
    case IsaEmploymentStatus.Unemployed:
      return "Desempleado";
    case IsaEmploymentStatus.EmployedWithoutCertificate:
      return "Empleado sin certificado";
    case IsaEmploymentStatus.EmployedWithoutValidIncome:
      return "Empleado sin ingreso válido";
    case IsaEmploymentStatus.Employed:
      return "Empleado";
  }
}
