import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { AppProvider } from "@8base/app-provider";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer.js";

import "todomvc-app-css/index.css";
import "./App.css";

function App() {
  return (
    <Router>
      <AppProvider uri={process.env.REACT_APP_WORKSPACE_ENDPOINT}>
        {({ loading }) =>
          loading ? (
            <div>"Loading..."</div>
          ) : (
            <div className="todoapp">
              <Header />
              <Main />
              <Footer />
            </div>
          )
        }
      </AppProvider>
    </Router>
  );
}

export default App;
