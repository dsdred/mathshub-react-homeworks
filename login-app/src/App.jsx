/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./context/auth-context";
import ThemeContext from "./context/theme-context";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [liteStyle, setliteStyle] = useState(true);

  useEffect(() => {
    const storageUserStatus = localStorage.getItem("isLoggedIn");

    if (storageUserStatus === "true") {
      setIsLoggedIn(true);
    }

    const storageThemeStatus = localStorage.getItem("liteStyle");
    if (storageThemeStatus === "true") {
      setliteStyle(true);
    } else if (storageThemeStatus === "false") {
      setliteStyle(false);
    }
  }, []);

  const loginHandler = (email, password) => {
    // Тут мы должны проверять логин и пароль
    // Но это всего лишь демо
    localStorage.setItem("isLoggedIn", "true");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
  };

  const sliderHandler = () => {
    setliteStyle(!liteStyle);
    localStorage.setItem("liteStyle", String(!liteStyle));
  };

  return (
    <ThemeContext.Provider
      value={{ liteStyle, onChangeThemeStyle: sliderHandler }}
    >
      <AuthContext.Provider
        value={{
          isLoggedIn,
          onLogout: logoutHandler,
        }}
      >
        <MainHeader />
        <main>
          {!isLoggedIn && <Login onLogin={loginHandler} />}
          {isLoggedIn && <Home onLogout={logoutHandler} />}
        </main>
      </AuthContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
