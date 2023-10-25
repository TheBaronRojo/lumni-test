import UserRole from "@domain/models/UserRole";
import AppHeaderLayout from "@view/common/AppHeaderLayout";
import CenteredPageLayout from "@view/common/CenteredPageLayout";
import LeftPanelLayout from "@view/common/LeftPanelLayout/LeftPanelLayout";
import RequireUserRole from "@view/common/RequireUserRole";
import AdminMainMenuPanel from "@view/admin/AdminMainMenuPanel";
import Head from "next/head";

export default function AdminPage() {
  return (
    <AppHeaderLayout>
      <Head>
        <title>Administración</title>
      </Head>
      <RequireUserRole role={UserRole.Staff}>
        <LeftPanelLayout Panel={AdminMainMenuPanel}>
          <CenteredPageLayout>

          </CenteredPageLayout>
        </LeftPanelLayout>
      </RequireUserRole>
    </AppHeaderLayout>
  );
}
