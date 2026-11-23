import React from "react";
import useInput from "./useInput";

function RegisterInput ({register}){
    const [name, nameChangeHandler] = useInput('');
    const [email, emailChangeHandler] = useInput('');
    const [password, passwordChangeHandler] = useInput('');
    const onSubmitHandler = (event) => {
        event.preventDefault();
        register({
            name,
            email,
            password
        });

    };

    
    return (
        <form onSubmit={onSubmitHandler} className='register-input'>
        <input type="text" placeholder="Nama" value={name} onChange={nameChangeHandler} />
        <input type="email" placeholder="Email" value={email} onChange={emailChangeHandler} />
        <input type="password" placeholder="Password" autoComplete='current-password' value={password} onChange={passwordChangeHandler} />
        <button type="submit">Register</button>
      </form>
    );
}
export default RegisterInput