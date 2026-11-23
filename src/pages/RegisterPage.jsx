import React from "react";
import { register } from "../utils/network-data";
import { Link, useNavigate } from "react-router-dom";
import RegisterInput from "../components/RegisterInput";

function RegisterPage (){
    const navigate = useNavigate();
    async function registerHandler (user){
        const {error} = await register(user);

        if(!error){
            navigate('/');
        }
    }

    return (
        <section className='register-page'>
      <h2>Daftar Akun</h2>
      <RegisterInput register={registerHandler} />
      <p>Kembali ke <Link to="/">Masuk</Link></p>
    </section>
    )
}
export default RegisterPage