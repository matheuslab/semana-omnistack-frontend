import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi'

import { handleOnChange, handleLogin } from './handlers';

import './styles.css';

import heroesImg from '../../assets/heroes.png'
import logoImg from '../../assets/logo.svg';

const SaasLogin = () => {
    const [userLoginName, setUserLoginName] = useState('');
    const [userName, setUserName] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [userEmail, setUserEmail] = useState('');

    const history = useHistory();

    return (
       <div className="logon-container">
        <section className="form">
            <img src={logoImg} alt="Be The Hero"/>

            <form onSubmit={handleLogin(userLoginName, userName, userPassword, userEmail, history)}>
                <h1>Faça seu logon</h1>

                <input 
                placeholder="Seu Login Name" 
                value={userLoginName}
                onChange={handleOnChange(setUserLoginName)}
                required
                />

                <input 
                placeholder="Seu userName" 
                value={userName}
                onChange={handleOnChange(setUserName)}
                required
                />

                <input 
                placeholder="Seu UserPassword" 
                value={userPassword}
                onChange={handleOnChange(setUserPassword)}
                required
                />

                <input 
                placeholder="Seu userEmail" 
                value={userEmail}
                onChange={handleOnChange(setUserEmail)}
                required
                />
                <button className="button" type="submit">Entrar</button>

                <Link className="back-link" to="/register">
                    <FiLogIn size={16} color="#E02041"/>
                    Não tenho cadastro
                </Link>
            </form>
        </section>
        <img src={heroesImg} alt="Heroes"/>
       </div>
    );
};

export default SaasLogin;