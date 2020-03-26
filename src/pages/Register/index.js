import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'
import './styles.css';

import { handleRegister, handleOnChange } from './handlers';

import logoImg from '../../assets/logo.svg';

export const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');
    const history = useHistory();

    return (
        <div className="register-container">
            <div className="content">
                <section>
                <img src={logoImg} alt="Be The Hero" />
                <h1>Cadastro</h1>
                <p>
                    Faça seu cadastro, entre na plataforma e 
                    ajude pessoas a encontrarem os casos da sua ONG.
                </p>
                <Link className="back-link" to="/">
                    <FiArrowLeft size={16} color="#E02041"/>
                    Não tenho cadastro
                </Link>
                </section>
                <form onSubmit={handleRegister({name, email, whatsapp, city, uf}, history)}>
                    <input 
                        placeholder="Nome da ONG" 
                        value={name}
                        onChange={handleOnChange(setName)}
                        required
                    />
                    <input 
                        type="email" 
                        placeholder="E-mail" 
                        value={email}
                        onChange={handleOnChange(setEmail)}
                        required
                    />
                    <input 
                        placeholder="WhatsApp"
                        value={whatsapp}
                        onChange={handleOnChange(setWhatsapp)}
                        required
                    />

                    <div className="input-group">
                        <input 
                            placeholder="Cidade" 
                            value={city}
                            onChange={handleOnChange(setCity)}
                            required
                        />
                        <input 
                            placeholder="UF" 
                            style={{width: 80, }} 
                            value={uf}
                            onChange={handleOnChange(setUf)}
                            required
                        />

                    </div>

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
};

export default Register;