import api from '../../services/api';

export const handleRegister = (data, history) => async (event) => {
    event.preventDefault();

    try {
        const response = await api.post('ongs', data);

        alert(`Seu ID de acesso: ${response.data.id}`);
        
        history.push('/');

    }   catch (err) {
        alert('Erro no cadastro, tente novamente.');
    }
   
}

export const handleOnChange = (setState) => (event) => {
    setState(event.target.value);
}