import axios from 'axios'
import {ApiServer} from '../server.service'

export default class PetsAPI{
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

    get(){
        const config = {
            method: 'GET',
            url: ApiServer() + '/getPet/pets/get',
        }
        return this.axiosInstance(config)
    }

    getImage(data){
        const config = {
            method: 'POST',
            url: ApiServer() + '/getPet/pets/images/getByID',
            data: data
        }
        return this.axiosInstance(config)
    }
}
