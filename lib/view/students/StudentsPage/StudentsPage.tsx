import UserRole from "@domain/models/UserRole";
import CenteredPageLayout from "@view/common/CenteredPageLayout";
import RequireUserRole from "@view/common/RequireUserRole";
import StudentLeftPanelLayout from "@view/students/StudentLeftPanelLayout";
import { useRouter } from "next/router";
import { useEffect } from "react";
import AppHeaderLayout from "@view/common/AppHeaderLayout";

export default function StudentsPage() {

  const router = useRouter();

  useEffect(() => {
    router.push("/students/job-offers");
  }, []);

  return (
    <AppHeaderLayout>
      <RequireUserRole role={UserRole.Student}>
        <StudentLeftPanelLayout>
          <CenteredPageLayout>


          </CenteredPageLayout>
        </StudentLeftPanelLayout>
      </RequireUserRole>
    </AppHeaderLayout>
  );
}
