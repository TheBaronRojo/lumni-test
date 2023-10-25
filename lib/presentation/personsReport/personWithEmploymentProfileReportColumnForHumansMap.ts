import IPersonWithEmploymentProfileReportRow from "./IPersonWithEmploymentProfileReportRow";



const personWithEmploymentProfileReportColumnForHumansMap: { [k in keyof IPersonWithEmploymentProfileReportRow]: string } = {
  lumniPortalId: "ID 4.0",
  createEmploymentProfileAt: "Fecha de registro de perfil",
  identificationNumber: "Número de identificación",
  fullName: "Nombre completo",
  obtainedDegree: "Título que recibió",
  sectorsOfInterestForEmployment: "Sectores de interés para emplearse",
  isaGeneralStatus: "Estado general",
  isaAcademicStatus: "Estado académico",
  fundName: "Fondo",
  residencePlace: "Lugar de residencia",
};

export default personWithEmploymentProfileReportColumnForHumansMap;
