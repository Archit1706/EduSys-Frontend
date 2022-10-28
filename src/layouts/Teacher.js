import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import TeacherSidebar from "components/Sidebar/TeacherSidebar.js";
import HeaderStats from "components/Headers/HeaderStats.js";
// import FooterAdmin from "components/Footers/FooterAdmin.js";

// views

import TeacherDashboard from "views/teacher/TeacherDashboard.js";
// import Maps from "../views/admin/Maps.js";
import Settings from "../views/admin/Settings.js";
import Tables from "../views/admin/Tables.js";
import Calculation from "../views/teacher/Calculation";
import AssignSubject from "views/teacher/AssignSubject.js";
// import subjects from "../subjectData";

export default function Admin() {
  const subject = "ip";
  return (
    <>
      <TeacherSidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        {/* Header */}
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Switch>
            <Route
              path="/teacher/dashboard"
              exact
              component={TeacherDashboard}
            />
            <Route path="/teacher/settings" exact component={Settings} />
            <Route path="/teacher/calculate" exact component={Calculation} />
            <Route path="/teacher/tables" exact component={Calculation} />
            <Route path="/teacher/assign" exact component={AssignSubject} />
            <Redirect from="/teacher" to="/teacher/dashboard" />
          </Switch>
          {/* <FooterAdmin /> */}
        </div>
      </div>
    </>
  );
}
