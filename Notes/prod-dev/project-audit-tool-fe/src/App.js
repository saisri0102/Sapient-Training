import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { lightTheme } from "./Theme";
import { Body } from "./index.style";
import { ThemeProvider } from "styled-components";

import FormPage from "./templates/FormPage/FormPage";
import Topnav from "./organisms/TopNav/Topnav";
import Sidebar from "./organisms/Sidebar/Sidebar";
import SearchListing from "./templates/SearchListing/SearchListing";
import AuditPage from "./templates/AuditPage/AuditPage";
import Questionnaires from "./templates/Questionnaires/Questionnaires";
import withStyles from "./withstyle";
import { AppStyle } from "./App.style";

function App({ className }) {
  let location = useLocation();
  const [state, setState] = React.useState(true);
  const handleText = () => {
    if (state) {
      return ">";
    } else {
      return "<";
    }
  };
  return (
    <ThemeProvider theme={lightTheme}>
      {/* <Route path="/" component={()=> <FormPage formtype="loginform"/>} exact/> */}
      {(() => {
        console.log(location.pathname);
        switch (location.pathname) {
          case "/":
            return (
              <Route
                path="/"
                component={() => <FormPage formtype="loginform" />}
                exact
              />
            );
          case "/login":
            return (
              <Route
                path="/login"
                component={() => <FormPage formtype="loginform" />}
                exact
              />
            );
          case "/signup":
            return (
              <Route
                path="/signup"
                component={() => <FormPage formtype="signupform" />}
                exact
              />
            );
          default:
            return (
              <div className={`${className}`}>
                <div className="main">
                  <div className="mainnav">
                    <Topnav
                      onClickeventArrow={() => setState(!state)}
                      btnText={state ? "<" : ">"}
                    />
                  </div>
                  <div className="mainBody">
                    <div className={state ? "SideNavShow" : "SideNavHide"}>
                      <Sidebar />
                    </div>
                    <div className={state ? "ContentSmall" : "ContentLarge"}>
                      <Switch>
                        <Route
                          path="/audit"
                          component={() => <AuditPage />}
                          exact
                        />
                        <Route
                          path="/questionnaries"
                          component={Questionnaires}
                        />
                        <Route path="/search" component={SearchListing} />
                        <Route component={() => <h1>404 Error NOT FOUND</h1>} />
                      </Switch>
                    </div>
                  </div>
                </div>
              </div>
            );
        }
      })()}

      {/* <Route path="/dash" component={()=> <MainPage />} exact/> */}
    </ThemeProvider>
  );
}

export default withStyles(App, AppStyle);
