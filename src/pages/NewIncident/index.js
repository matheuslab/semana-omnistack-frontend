import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'
import './styles.css';
import logoImg from '../../assets/logo.svg';

import { handleOnChange, handleNewIncident } from './handlers';

const NewIncident = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');
    const ongId = localStorage.getItem('ongId');

    const history = useHistory();

    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                <img src={logoImg} alt="Be The Hero" />
                <h1>Cadastro novo caso</h1>
                <p>
                    Descreva o caso detalhadamente para encontrar 
                    um heroi para resolver isso.
                </p>
                <Link className="back-link" to="/profile">
                    <FiArrowLeft size={16} color="#E02041"/>
                    Voltar para home
                </Link>
                </section>

                <form onSubmit={handleNewIncident({title, description, value}, ongId, history)}>
                    <input 
                        placeholder="Título do caso" 
                        value={title}
                        onChange={handleOnChange(setTitle)}
                        required
                        />
                    <textarea 
                        placeholder="Descrição" 
                        value={description}
                        onChange={handleOnChange(setDescription)}
                        required
                        />
                    <input 
                        placeholder="Valor em reais"
                        value={value}
                        onChange={handleOnChange(setValue)}
                        required
                        />

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
};

export default NewIncident;