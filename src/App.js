import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { AppProvider } from "@8base/app-provider";
import AuthClient from "./shared/auth";
import { Route, Switch } from "react-router-dom";
import { AuthCallback } from "./routes/auth";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer.js";
import AuthButton from "./components/AuthButton";
import ProtectedRoute from "./shared/components/ProtectedRoute";
import Profile from "./components/Profile";
import ProfileLink from "./components/ProfileLink";

import "todomvc-app-css/index.css";
import "./App.css";

function Home() {
  return (
    <div className="todoapp">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppProvider
        uri={process.env.REACT_APP_WORKSPACE_ENDPOINT}
        authClient={AuthClient}
      >
        <ProfileLink />
        <AuthButton />
        <Switch>
          <ProtectedRoute exact path="/profile" component={Profile} />
          <Route path="/auth" component={AuthCallback} />
          <Route path="/" component={Home} />
        </Switch>
      </AppProvider>
    </Router>
  );
}

export default App;
