import axios from 'axios'
import {ApiServer} from '../server.service'

export default class Users{
    constructor(){
        this.Flag = 'Pets'
        this.axiosInstance = new axios.create({
            timeout: 100000000,
            baseURL: ApiServer(),
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
                'Accept': 'application/json; charset=UTF-8',
                'X-Header-Token': process.env.REACT_APP_X_HEADER_TOKEN,
                'Authorization': `Bearer ${sessionStorage.getItem('acessToken') ? sessionStorage.getItem('acessToken'): null}`
            }
        })
    }   

    getPermissions(data){
        const config = {
            method: 'POST',
            url: ApiServer() + '/getPet/users/getPermissions',
            data: data
        }
        return this.axiosInstance(config)
    }

    getUser(data){
        const config = {
            method: 'POST',
            url: ApiServer() + '/getPet/users/getUser',
            data: data
        }
        return this.axiosInstance(config)
    }

    
}
