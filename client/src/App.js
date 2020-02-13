import React from "react";
import "./App.css";
import { ContextProvider } from "./components/context/ContextProvider";
import RegisterComponent from "./components/layout/forms/RegisterComponent";
import LoginComponent from "./components/layout/forms/LoginComponent";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ContactsComponent from "./components/layout/views/ContactsComponent";
import Nav from "./components/layout/views/Nav";

function App() {
  return (
    <ContextProvider>
      <Router>
        <Nav />
        <Switch>
          <Route exact path='/register'>
            <RegisterComponent />
          </Route>
          <Route exact path='/login'>
            <LoginComponent />
          </Route>
          <Route exact path='/contacts'>
            <ContactsComponent />
          </Route>
        </Switch>
      </Router>
    </ContextProvider>
  );
}

export default App;
