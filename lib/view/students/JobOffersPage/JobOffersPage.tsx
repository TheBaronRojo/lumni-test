import AppHeaderAndFooterLayout from "@view/common/AppHeaderAndFooterLayout";
import RequireUserRole from "@view/common/RequireUserRole";
import JobOffersSection from "./JobOffersSection";
import StudentLeftPanelLayout from "@view/students/StudentLeftPanelLayout";
import UserRole from "@domain/models/UserRole";
import AppHeaderLayout from "@view/common/AppHeaderLayout";


const JobOffersPage = () => {

  return (
    <AppHeaderLayout>
      <RequireUserRole role={UserRole.Student}>
        <StudentLeftPanelLayout>
          <JobOffersSection />
        </StudentLeftPanelLayout>
      </RequireUserRole>
    </AppHeaderLayout>
  );
}

export default JobOffersPage;
