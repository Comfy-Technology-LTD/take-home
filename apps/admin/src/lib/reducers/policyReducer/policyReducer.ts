import { PolicyActionType, PolicyActions, PolicyDataType } from "./policyInitialData";

// Policyentication Reducer
/**
 *
 * @param state
 * @param action
 * @returns
 * @description
 * This function takes a state and an action and returns a new state.
 * The new state is determined by the action type.
 */

export const policyReducer = (state: PolicyDataType, action: PolicyActions) => {
  if (Object.values(PolicyActionType).includes(action.type as PolicyActionType)) {
    const key = Object.keys(PolicyActionType).find(
      (item) => PolicyActionType[item as keyof typeof PolicyActionType] === action.type
    );
    if (key) {
      return {
        ...state,
        [key]: action.payload,
      };
    } else {
      return state;
    }
  } else {
    throw new Error(`Unknown action type: ${action.type}`);
  }
};
