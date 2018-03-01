import * as ACTIONS from '../../actions/constants/app';

const initialState = { modals: {}, errors: {} };

export default function reducer(state = initialState, action) {
  const { type, data, modal, error } = action;

  switch(type) {
    case ACTIONS.TOGGLE_MODAL:
      return Object.assign({}, state, {
        modals: {
          ...state.modals,
          [modal.modal]: {
            ...state[modal.modal],
            active: modal.active,
            properties: modal.properties,
          },
        },
      });

      case ACTIONS.ADD_ERRORS:
        return Object.assign({}, state, {
          modals: {
            ...state.modals,
            errorModal: {
              ...state.active,
              active: true,
            },
          },
          errors: [
            ...state.errors,
            error,
          ],
        });

      case ACTIONS.CLEAR_ERRORS:
        return Object.assign({}, state, {
          errors: [],
        });

    default:
      return state;
  }
}
