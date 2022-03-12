import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App";
import Styles from "../Styles/LoginScreenStyle.module.css";
import { SetCookie } from "./utility";

export default function LoginScreen() {
  const dataContext = useContext(UserContext);
  console.log(dataContext);
  let navigate = useNavigate();
  const [inputField, setInputField] = useState({
    username: "",
    password: "",
  });

  const [Error, setError] = useState(null);

  const LoginHandle = () => {
    if (inputField.username !== "" && inputField.password !== "") {
      dataContext.loaderHandle(true);
      setTimeout(() => {
        dataContext.loginHandle(inputField);
        SetCookie("credential", JSON.stringify(inputField), 7);
        navigate("/dashboard");
      }, 10000);
    } else {
      alert("username or password couldn't be empty");
    }
  };

  return (
    <div className={Styles.overallDiv}>
      <div className={Styles.formHeaderDiv}>
        <form onSubmit={(event) => event.preventDefault()}>
          <div>
            <div className={Styles.labelDiv}>
              <label>Login</label>
            </div>
            <div className={Styles.inputDiv}>
              <input
                type={"text"}
                placeholder="Enter Username"
                className={Styles.inputDesign}
                onChange={(e) =>
                  setInputField({ ...inputField, username: e.target.value })
                }
              />
            </div>
            <div className={Styles.inputDiv}>
              <input
                type={"password"}
                placeholder="Enter Password"
                className={Styles.inputDesign}
                onChange={(e) =>
                  setInputField({ ...inputField, password: e.target.value })
                }
              />
            </div>
            <div className={Styles.inputDiv}>
              <input
                type={"submit"}
                className={Styles.loginBtnDesign}
                onClick={LoginHandle}
                value="Login"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
