import React, { useContext, useState, useEffect } from "react";
import { context } from "../../contact-context/ContactProvider";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const ContactsComponent = () => {
  const history = useHistory();
  const { contacts, getContacts, deleteContacts, populateContact, populate } = useContext(context);

  const handleDelete = id => {
    deleteContacts(id);
  };

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      getContacts();
    } else {
      history.push("/login");
    }
  }, [populate]);

  const handleEdit = id => {
    populateContact(id)
  };

  return (
    <div>
      <Ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            <p className='name'>
              <i className='fa fa-user'> {contact.name}</i>
            </p>
            <p className='phone'>
              <i className='fa fa-phone'> {contact.phone}</i>
            </p>
            <p className='email'>
              <i className='fa fa-envelope'> {contact.email}</i>
            </p>
            <div className='action'>
              <span
                className='fa fa-edit'
                onClick={() => handleEdit(contact.id)}
              ></span>
              <span
                className='fa fa-trash'
                onClick={() => handleDelete(contact.id)}
              ></span>
            </div>
          </li>
        ))}
      </Ul>
    </div>
  );
};

export default ContactsComponent;

const Ul = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  height: 70vh;
  overflow: auto;
  li {
    background: #f1f1f1;
    margin: 0.3rem 0;
    padding: 15px;
    .name {
      font-size: 1.5rem;
      color: blueviolet;
      margin: 0;
      margin: 0;
    }
    .phone {
      font-size: 1rem;
      color: #555;
      padding: 0;
      margin: 0;
    }
    .email {
      font-size: 0.8rem;
      color: orange;
      padding: 0;
      margin: 0;
    }
    .action {
      display: flex;
      padding: 0.4rem 0;

      span {
        font-size: 1.2rem;
      }
      span:first-child {
        color: teal;
      }
      span:last-child {
        color: red;
        margin-left: 10px;
      }
    }
  }
`;
