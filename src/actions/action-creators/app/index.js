import { ADD_ERRORS, CLEAR_ERRORS, TOGGLE_MODAL  } from '../../constants/policyLookUp';

export const addErrors = (errors) => ({
  type: ADD_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});

export const toggleModal = (modals) => ({
  type: TOGGLE_MODAL,
  modals
});
