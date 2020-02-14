import React from "react";
import "./App.css";
import { UserProvider } from "./components/user-context/UserProvider";
import { ContactProvider } from "./components/contact-context/ContactProvider";
import RegisterComponent from "./components/layout/forms/RegisterComponent";
import LoginComponent from "./components/layout/forms/LoginComponent";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ContactsComponent from "./components/layout/views/ContactsComponent";
import Nav from "./components/Nav";
import { PrivateRoute } from "./components/privateRoute/privateRoute";
import AddContacts from "./components/layout/views/AddContacts";
import auth from "./components/privateRoute/auth";

function App() {
  const token = sessionStorage.getItem("token");
  return (
    <UserProvider>
      <Router>
        <Nav />
        <Switch>
          <Route path='/register'>
            <RegisterComponent />
          </Route>
          <Route path='/login'>
            <LoginComponent />
          </Route>
          <ContactProvider>
            <div className='container py-5'>
              <div className='row'>
                <div className='col mx-auto'>
                  <PrivateRoute exact path='/contacts'>
                    <AddContacts />
                  </PrivateRoute>
                </div>
                <div className='col mx-auto'>
                  <PrivateRoute exact path='/contacts'>
                    <ContactsComponent />
                  </PrivateRoute>
                  <PrivateRoute exact path='/contacts/:id'>
                    <ContactsComponent />
                  </PrivateRoute>
                </div>
              </div>
            </div>
          </ContactProvider>
        </Switch>
      </Router>
    </UserProvider>
  );
}

export default App;
