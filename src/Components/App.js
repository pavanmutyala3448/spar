import "../styles.css";
import Navbar from "./Navbar";
import MainContain from "./MainContain";
import Services from "./services/services";
import ManagedCloud from './services/MangedCloud'
import {
  Route,
  Switch
} from "react-router-dom";
export default function App() {
  return ( <
    div className = "App" >
    <Navbar / >
    <Switch >
    <Route path = "/"
    exact component = {
      MainContain
    }
    /> <
    Route path = "/Services"
    component = {
    Services
    }
    />  <
    Route path = "/Services/securityCloud"
    component = {
      MainContain
    }
    />
    <
   Route path = "/Services/ManagedCloud"
   component = {MainContain}
   />< /
    Switch > <
    /div>
  );
}
