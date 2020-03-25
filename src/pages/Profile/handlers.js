import api from '../../services/api';

export const handleDeleteIncident =  (id, ongId, incidents, setIncidents) => async () => {
    try {
        await api.delete(`incidents/${id}`, {
            headers:{
                Authorization: ongId,
            }
        });

        setIncidents(incidents.filter(incident => incident.id !== id));
    }   catch(err) {
        alert('Erro ao deletar caso, tente novamente.');
    }
}

export const handleLogout = (history) => () => {
    localStorage.clear();
    history.push('/');
}