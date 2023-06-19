import axios from 'axios'
import {ApiServer} from '../server.service'

export default class BooksAPI{
    constructor(){
        this.Flag = 'Books'
        this.axiosInstance = new axios.create({
            timeout: 100000000,
            baseURL: ApiServer(),
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
                'Accept': 'application/json; charset=UTF-8',
            }
        })
    }   

    get(){
        const config = {
            method: 'GET',
            url: ApiServer() + '/books',
        }
        return this.axiosInstance(config)
    }

    getById(id){
        const config = {
            method: 'GET',
            url: ApiServer() + `/books/${id}`,
        }
        return this.axiosInstance(config)
    }

    insert(data){
        const config = {
            method: 'POST',
            url: ApiServer() + `/books/insert`,
            data: data
        }
        return this.axiosInstance(config)
    }

    update(id, data){
        const config = {
            method: 'PUT',
            url: ApiServer() + `/books/update/${id}`,
            data: data
        }
        return this.axiosInstance(config)
    }

    deactivate(id){
        const config = {
            method: 'DELETE',
            url: ApiServer() + `/books/deactivate/${id}`,
        }
        return this.axiosInstance(config)
    }

}
