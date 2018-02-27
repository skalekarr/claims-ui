import axios from 'axios';
import { call } from 'redux-saga/effects';

// Methods
const GET = axios.get;
/* const POST = axios.post;
const PUT = axios.put;
const DELETE = axios.delete;
 */

// Bases
const apiBase = 'test_url';

// Requests
// call(METHOD, ...args)
const policyLookUp = {
  searchPolicy: () => (
    call(GET, `${apiBase}`, {})
  )
};

// Calls
const api = {
    policyLookUp
};

export default api;
