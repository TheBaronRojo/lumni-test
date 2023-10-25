import RequireUserRole from "@view/common/RequireUserRole";
import JobOffersSection from "./JobOffersSection";
import UserRole from "@domain/models/UserRole";
import AppHeaderLayout from "@view/common/AppHeaderLayout";
import { BiMessageAltError } from "react-icons/bi";
import Head from "next/head";
import LeftPanelLayout from "@view/common/LeftPanelLayout/LeftPanelLayout";
import AdminMainMenuPanel from "../AdminMainMenuPanel";


const JobOffersPage = () => {

  const helpMessage = {
    icon: < BiMessageAltError style={{ color: "var(--color-primary)", width: "1.3rem", height: "1.3rem" }} />,
    title: " Recuerda revisar las ofertas para que sean publicadas."
  };

  return (
    <AppHeaderLayout>
      <Head>
        <title>Ofertas laborales</title>
      </Head>
      <RequireUserRole role={UserRole.Staff}>
        <LeftPanelLayout Panel={AdminMainMenuPanel} panelProps={{ helpMessage }}>
          <div style={{ width: "100%", height: "100%", overflow: "hidden" }}>
            <JobOffersSection />
          </div>
        </LeftPanelLayout>
      </RequireUserRole>
    </AppHeaderLayout>
  );
}

export default JobOffersPage;
