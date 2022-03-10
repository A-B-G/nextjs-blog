// import { useInputState } from './useInputState'
import { useState } from 'react';
import { initialVal } from './useInputState';

export default function FormInputHook() {
    const [username, updateUsername, resetUsername] = initialVal(" ");
    const [password, updatePassword, resetPassword] = initialVal(" ");

    return (
        <div>
            <h1>The username is...{username}</h1>            
            <label htmlFor={username}>Username</label>
            <input type="text" value={username} onChange={updateUsername} />
            <button onClick={resetUsername}>Reset</button>
            <h1>The password is...{password}</h1>
            <label htmlFor={password}>Password</label>
            <input type="text" value={password} onChange={updatePassword} />
        </div>
    )
}
