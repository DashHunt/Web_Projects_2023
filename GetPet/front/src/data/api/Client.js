import axios from 'axios'
import {ApiServer} from '../server.service'

export default class ClientAPI{
    constructor(){
        this.Flag = 'Client'
        this.axiosInstance = new axios.create({
            timeout: 100000000,
            baseURL: ApiServer(),
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
                'Accept': 'application/json; charset=UTF-8',
                'X-Header-Token': process.env.REACT_APP_X_HEADER_TOKEN
            }
        })
    }   

    register(data){
        const config = {
            method: 'POST',
            url: ApiServer() + '/getPet/clients/register',
            data: data
        }
        return this.axiosInstance(config)
    }

    login(data){
        const config = {
            method: 'POST',
            url: ApiServer() + '/getPet/clients/login',
            data: data
        }
        return this.axiosInstance(config)
    }

    
}
