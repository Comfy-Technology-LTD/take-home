export type PolicyType = {
  id: number;
  policyNumber: string;
  type: string;
  cedant: CedentDataType;
  reinsurers: ReinsurerDataType[];
  coverage: {
    subjectOfInsurance: string;
    location: string;
    limit: number;
  };
  premium: number;
  status: string;
  startDate: string;
  endDate: string;
  createdAt: string;
  updatedAt: string;
}

export interface CedentDataType {
  id: string 
  username: string;
  phoneNumber: string;
  email: string;
}

export interface ReinsurerDataType {
  id: string 
  username: string;
  phoneNumber: string;
  email: string;
  share: number
}


/**
 * @description PolicyDataType
 * @type {PolicyDataType}
 * @example
 * const [state, dispatch] = useReducer(PolicyReducers, PolicyInitialData) // PolicyInitialData is the initial data for the PolicyReducer
 */

export type PolicyDataType = {
  policyList: PolicyType[];
  pickPolicyDate: string;
  pickUpperDate: string;
  pickLowerDate: string;
};

/**
 * @description PolicyActionType
 * @type {PolicyActionType}
 */

export enum PolicyActionType {
  policyList = "policyList",
  pickPolicyDate = "pickPolicyDate",
  pickUpperDate = "pickUpperDate",
  pickLowerDate = "pickLowerDate",
}

/**
 * @description PolicyPayload
 * @type {PolicyPayload}
 * @example
 * const [state, dispatch] = useReducer(PolicyReducers, PolicyInitialData) // PolicyInitialData is the initial data for the PolicyReducer
 */
export type PolicyPayload = {
  [K in keyof typeof PolicyActionType]: PolicyDataType[K];
};

/**
 * @description ActionMap
 * @type {ActionMap}
 * @example
 * type PolicyPayload = {
 *  [PolicyActionType.USERNAME]: string
 * [PolicyActionType.PHONE_NUMBER]: string
 * ...
 * }
 */
type ActionMap<M> = {
  [Key in keyof M]: {
    type: Key;
    payload: M[Key];
  };
};

/**
 * @description PolicyActions
 * @type {PolicyActions}
 * @example
 * const [state, dispatch] = useReducer(PolicyReducers, PolicyInitialData) // PolicyInitialData is the initial data for the PolicyReducer
 * dispatch({
 *   type: PolicyActionType.username,
 *  payload: "John Doe",
 * })
 */
export type PolicyActions = ActionMap<PolicyPayload>[keyof ActionMap<PolicyPayload>];

/******************************  AUTH NOTIFICATION  ******************************/

export type NotificationType = {
  transform: boolean;
  dispatch: () => void;
  isClose: true;
  hexColor: string;
  status?: "success" | "error" | "info";
  noteText: string;
}[];

/**
 * @description Initial data for the PolicyReducer
 * @type {PolicyDataType}
 */
export const policyInitialData: PolicyDataType = {
  policyList: [],
  pickPolicyDate: "",
  pickUpperDate: "",
  pickLowerDate: "",
};
