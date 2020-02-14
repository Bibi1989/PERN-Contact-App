import React, { useState, useContext } from "react";
import { context } from "../../user-context/UserProvider";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import auth from "../../privateRoute/auth";

const LoginComponent = () => {
  const { loginUsers } = useContext(context);
  const [press, setPress] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: ""
  });
  const history = useHistory();

  const handleInput = ({ target }) => {
    setForm({ ...form, [target.name]: target.value });
  };

  const handleLogin = e => {
    e.preventDefault();
    loginUsers(form);
    setPress(true);
    if (sessionStorage.getItem("token")) {
      auth.login(() => {
        history.push("/contacts");
      });
    } else {
      auth.logout(() => {
        history.push("/login");
      });
    }
  };

  return (
    <Login>
      <h1>
        <span className='fa fa-user'></span>
        <span>Login</span>
      </h1>
      <form>
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
            name='password'
            value={form.password}
            placeholder='Password...'
            onChange={handleInput}
          />
        </div>
        <button
          type='submit'
          onClick={handleLogin}
          className={press ? "eff" : "no-eff"}
        >
          Login
        </button>
      </form>
    </Login>
  );
};

export default LoginComponent;

const Login = styled.div`
  display: block;
  margin: auto;
  width: 60%;
  min-height: 30vh;
  padding: 5%;
  h1 {
    color: #555;
    text-align: center;
    padding: 2rem 0;
    span:first-child {
      color: orangered;
      margin-right: 1rem;
    }
  }
  form {
    width: 100%;
    div {
      width: 100%;
      input {
        width: 100%;
        margin: 4% 0;
        padding: 10px;
        border-radius: 5px;
        outline: none;
        border: 1px solid #999;
      }
    }
    .no-eff {
      display: block;
      background: teal;
      color: #eee;
      border: none;
      padding: 5px 25px;
      margin: 2% auto;
      border-radius: 5px;
      outline: none;
      box-shadow: 0 2px 5px #999;
      transition: box-shadow 0.4s ease;
    }
    .eff {
      display: block;
      background: teal;
      color: #eee;
      border: none;
      padding: 5px 25px;
      margin: 2% auto;
      border-radius: 5px;
      outline: none;
    }
  }
`;
