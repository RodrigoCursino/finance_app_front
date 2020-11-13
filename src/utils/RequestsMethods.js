import axios from 'axios'
import store from '@/store'

const path  = 'http://localhost:5000'

// retorna um header para cada tipo de requisição
const createHeaders = (file=false) => {
    
    let token = store.getters['User/get_user'].token ? store.getters['User/get_user'].token : ''
    
    if (file) {
        return {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'multipart/form-data'
            }
        }
    } else {
        return {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    }
}

// método padrão para GET
const requestGet = (url, data=null) => {
    
    let response = null
   
    if(data) {
        response = axios.get(`${path}/${url}`, data, createHeaders()).catch( error => {
            return error.response
        })
    } else {
        response = axios.get(`${path}/${url}`, createHeaders()).catch( (error) => {
            return error.response
        })
    }

    return response
}

// método padrão para POST
const requestPost = (url, data) => {
    
    let response = null
    
    response = axios.post(`${path}/${url}`, data,createHeaders()).catch( error => {
        return error.response
    })
    
    return response
}

// método padrão para PUT
const requestPut = (url, data) => {
    
    let response = null
    
    response = axios.put(`${path}/${url}`, data,createHeaders()).catch( error => {
        return error.response
    })
    
    return response
}

// método padrão para DELETE
const requestDelete = (url, data) => {
    
    let response = null
    
    response = axios.delete(`${path}/${url}`, data,createHeaders()).catch( error => {
        return error.response
    })
    
    return response
}

// método padrão para requisição de Arquivos
const requestFile = (url, data) => {
    
    var keys      = Object.keys(data)
    var _formData = new FormData()
    
    for(var key in keys) {
        var _key = keys[key]
        _formData.append(_key,data[_key])
    } 
    
    let response = null
    
    response = axios.post(`${path}/${url}`, data, createHeaders(true)).catch( error => {
        return error.response
    })
    
    return response
}

export default {
    createHeaders,
    requestGet,
    requestPost,
    requestPut,
    requestDelete,
    requestFile
}