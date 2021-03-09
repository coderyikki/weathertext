import axios from 'axios'

export function request(config){
    const instance = axios.create({
        baseURL:'http://t.weather.itboy.net/api/weather',
    })

    instance.interceptors.request.use(config=>{
        return config
    },err=>{
        console.log(err);
    })

    instance.interceptors.response.use( res =>{
        console.log(res);
        return res
    },err=>{
        console.log(err);
    })
    
    return instance(config)
}
