import React, { useContext } from "react";
import { context } from "../../contact-context/ContactProvider";
import styled from "styled-components";
import displayContact from "./DisplayContact";
import DisplayContact from "./DisplayContact";

const ContactsComponent = () => {
  const { contacts, deleteContacts, populateContact } = useContext(context);

  if (contacts.length === 0 || contacts === null) {
    return (
      <h2 style={noContact}>
        <i className='fa fa-edit'></i>
        <p>You don't have any contact</p>
      </h2>
    );
  }

  const handleDelete = id => {
    deleteContacts(id);
  };

  const handleEdit = id => {
    populateContact(id);
  };

  function compare(a, b) {
    const bandA = a.name.toUpperCase();
    const bandB = b.name.toUpperCase();
  
    let comparison = 0;
    if (bandA > bandB) {
      comparison = 1;
    } else if (bandA < bandB) {
      comparison = -1;
    }
    return comparison;
  }

  return (
    <div>
      <Ul>
        {contacts.sort(compare).map(contact => (
          <DisplayContact key={contact.id} contact={contact} handleDelete={handleDelete} handleEdit={handleEdit} />
        ))}
      </Ul>
    </div>
  );
};

export default ContactsComponent;

const Ul = styled.div`
  list-style: none;
  padding: 0;
  margin: 0;
  height: 70vh;
  overflow: auto;
`

const noContact = {
  textAlign: `center`,
  display: `flex`,
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  height: `35vh`
};
