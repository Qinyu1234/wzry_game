import axios from 'axios'

const service = axios.create({
    baseURL:'/api',
    timeout:10000
})

service.interceptors.request.use((config)=>{
    return config
})
service.interceptors.response.use(res=>{
    return res.data
},error=>{
    return Promise.reject(error)
})
export default service
    
