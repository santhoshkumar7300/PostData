import { useContext } from "react";
import { UserContext } from "../App";
import Styles from "../Styles/SideNavStyle.module.css";

export default function SideNavbarDashbord() {
  const login = useContext(UserContext);
  console.log(login);

  return (
    <div className={Styles.dashboardContent}>
      <p>Welcome</p>
    </div>
  );
}
