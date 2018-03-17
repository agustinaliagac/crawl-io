const INITIAL_STATE = {
  loading: false,
};

const actionTypes = {
  UPDATE_LOADING_STATE: 'crawlio/Search/UPDATE_LOADING_STATE',
};

const actionCreators = {
  updateLoadingState: isLoading => ({
    type: actionTypes.UPDATE_LOADING_STATE,
    payload: isLoading,
  }),
};

export {
  actionTypes as networkActionTypes,
  actionCreators as networkActionCreators,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_LOADING_STATE:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};
