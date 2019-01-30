import Immutable from 'seamless-immutable';

export const Types = {
  GET_REQUEST: 'app/GET_REQUEST',
  GET_SUCCESS: 'app/GET_SUCCESS',
  GET_FAILURE: 'app/GET_FAILURE',
};

const initialState = Immutable({
  data: [],
  loading: false,
  error: null,
});

export default function app(state = initialState, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return { ...state, loading: true };
    case Types.GET_SUCCESS:
      return { data: action.payload, loading: false, error: null };
    case Types.GET_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}

export const Creators = {
  getAppRequest: ({ field1, field2 }) => ({
    type: Types.GET_REQUEST,
    payload: { field1, field2 },
  }),
  getAppSuccess: data => ({
    type: Types.GET_SUCCESS,
    payload: data,
  }),
  getAppFailure: error => ({
    type: Types.GET_FAILURE,
    payload: error,
  }),
};
