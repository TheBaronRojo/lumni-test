import { ReactNode } from "react";

export default interface IJobOfferRow {
  id: string;
  jobRole: ReactNode;
  company: ReactNode;
  knowledgeArea: ReactNode;
  location: ReactNode;
  creationTime: ReactNode;
  expirationTime: ReactNode;
  status: ReactNode;
  statusColor: ReactNode;
  salaryRange: ReactNode;
}
