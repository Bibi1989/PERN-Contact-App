import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import auth from "./privateRoute/auth";
// import { context } from "../../context/ContextProvider";

const Nav = () => {
  //   const { state } = useContext(context);
  const history = useHistory();
  const [activeLogin, setActiveLogin] = useState("");
  const [activeRegister, setActiveRegister] = useState("");
  const handleLogout = () => {
    auth.logout(() => {
      history.push("/login");
    });
    sessionStorage.token = "";
  };

  const handleActiveLogin = () => {
    setActiveLogin("sr-only");
    setActiveRegister("");
  };
  const handleActiveRegister = () => {
    setActiveRegister("sr-only");
    setActiveLogin("");
  };
  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-light bg-light px-5'>
        <span className='navbar-brand'>My Contacts</span>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav ml-auto'>
            <li className='nav-item active'>
              <Link
                onClick={handleActiveLogin}
                className='nav-link'
                to='/login'
              >
                Login <span className={activeLogin}></span>
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                onClick={handleActiveRegister}
                className='nav-link'
                to='/register'
              >
                Register <span className={activeRegister}></span>
              </Link>
            </li>
          </ul>
          <form className='form-inline my-2 my-lg-0'>
            <input
              className='form-control mr-sm-2'
              type='search'
              placeholder='Search'
              aria-label='Search'
            />
            <button className='btn btn-outline-success' type='submit'>
              Search
            </button>
            <li className='nav-item' style={{ listStyle: "none !important" }} onClick={handleLogout}>
              <Link
                style={{ marginTop: "-25px", color: "#333", listStyle: "none", textDecoration: 'none' }}
                onClick={handleActiveRegister}
                className='nav-link'
                to='/login'
              >
                Logout <span className={activeRegister}></span>
              </Link>
            </li>
          </form>
        </div>
      </nav>
    </>
  );
};

export default Nav;
