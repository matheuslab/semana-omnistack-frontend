import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi'

import { handleOnChange, handleLogin } from './handlers';

import './styles.css';

import heroesImg from '../../assets/heroes.png'
import logoImg from '../../assets/logo.svg';

const Logon = () => {
    const [id, setId] = useState('');
    const history = useHistory();

    return (
       <div className="logon-container">
        <section className="form">
            <img src={logoImg} alt="Be The Hero"/>

            <form onSubmit={handleLogin(id, history)}>
                <h1>Faça seu logon</h1>

                <input 
                placeholder="Sua ID" 
                value={id}
                onChange={handleOnChange(setId)}
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

export default Logon;