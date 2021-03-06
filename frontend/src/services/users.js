import api from '../config/global'

const UsersService = {
    register: (params) => api.post('/register', params),
    login: async (params) => {
        const response = await api.post('/login', params)
        localStorage.setItem('user_MyEnglish',JSON.stringify(response.data.user))
    }
}

export default UsersService