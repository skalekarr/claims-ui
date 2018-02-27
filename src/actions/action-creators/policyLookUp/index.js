import * as ACTIONS from '../constants/policyLookUp';

export const clearField = () => {
  type: ACTIONS.CLEAR_FIELD
};

export const requestPolicySearch = (policyNumber) {
  type: ACTIONS.REQUEST_POLICY_SEARCH,
  payload: policyNumber
};
