import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { context } from "../../context/ContextProvider";

const Nav = () => {
//   const { state } = useContext(context);
  const [activeLogin, setActiveLogin] = useState('')
  const [activeRegister, setActiveRegister] = useState('')
//   const handleLogout = () => {
//     sessionStorage.clear("token");
//   };

  const handleActiveLogin = () => {
      setActiveLogin('sr-only')
      setActiveRegister('')
  }
  const handleActiveRegister = () => {
      setActiveRegister('sr-only')
      setActiveLogin('')
  }
  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-light bg-light px-5'>
        <span className='navbar-brand'>
          My Contacts
        </span>
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
              <Link onClick={handleActiveLogin} className='nav-link' to="/login">
                Login <span className={activeLogin}></span>
              </Link>
            </li>
            <li className='nav-item'>
              <Link onClick={handleActiveRegister} className='nav-link' to="/register">
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
            <button className='btn btn-outline-success my-2 my-sm-0' type='submit'>
              Search
            </button>
          </form>
        </div>
      </nav>
    </>
  );
};

export default Nav;

// <div>
//   <ul>
//     {!state.status && <Link to='/register'>Register</Link>}
//     {!state.status && <Link to='/login'>Login</Link>}
//     {state.status && <Link to='/contacts'>Contacts</Link>}
//     {state.status && <Link to='/login' onClick={handleLogout}>Logout</Link>}
//   </ul>
// </div>
