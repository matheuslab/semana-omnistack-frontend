import api from '../../services/api';

export const handleOnChange = (setState) => (event) => {
    event.preventDefault();

    setState(event.target.value);
}

export const handleNewIncident = (data, ongId, history) => async (event) => {
    event.preventDefault();

    try {
        await api.post('incidents', data, {
            headers: {
                Authorization: ongId,
            }
        })
        history.push('/profile');
    } catch(err) {
        alert('Erro ao cadastrar caso, tente novamente.');
    }
}