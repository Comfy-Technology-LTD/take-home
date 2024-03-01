import { ErrorBoundary } from "react-error-boundary";
import { BoxOpenIcon } from "uicore";
import { FullSidesLayout, InsightCard, OverviewInsightCardWrapper } from "uicore/admin";

const Overview = () => {
  return (
    <>
      <ErrorBoundary fallback={<div>Something went wrong</div>} >
        <FullSidesLayout>
          <OverviewInsightCardWrapper>
            <InsightCard
              to="/policy"
              isLoading={false}
              cardDetails={{
                title: `Total active policies`,
                Icon: <BoxOpenIcon style={{ fontSize: "24px" }} />,
                figure: 20,
                unit: "",
                figureDetails: <>Current month</>,
              }}
              statusColor={"#030712"}
            />

            <InsightCard
              to="/policy/premiumList"
              isLoading={false}
              cardDetails={{
                title: `Total premium volume`,
                Icon: <BoxOpenIcon style={{ fontSize: "24px" }} />,
                figure: 10 as number,
                unit: "GH₵",
                figureDetails: <>Current month</>,
              }}
              statusColor={"#030712"}
            />
            <InsightCard
              to="/claim"
              isLoading={false}
              cardDetails={{
                title: `Total submitted claims`,
                Icon: <BoxOpenIcon style={{ fontSize: "24px" }} />,
                figure: 10 as number,
                unit: "",
                figureDetails: <>Current month</>,
              }}
              statusColor={"#030712"}
            />
            <InsightCard
              to="/claim"
              isLoading={false}
              cardDetails={{
                title: `Total claims paid out`,
                Icon: <BoxOpenIcon style={{ fontSize: "24px" }} />,
                figure: 10 as number,
                unit: "",
                figureDetails: <>Current month</>,
              }}
              statusColor={"#030712"}
            />
          </OverviewInsightCardWrapper>
        </FullSidesLayout>

      </ErrorBoundary>
      </>
      );
};

      export default Overview;
