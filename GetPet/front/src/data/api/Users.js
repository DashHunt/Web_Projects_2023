import axios from 'axios'
import {ApiServer} from '../server.service'

export default class TokenAPI{
    constructor(){
        this.Flag = 'Pets'
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

    getPermissions(data){
        const config = {
            method: 'POST',
            url: ApiServer() + '/getPet/token/get',
            data: data
        }
        return this.axiosInstance(config)
    }

    
}
