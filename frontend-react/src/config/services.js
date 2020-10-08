import api from './global'

const UsersService = {
    register: (params) => api.post('/register', params),
    login: async (params) => {
        const response = await api.post('/login', params)
        localStorage.setItem('user_MyEnglish',JSON.stringify(response.data.user))
    },
    updateRecords: async (params) => {
        const response = await api.post('/updateRecords', params)
        localStorage.setItem('user_MyEnglish',JSON.stringify(response.data.user))
    }
}

export default UsersService