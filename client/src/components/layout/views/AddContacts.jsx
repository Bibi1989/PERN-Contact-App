import React, { useContext, useState, useEffect } from "react";
import { context } from "../../contact-context/ContactProvider";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const AddContacts = () => {
  const {
    addContacts,
    updateContact,
    populate,
    checkUpdate,
    getContacts,
    contacts
  } = useContext(context);
  const history = useHistory();
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
  }, [populate, history]);

  const handleInput = ({ target }) => {
    setForm({ ...form, [target.name]: target.value });
  };

  const handleAddContact = e => {
    e.preventDefault();
    addContacts(form);
  };

  const handleUpdateContact = e => {
    e.preventDefault();
    updateContact(form);
  };

  console.log(contacts);

  //   54b7a206-c04a-4ae5-94d4-b39328cef728
  // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImJiNmIyOTI4LTljZDQtNDcyMS1hMjRmLTQ4NWJiYWNjNWRjZiIsImlhdCI6MTU4MTYyNTc2OX0.p5oz2bBVC0j_dk3MroBqB0ceGnhxhZt7iZzJ83T8f7k

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
