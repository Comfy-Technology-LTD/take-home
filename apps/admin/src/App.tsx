import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutWrapper from "./components/LayoutWrapper";
import Cedent from "./pages/Cedent";
import CedentList from "./pages/Cedent/CedentList";
import CreateCedent from "./pages/Cedent/CreateCedent";
import Claim from "./pages/Claim";
import ClaimList from "./pages/Claim/ClaimList";
import ClaimMetrics from "./pages/Claim/ClaimMetrics";
import CreateClaim from "./pages/Claim/CreateClaim";
import Overview from "./pages/Overview";
import Policy from "./pages/Policy";
import CreatePolicy from "./pages/Policy/CreatePolicy";
import PolicyList from "./pages/Policy/PolicyList";
import PolicyMetrics from "./pages/Policy/PolicyMetrics";
import Reinsurer from "./pages/Reinsurer";
import CreateReinsurer from "./pages/Reinsurer/CreateReinsurer";
import ReinsurerList from "./pages/Reinsurer/ReinsurerList";
import Settings from "./pages/Settings";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<LayoutWrapper />}>
            <Route path="/" element={<Overview />} />
            <Route path="/policy" element={<Policy />}>
              <Route path="" element={<PolicyList />} />
              <Route path="createPolicy" element={<CreatePolicy />} />
              <Route path="policyMetrics" element={<PolicyMetrics />} />
            </Route>
            <Route path="/claim" element={<Claim />}>
              <Route path="" element={<ClaimList />} />
              <Route path="createClaim" element={<CreateClaim />} />
              <Route path="claimMetrics" element={<ClaimMetrics />} />
            </Route>
            <Route path="/reinsurer" element={<Reinsurer />}>
              <Route path="" element={<ReinsurerList />} />
              <Route path="createClaim" element={<CreateReinsurer />} />
            </Route>
            <Route path="/cedent" element={<Cedent />}>
              <Route path="" element={<CedentList />} />
              <Route path="createCedent" element={<CreateCedent />} />
            </Route>
            <Route path="/settings" element={<Settings />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
