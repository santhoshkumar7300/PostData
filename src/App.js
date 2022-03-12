import logo from "./logo.svg";
import "./App.css";
import LoginScreen from "./Components/LoginScreen";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/HeaderHome";

import SideNavbarDashbord from "./Components/SideNavbarDashbord";
import Error from "./Components/Error";
import { GetCookie } from "./Components/utility";
import { createContext, useState } from "react";
import PrivateRoute, { AuthRoute } from "./Components/PrivateRouter";
import Main from "./task/Main";

export const UserContext = createContext();

function App() {
  let [loginData, setLoginData] = useState(
    GetCookie("credential") !== "" ? JSON.parse(GetCookie("credential")) : null
  );

  const [isLoader, setLoader] = useState(false);

  const loginHandle = (data) => {
    // console.log(data);
    setLoginData(data);
    setLoader(false);
  };

  const loaderHandle = (booleanVal) => {
    console.log(booleanVal);
    setLoader(booleanVal);
  };

  // console.log(loginData);
  return (
    // <div className="App">
    //   {isLoader ? (
    //     <div className="loaderDiv">
    //       <div class="loader"></div>
    //     </div>
    //   ) : null}
    //   <UserContext.Provider
    //     value={{
    //       user: loginData,
    //       loginHandle: loginHandle,
    //       loaderHandle: loaderHandle,
    //     }}
    //   >
    //     <Routes>
    //       <Route
    //         path="/"
    //         element={
    //           <AuthRoute>
    //             <LoginScreen />
    //           </AuthRoute>
    //         }
    //       >
    //         <Route index path="/login" element={<LoginScreen />} />
    //       </Route>

    //       <Route
    //         path="/"
    //         element={
    //           <PrivateRoute >
    //             <Home />
    //           </PrivateRoute>
    //         }
    //       >
    //         <Route path="/dashboard" element={<SideNavbarDashbord />} />
    //       </Route>

    //       <Route path="*" element={<Error />} />
    //     </Routes>
    //   </UserContext.Provider>
    // </div>
    <div>
      <Main />
    </div>
  );
}

export default App;
