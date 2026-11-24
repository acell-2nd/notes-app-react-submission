import React, { useContext } from "react";
import LoginInput from "../components/LoginInput";
import { Link } from "react-router-dom";
import { login } from "../utils/network-data";
import ThemeContext from "../context/ThemeContext";
import { FiSun, FiMoon } from "react-icons/fi";

function LoginPage({ logginSuccess }) {

  const { theme, toggleTheme } = useContext(ThemeContext);

  async function onLogin({ email, password }) {
    const { error, data } = await login({ email, password });

    if (!error) {
      logginSuccess(data);
    }
  }

  return (
    <>
      <header className="header-login">
        <h1>Login Page</h1>
        <button className="toggle-theme" type="button" onClick={toggleTheme}>
          {theme === "dark" ? <FiSun /> : <FiMoon />}
        </button>
      </header>
      <section className="login-page">
        <h2>Silakan masuk untuk melanjutkan ...</h2>
        <LoginInput login={onLogin} />
        <p>
          Belum punya akun? <Link to="/register">Daftar di sini.</Link>
        </p>
      </section>
    </>
  );
}

export default LoginPage;
