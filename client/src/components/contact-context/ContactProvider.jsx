import React, { createContext, useReducer } from "react";
import reducer from "./contactReducer";
import {
  GET_CONTACT,
  ADD_CONTACT,
  DELETE_CONTACT,
  UPDATE_CONTACT,
  POPULATE_CONTACT,
  SINGLE_CONTACT
} from "./contact-types";

import axios from "axios";
import jwt from "jwt-decode";

export const context = createContext();

const initialState = {
  contacts: [],
  contact: {},
  populate: {},
  checkUpdate: false
};

export const ContactProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState);

  //   add contacts
  const addContacts = async contact => {
    const token = sessionStorage.getItem("token");
    const response = await axios.post("/api/contacts", contact, {
      headers: {
        auth: `${token}`
      }
    });
    return dispatch({ type: ADD_CONTACT, payload: response.data.data[0] });
  };

  //   Get contacts
  const getContacts = async () => {
    const token = sessionStorage.getItem("token");
    const response = await axios.get("/api/contacts", {
      headers: {
        auth: `${token}`
      }
    });
    dispatch({ type: GET_CONTACT, payload: response.data.data });
  };

  //   delete contact
  const deleteContacts = async id => {
    const token = sessionStorage.getItem("token");
    const response = await axios.delete(`/api/contacts/${id}`, {
      headers: {
        auth: `${token}`
      }
    });

    dispatch({ type: DELETE_CONTACT });
  };

  // update contact
  const populateContact = async id => {
    const token = sessionStorage.getItem("token");
    const response = await axios.get(`/api/contacts/${id}`, {
      headers: {
        auth: `${token}`
      }
    });
    // console.log("Update: ",response.data.data[0])
    // state.checkUpdate = true

    dispatch({ type: POPULATE_CONTACT, payload: {data: response.data.data[0], check: true} });
  };

  const updateContact = async (contact) => {
    const token = sessionStorage.getItem("token");
    const response = await axios.put(`/api/contacts/${contact.id}`, contact, {
      headers: {
        auth: `${token}`
      }
    });
    console.log("Update: ",response.data)
    // state.checkUpdate = true

    dispatch({ type: UPDATE_CONTACT });
  };

  console.log(state.checkUpdate);

  return (
    <context.Provider
      value={{
        state,
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
