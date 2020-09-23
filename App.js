import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Ca from "./components/pages/CA";
import Intern from "./components/pages/Internship";
import FullTime from "./components/pages/FullTime";
import Scholarships from "./components/pages/Scholarship";
import MainPage from "./MainPage";
import Header from "./components/HeaderPage";
import Os from "./components/pages/opensourceprogram"
import Swag from "./components/pages/codeandgrab"
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div>
       <Header />
      <Router>
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/scholarships" component={Scholarships} />
          <Route path="/internships" component={Intern} />
          <Route path="/fulltime" component={FullTime} />
          <Route path="/campusambassador" component={Ca} />
          <Route path="/opensource" component={Os} />
          <Route path="/codeandgrab" component={Swag} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
