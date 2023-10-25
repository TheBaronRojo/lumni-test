import TypeOfOffice from "@domain/models/TypeOfOffice";

export default function typeofofficeForHumans(typeofoffice: TypeOfOffice): string {
  switch (typeofoffice) {
    case TypeOfOffice.Hybrid:
      return "Híbrido";
    case TypeOfOffice.Remote:
      return "Remoto";
    case TypeOfOffice.Presential:
      return "Presencial";
  }
}
