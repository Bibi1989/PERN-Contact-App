import React, { useContext, useState, useEffect } from "react";
import { context } from "../../contact-context/ContactProvider";
import styled from "styled-components";
// import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddContacts = () => {
  const {
    addContacts,
    updateContact,
    populate,
    checkUpdate,
    getContacts,
    contacts
  } = useContext(context);
  const [form, setForm] = useState({
    id: "",
    name: "",
    email: "",
    phone: ""
  });

  useEffect(() => {
    setForm({
      id: populate.id,
      name: populate.name,
      email: populate.email,
      phone: populate.phone
    });
    getContacts();

    // eslint-disable-next-line
  }, [populate]);

  const handleInput = ({ target }) => {
    setForm({ ...form, [target.name]: target.value });
  };

  const handleAddContact = e => {
    e.preventDefault();
    addContacts(form);
    setForm({
      id: "",
      name: "",
      email: "",
      phone: ""
    });
  };

  const handleUpdateContact = e => {
    e.preventDefault();
    updateContact(form);
    setForm({
      id: "",
      name: "",
      email: "",
      phone: ""
    });
  };

  console.log(contacts);

  return (
    <Post>
      <form>
        <div>
          <input name='id' value={form.id} onChange={handleInput} hidden />
          <input
            type='text'
            name='name'
            value={form.name}
            placeholder='name...'
            onChange={handleInput}
          />
        </div>
        <div>
          <input
            type='text'
            name='email'
            value={form.email}
            placeholder='Email Address...'
            onChange={handleInput}
          />
        </div>
        <div>
          <input
            type='text'
            name='phone'
            value={form.phone}
            placeholder='phone...'
            onChange={handleInput}
          />
        </div>
        {checkUpdate ? (
          <button type='submit' onClick={handleUpdateContact}>
            Update Contact
          </button>
        ) : (
          <button type='submit' onClick={handleAddContact}>
            Add Contact
          </button>
        )}
      </form>
    </Post>
  );
};

export default AddContacts;

const Post = styled.div`
  form {
    width: 100%;
    div {
      width: 100%;
      margin: 2rem 0;
      input {
        width: 100%;
        padding: 0.5rem;
        border: 1px solid blueviolet;
        border-radius: 5px;
        outline: none;
      }
    }
    button {
      display: block;
      margin: auto;
      padding: 0.3rem 1.3rem;
      border: none;
      background: blueviolet;
      color: #eee;
      outline: none;
      border-radius: 5px;
    }
  }
`;
