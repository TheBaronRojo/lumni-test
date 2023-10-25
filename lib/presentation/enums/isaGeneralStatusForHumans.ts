import IsaGeneralStatus from "@domain/models/IsaGeneralStatus";

export default function isaGeneralStatusForHumans(status: IsaGeneralStatus): string {
  switch (status) {
    case IsaGeneralStatus.Active:
      return "Activo";
    case IsaGeneralStatus.Ceded:
      return "Cedido";
    case IsaGeneralStatus.Default:
      return "Default";
    case IsaGeneralStatus.Expelled:
      return "Expulsado";
    case IsaGeneralStatus.FinalConciliation:
      return "Conciliación final";
    case IsaGeneralStatus.FinalizedPayments:
      return "Fin de Pagos";
    case IsaGeneralStatus.Inactive:
      return "Inactivo";
    case IsaGeneralStatus.ManualActivation:
      return "Activación Manual";
    case IsaGeneralStatus.OutOfTheFound:
      return "Fuera del Fondo";
    case IsaGeneralStatus.PermanentDefault:
      return "Default permanente";
    case IsaGeneralStatus.RecoveredFromDefault:
      return "Recuperación de default";
    case IsaGeneralStatus.Retired:
      return "Retirado";
  }
}
