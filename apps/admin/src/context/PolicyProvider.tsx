import { ReactNode, createContext, useContext, useReducer } from "react";
import {
  PolicyActions,
  PolicyDataType,
  policyInitialData,
  policyReducer,
} from "../lib/reducers/policyReducer";

interface PolicyProviderProps {
  children?: ReactNode;
}

type PolicyContextType = {
  policyState: PolicyDataType;
  policyDispatch: React.Dispatch<PolicyActions>;
};
const PolicyContext = createContext<PolicyContextType | null | string>("");

/* eslint-disable react-refresh/only-export-components */
export const usePolicyProvider = () => {
  return useContext(PolicyContext) as PolicyContextType;
};

const PolicyProvider = ({ children }: PolicyProviderProps) => {
  const [state, dispatch] = useReducer(policyReducer, policyInitialData);

  return (
    <>
      <PolicyContext.Provider
        value={{
          policyState: state,
          policyDispatch: dispatch,
        }}
      >
        {children}
      </PolicyContext.Provider>
    </>
  );
};

export default PolicyProvider;
