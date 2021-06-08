import api from '../../services/api';

export const handleOnChange = (setState) => (event) => {
    setState(event.target.value);
}

export const handleLogin = (userLoginName, userName, userPassword, userEmail, history) => async (event) => {
    event.preventDefault();

    try {
        const response = await api.post('sassLogin', { userLoginName, userName, userPassword, userEmail });
        console.log(response);
    }   catch (err) {
        alert('Falha no login, tente novamente.');
    }
}