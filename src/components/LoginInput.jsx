import React from "react";
import useInput from "./useInput";

function LoginInput({login}){
    const [email, emailChangeHandler] = useInput('');
    const [password, passwordChangeHandler] = useInput('');
    const onSubmitHandler = (e) => {
        e.preventDefault();
        login({
            email,
            password,
        });

    };
    return (
          <form onSubmit={onSubmitHandler} className='login-input'>
        <input type="email" placeholder='Email' value={email} onChange={emailChangeHandler} />
        <input type="password" placeholder='Password' value={password} onChange={passwordChangeHandler} />
        <button type="submit">Masuk</button>
      </form>
    )
}

export default LoginInput