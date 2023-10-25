import IJobOfferApplicationReportRow from "./IJobOfferApplicationReportRow";


const jobOfferApplicationReportColumnsForHumansMap: { [k in keyof IJobOfferApplicationReportRow]: string } = {
  id: "ID Aplicación",
  jobOfferId: "ID Oferta",
  companyName: "Nombre Empresa",
  jobRole: "Cargo",
  personName: "Nombre Estudiante",
  personLastName: "Apellido Estudiante",
  personContactEmail: "Correo Estudiante",
  personLocation: "Ubicación Estudiante",
  createdAt: "Fecha-Hora Postulación",
  cvUrl: "Link Hoja de Vida",
};

export default jobOfferApplicationReportColumnsForHumansMap;
