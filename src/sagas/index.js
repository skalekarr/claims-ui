import * as policyLookUpSaga from '../sagas/policyLookUp';

export default function* rootSaga() {
  yield [
    policyLookUpSaga.watchRequestPolicyLookUp(),
  ];
}
