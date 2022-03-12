import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { UserContext } from "../App";
import Styles from "../Styles/HeaderHomeStyle.module.css";
import { GetCookie } from "./utility";

export default function Home() {
  let { username, password } = useContext(UserContext).user;

  console.log(password);

  return (
    <div>
      <div className={Styles.headerDiv}>
        <p>{username}</p>
      </div>
      <div>
        <Link to="/loginscreen"></Link>
      </div>
      <div className={Styles.overallBodyDiv}>
        <div className={Styles.sideNavDesign}>
          <Link className={Styles.linkDesign} to="/sidenav"></Link>
          <Link className={Styles.linkDesign} to="/dashboard">
            dashboard
          </Link>
        </div>
        <div className={Styles.outletDesign}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
