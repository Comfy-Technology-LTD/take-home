import { ErrorBoundary } from "react-error-boundary";
import { Outlet } from "react-router-dom";
import { PlusCircleIcon } from "uicore";
import { SideNavigation, TwoSideLayout } from "uicore/admin";

const Policy = () => {
  return (
    <>
      <ErrorBoundary fallback={<div>Something went wrong</div>}>
        <TwoSideLayout>
          <SideNavigation
            allRoutes={[
              {
                path: "/policy",
                name: "Policy List",
                icon: <PlusCircleIcon />,
              },
              {
                path: "/policy/createPolicy",
                name: "Create Policy",
                icon: <PlusCircleIcon />,
              },

              {
                path: "/policy/premiumList",
                name: "Premium List",
                icon: <PlusCircleIcon />,
              },
              {
                path: "/policy/policyMetrics",
                name: "Policy Metrics",
                icon: <PlusCircleIcon />,
              },
            ]}
          />
          <Outlet />
        </TwoSideLayout>
      </ErrorBoundary>
    </>
  );
};

export default Policy;
