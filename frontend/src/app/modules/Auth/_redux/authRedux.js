import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
// import { put, takeLatest } from "redux-saga/effects";

export const actionTypes = {
  Login: "[Login] Action",
  Logout: "[Logout] Action",
  UserRequested: "[Request User] Action",
  UserLoaded: "[Load User] Auth API",
  SetUser: "[Set User] Action",
};

const initialAuthState = {
  user: undefined,
  authToken: undefined,
};

export const reducer = persistReducer(
  { storage, key: "v713-demo1-auth", whitelist: ["user", "authToken"] },
  (state = initialAuthState, action) => {
    switch (action.type) {

      case actionTypes.Login: {
        const { jwtToken, id, userName, isAdmin, domain } = action.payload.user;
        return { authToken: jwtToken, user: {id, userName,isAdmin, domain, businessUnitCode: action.payload.user.businessUnitCode} };
      }

      case actionTypes.Logout: {
        // TODO: Change this code. Actions in reducer aren't allowed.
        return initialAuthState;
      }

      case actionTypes.UserLoaded: {
        const { user } = action.payload;
        return { ...state, user };
      }

      case actionTypes.SetUser: {
        const { user } = action.payload;
        return { ...state, user };
      }

      default:
        return state;
    }
  }
);

export const actions = {
  login: (user) => ({ type: actionTypes.Login, payload: { user } }),
  logout: () => ({ type: actionTypes.Logout }),
  setUser: (buUser) => ({ type: actionTypes.SetUser, payload: { buUser } }),
  // setBuUser: (user) => ({ type: actionTypes.SetBuUser, payload: { user } }),
};


export function* saga() {}