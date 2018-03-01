import { ADD_ERRORS, CLEAR_ERRORS, TOGGLE_MODAL  } from '../../constants/app';

export const addErrors = (error) => ({
  type: ADD_ERRORS,
  error
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});

export const toggleModal = (modal) => ({
  type: TOGGLE_MODAL,
  modal
});
