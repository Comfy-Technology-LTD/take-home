import { Outlet } from "react-router-dom";
import { BoxOpenIcon, CogIcon, MenuIcon, MoneyBagIcon, UserGroupIcon, ViewGridIcon } from "uicore";
import { Layout, TopNavigation, TwoSideLayout } from "uicore/admin";

const LayoutWrapper = () => {
  return (
    <>
      <TopNavigation
        allRoutes={[
          {
            path: "/",
            name: "Overview",
            icon: <ViewGridIcon />,
          },
          {
            path: "/policy",
            name: "Policies",
            icon: <BoxOpenIcon style={{ fontSize: "24px" }} />,
          },
          {
            path: "/claim",
            name: "Claims",
            icon: <MoneyBagIcon style={{ fontSize: "24px" }} />,
          },
          {
            path: "/reinsurer",
            name: "Reinsurers",
            icon: <UserGroupIcon style={{ fontSize: "24px" }} />,
          },
          {
            path: "/cedent",
            name: "Cedents",
            icon: <MenuIcon style={{ fontSize: "24px" }} />,
          },
          {
            path: "/settings",
            name: "Settings",
            icon: <CogIcon />,
          },
        ]}
        userDetails={{
          photo: "",
          username: "",
          phoneNumber: "",
        }}
        handleSubRoute={function (): void {
          throw new Error("Function not implemented.");
        }}
      />

      <Layout>
        <TwoSideLayout>
          <Outlet />
        </TwoSideLayout>
      </Layout>
    </>
  );
};

export default LayoutWrapper;
