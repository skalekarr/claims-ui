import { CLEAR_FIELD, REQUEST_POLICY_SEARCH } from '../../constants/policyLookUp';

export const clearField = () => ({
  type: CLEAR_FIELD
});

export const requestPolicySearch = (policyNumber) => ({
  type: REQUEST_POLICY_SEARCH,
  payload: policyNumber,
});
