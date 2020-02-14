import React, { useState, useEffect } from "react";
import styled from "styled-components";
import randomcolor from "randomcolor";

const DisplayContact = ({ contact, handleDelete, handleEdit }) => {
  const [color, setColor] = useState();
  useEffect(() => {
    setColor(randomcolor());
  }, [contact]);
  return (
    <Contact>
      <p style={{color}} className='first-p'>{contact.name[0]}</p>
      <Ul>
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
      </Ul>
    </Contact>
  );
};

export default DisplayContact;

function changeColor() {
    return randomcolor()
}



const Contact = styled.div`
  display: flex;
  background: #f1f1f1;
  margin: 0.3rem 0;
  padding: 15px;
  .first-p {
    width: 70px;
    height: 70px;
    margin-top: 1.5rem;
    border: 1.5px solid #999;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3rem;
  }
`;

const Ul = styled.ul`
  li {
    background: #f1f1f1;
    padding-left: 2rem;
    list-style: none;
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
