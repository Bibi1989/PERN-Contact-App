import React, { createContext, useReducer, useEffect } from "react";
import reducer from "./contactReducer";
import {
  GET_CONTACT,
  ADD_CONTACT,
  DELETE_CONTACT,
  UPDATE_CONTACT,
  POPULATE_CONTACT
} from "./contact-types";
import { useHistory } from "react-router-dom";
import axios from "axios";
// import jwt from "jwt-decode";

export const context = createContext();

const initialState = {
  contacts: [],
  contact: {},
  populate: {},
  checkUpdate: false
};

const BASE_URL = "/api/contacts";

export const ContactProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const history = useHistory();

  const [tracker, setTracker] = React.useState({
    update: false,
    delete: false
  });

  useEffect(() => {
    if (sessionStorage.getItem("token") && props.location.path !== '/contacts') {
      getContacts();
    } else {
      history.push("/login");
    }
    // eslint-disable-next-line
  }, [tracker]);

  //   add contacts
  const addContacts = async contact => {
    const token = sessionStorage.getItem("token");
    const response = await axios.post(BASE_URL, contact, {
      headers: {
        auth: `${token}`
      }
    });
    return dispatch({ type: ADD_CONTACT, payload: response.data.data[0] });
  };

  //   Get contacts
  const getContacts = async () => {
    const token = sessionStorage.getItem("token");
    const response = await axios.get(BASE_URL, {
      headers: {
        auth: `${token}`
      }
    });
    return dispatch({ type: GET_CONTACT, payload: response.data.data });
  };

  //   delete contact
  const deleteContacts = async id => {
    const token = sessionStorage.getItem("token");
    await axios.delete(`${BASE_URL}/${id}`, {
      headers: {
        auth: `${token}`
      }
    });
    setTracker({
      update: false,
      delete: true
    });

    return dispatch({ type: DELETE_CONTACT });
  };

  // update contact
  const populateContact = async id => {
    const token = sessionStorage.getItem("token");
    const response = await axios.get(`${BASE_URL}/${id}`, {
      headers: {
        auth: `${token}`
      }
    });

    return dispatch({
      type: POPULATE_CONTACT,
      payload: { data: response.data.data[0], check: true }
    });
  };

  const updateContact = async contact => {
    const token = sessionStorage.getItem("token");
    await axios.patch(`${BASE_URL}/${contact.id}`, contact, {
      headers: {
        auth: `${token}`
      }
    });
    setTracker({
      update: true,
      delete: false
    });
    return dispatch({ type: UPDATE_CONTACT, payload: false });
  };


  return (
    <context.Provider
      value={{
        BASE_URL,
        contacts: state.contacts,
        populate: state.populate,
        checkUpdate: state.checkUpdate,
        addContacts,
        updateContact,
        deleteContacts,
        getContacts,
        populateContact
      }}
    >
      {props.children}
    </context.Provider>
  );
};
