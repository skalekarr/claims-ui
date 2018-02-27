import * as ACTIONS from '../../actions/constants/policyLookUp';

const initialState = {};

export default function reducer(state = initialState, action) {
  const { type, data } = action;

  switch(type) {
    case ACTIONS.RECEIVE_POLICY_SEARCH:
      return {
        ...state,
        policySerachResult: data
      };

    default:
      return state;
  }
}
