import { createContext, ReactNode, useContext, useReducer } from "react"
import {
  policyReducer,
  policyInitialData,
  PolicyDataType,
  PolicyActions,

} from "../lib/reducers/policyReducer"

interface PolicyProviderProps {
  children?: ReactNode
}

type PolicyContextType = {
  policyState: PolicyDataType
  policyDispatch: React.Dispatch<PolicyActions>
}
const PolicyContext = createContext<PolicyContextType | null | string>("")

/* eslint-disable import/react-refresh */
export const usePolicyProvider = () => {
  return useContext(PolicyContext) as PolicyContextType
}

const PolicyProvider = ({ children }: PolicyProviderProps) => {
  const [state, dispatch] = useReducer(policyReducer, policyInitialData)

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
  )
}

export default PolicyProvider
