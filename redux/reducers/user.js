const LOGIN = 'LOGIN';

const initialState = {
  token: '',
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return Object.assign({}, state, {
        token: action.payload,
      });
    default:
      return state;
  }
}

export function login(token) {
  return {
    type: LOGIN,
    payload: token,
  };
}
