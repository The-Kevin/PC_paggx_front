import axios from 'axios'

export default axios.create({
    baseURL: import.meta.env.API_URL || 'http://localhost:3000'
})