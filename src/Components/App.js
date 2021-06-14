import "../styles.css";
import Navbar from "./Navbar";
import MainContain from "./MainContain";
// import ManagedCloud from "./services/MangedCloud";
import ServicesSection from "./services/serviceSection";
import { Route, Switch, Redirect } from "react-router-dom";
import CaseStudy from "./CaseStudy/casestudy";

import AWSDevOPs from "./services/AWSDEVOPS";
import Notfound from "./notfoun";
import DataMigration from "./services/dataMigration";
export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={MainContain} />
        <Route exact path="/Services" component={ServicesSection} />
        <Route exact path="/CaseStudy" component={CaseStudy} />
        <Route exact path="/not-found" component={Notfound} />
        <Route
          exact
          path="/Services/AWSdatamigration"
          component={DataMigration}
        />
        <Route exact path="/Services/AWSdevops" component={AWSDevOPs} />
        <Redirect to="/not-found" />
      </Switch>
    </div>
  );
}
