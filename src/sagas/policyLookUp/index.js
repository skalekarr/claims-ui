import { takeEvery, put } from 'redux-saga/effects';

import { REQUEST_POLICY_SEARCH, RECEIVE_POLICY_SEARCH } from '../../actions/constants/policyLookUp';
import { ADD_ERRORS } from '../../actions/constants/app';
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
      yield put({
        type: ADD_ERRORS,
        error: {
          error: 'No environment info returned.',
          message: `The server encountered an error processing the request (environment). Please try again or contact your administrator to review error logs. (HTTP Status: ${status})`,
        },
      });
      throw new Error();
    }
    if (!data.Success) {
      yield put({
        type: ADD_ERRORS,
        error: {
          error: 'No environment info returned.',
          message: `The server encountered an error processing the request (environment). Please try again or contact your administrator to review error logs. (HTTP Status: ${status})`,
        },
      });
      throw new Error();
    }
    yield put({
      type: RECEIVE_POLICY_SEARCH,
      data,
    });
  } catch (e) {
    if (e.response) {
      yield put({
        type: ADD_ERRORS,
        error: {
          error: 'No environment info returned.',
          message: 'The server encountered an error processing the request (environment). Please try again or contact your administrator to review error logs.',
          exception: e.response.data.ExceptionMessage || '',
        },
      });
    }
    if (!e.response && e.message) {
      yield put({
        type: ADD_ERRORS,
        error: {
          message: e.message,
        },
      });
    }
  }
}

/* ////////////////////////////////// */
/* WATCHERS */
/* ////////////////////////////////// */
export function* watchRequestPolicyLookUp() {
  yield takeEvery(REQUEST_POLICY_SEARCH, requestPolicyLookUp);
}
