import axios from 'axios'
import { message } from 'ant-design-vue'

const restfulRequest = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_API as string,
    timeout: 2000
})

restfulRequest.interceptors.request.use(config => {
    return config
}, error => {
    return Promise.reject(error)
})

restfulRequest.interceptors.response.use(response => {
    return response.data
}, error => {
    let errorMessage: string = ''
    switch (error.response.status) {
        case 401:
            errorMessage = 'Unauthorized'
            break
        case 403:
            errorMessage = 'Forbidden'
            break
        case 404:
            errorMessage = 'Not Found Resource'
            break
        case 500:
            errorMessage = 'Server Error'
            break
        default:
            errorMessage = 'Network Error'
            break
    }

    message.error(`Request Error, Status: ${error.response.status}, Error Message: ${errorMessage}`).then(null)

    return Promise.reject(error)
})

export default restfulRequest
