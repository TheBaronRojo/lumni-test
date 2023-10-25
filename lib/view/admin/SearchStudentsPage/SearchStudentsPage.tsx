import RequireUserRole from "@view/common/RequireUserRole";
import SearchStudentsSection from "@view/admin/SearchStudentsSection";
import UserRole from "@domain/models/UserRole";
import AppHeaderLayout from "@view/common/AppHeaderLayout";
import { BiMessageAltError } from "react-icons/bi";
import LeftPanelLayout from "@view/common/LeftPanelLayout";
import AdminMainMenuPanel from "../AdminMainMenuPanel";

const SearchStudentsPage = () => {

  const helpMessage = {
    icon: <BiMessageAltError style={{ color: "var(--color-primary)", width: "1.3rem", height: "1.3rem" }} />,
    title: "Usa palabras claves para buscar estudiantes Ej: PHVA"
  };

  return (
    <AppHeaderLayout>
      <RequireUserRole role={UserRole.Staff}>
        <LeftPanelLayout Panel={AdminMainMenuPanel} panelProps={{ helpMessage }}>
          <SearchStudentsSection />
        </LeftPanelLayout>
      </RequireUserRole>
    </AppHeaderLayout>
  );
};

export default SearchStudentsPage;
