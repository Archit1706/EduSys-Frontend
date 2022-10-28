import React, { useEffect } from "react";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/styles/tailwind.css";
// layouts

import Admin from "./layouts/Admin.js";
import Auth from "./layouts/Auth.js";
import Teacher from "./layouts/Teacher.js";

// views without layouts

import Landing from "./views/Landing.js";
import Profile from "./views/Profile.js";
import Index from "./views/Index.js";
import { ModalProvider } from "react-modal-hook";
import { AppProvider } from "context/AppContext";
import { TeacherProvider } from "context/TeacherContext";
import { AdminProvider } from "context/AdminContext";
import Form from "components/Payment/Form";
const App = () => {
  // useEffect(() => {
  //   // check is authenticated
  //   // if not redirect to login
  // }, []);
  return (
    <AppProvider>
      <AdminProvider>
        <TeacherProvider>
          <ModalProvider>
            <BrowserRouter>
              <Switch>
                {/* add routes with layouts */}
                <Route path="/teacher" component={Teacher} />
                <Route path="/admin" component={Admin} />
                <Route path="/auth" component={Auth} />
                {/* add routes without layouts */}
                <Route path="/landing" exact component={Landing} />
                <Route path="/profile" exact component={Profile} />
                <Route path="/payment" exact component={Form} />
                <Route path="/" exact component={Index} />
                {/* add redirect for first page */}
                <Redirect from="*" to="/" />
              </Switch>
            </BrowserRouter>
          </ModalProvider>
        </TeacherProvider>
      </AdminProvider>
    </AppProvider>
  );
};

export default App;
