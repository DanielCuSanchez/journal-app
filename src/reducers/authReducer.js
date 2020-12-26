import { types } from "./../types/types";

/**
 *
 * {
 *     uid: 123klj23kl,
 *     name: "Daniel"
 * }
 */

export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case types.login:
      return {
        ...state,
        uid: action.payload.uid,
        displayName: action.payload.displayName,
      };
    case types.logout:
      return {};
    default:
      return state;
  }
};
