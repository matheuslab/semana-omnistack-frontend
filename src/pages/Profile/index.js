import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi'

import { handleDeleteIncident, handleLogout } from './handlers';
import api from '../../services/api';
import logoImg from '../../assets/logo.svg';
import './styles.css';

const Profile = () => {
    const ongName = localStorage.getItem('ongName');
    const ongId = localStorage.getItem('ongId');
    const [incidents, setIncidents] = useState([]);
    const history = useHistory();

    useEffect(() => {
        api.get('profile', {
            headers: {
                Authorization: ongId,
            }
        }).then(response => {
            setIncidents(response.data);
        })
    }, [ongId]);

    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be The Hero" />
                <span>Bem vindo, {ongName}</span>

                <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
                <button 
                type="button" 
                onClick={handleLogout(history)}
                > 
                    <FiPower size={18} color="#e02041" />
                </button>
            </header>

            <h1>Casos cadastrados</h1>

            <ul>
                {incidents.map((incident, index) => (
                    <li key={index}>
                        <strong>CASO:</strong>
                        <p>{incident.title}</p>

                        <strong>DESCRIÇÃO:</strong>
                        <p>{incident.description}</p>

                        <strong>VALOR:</strong>
                        <p>{
                        Intl.NumberFormat(
                            'pt-BR', 
                            { style: 'currency', currency: 'BRL' })
                            .format(incident.value) }
                        </p>

                        <button 
                        type="button"
                        onClick={handleDeleteIncident(incident.id, ongId, incidents, setIncidents)}
                        >
                            <FiTrash2 size={20} color="#a8a8b3" />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Profile;