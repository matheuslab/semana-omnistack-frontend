import api from '../../services/api';

export const handleOnChange = (setState) => (event) => {
    setState(event.target.value);
}

export const handleLogin = (id, history) => async (event) => {
    event.preventDefault();

    try {
        const response = await api.post('sessions', { id });
        
        console.log(response.data.name);

         localStorage.setItem('ongId', id);
         localStorage.setItem('ongName', response.data.name);
         history.push('/profile');
    }   catch (err) {
        alert('Falha no login, tente novamente.');
    }
}