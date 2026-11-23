import React from "react";
import LoginInput from "../components/LoginInput";
import { Link } from "react-router-dom";
import { login } from "../utils/network-data";
function LoginPage ({logginSuccess}){

    async function onLogin({email, password}){
        const {error, data} = await login({email,password});

        if(!error){
            logginSuccess(data);
        }
    }

    return (
        <>
         <h2>Silakan masuk untuk melanjutkan ...</h2>
        <LoginInput login={onLogin}/>
         <p>Belum punya akun? <Link to="/register">Daftar di sini.</Link></p>
        </>
    )
}
export default LoginPage    