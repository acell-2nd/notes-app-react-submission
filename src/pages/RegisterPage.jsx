import React, {useContext} from "react";
import { register } from "../utils/network-data";
import { Link, useNavigate } from "react-router-dom";
import RegisterInput from "../components/RegisterInput";
import ThemeContext from "../context/ThemeContext";
import { FiSun, FiMoon } from "react-icons/fi";
function RegisterPage (){
    const { theme, toggleTheme } = useContext(ThemeContext);
    const navigate = useNavigate();
    async function registerHandler (user){
        const {error} = await register(user);

        if(!error){
            navigate('/');
        }
    }

    return (
        <>
         <header className="header-register">
                <h1>Register Page</h1>
                <button className="toggle-theme" type="button" onClick={toggleTheme}>
                  {theme === "dark" ? <FiSun /> : <FiMoon />}
                </button>
              </header>
        <section className='register-page'>
      <h2>Daftar Akun</h2>
      <RegisterInput register={registerHandler} />
      <p>Kembali ke <Link to="/">Masuk</Link></p>
    </section>
        </>
    )
}
export default RegisterPage