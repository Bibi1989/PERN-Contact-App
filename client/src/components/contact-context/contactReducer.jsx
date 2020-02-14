import {
  ADD_CONTACT,
  GET_CONTACT,
  DELETE_CONTACT,
  POPULATE_CONTACT,
  UPDATE_CONTACT
} from "./contact-types";

export default (state, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, action.payload]
      };
    case GET_CONTACT:
      return {
        ...state,
        contacts: action.payload
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts]
      };
    case POPULATE_CONTACT:
      return {
        ...state,
        populate: action.payload.data,
        checkUpdate: action.payload.check
      };
    case UPDATE_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts]
      };
    default:
      return state;
  }
};
