import { takeEvery, put } from 'redux-saga/effects';

import { REQUEST_POLICY_SEARCH, RECEIVE_POLICY_SEARCH } from '../../actions/constants/policyLookUp';
import api from '../api';

/* ////////////////////////////////// */
/* REQUEST POST PRE POSTING INITIAL DATA */
/* ////////////////////////////////// */
export function* requestPolicyLookUp({payload: policyNumber}) {
  const { searchPolicy } = api.policyLookUp;

  try {
    const response = yield searchPolicy(policyNumber);
    const { status, data } = response;

    if (status !== 200) {
      // handle error
      console.log(status);
    }
    if (!data.Success) {
      // handle error
      console.log(status);
    }
    yield put({
      type: RECEIVE_POLICY_SEARCH,
      data,
    });
  } catch (e) {
    if (e.response) {
      // handle error
      console.log(e.response);
    }
    if (!e.response && e.message) {
      // handle error
      console.log(e.message);
    }
  }
}

/* ////////////////////////////////// */
/* WATCHERS */
/* ////////////////////////////////// */
export function* watchRequestPolicyLookUp() {
  yield takeEvery(REQUEST_POLICY_SEARCH, requestPolicyLookUp);
}
