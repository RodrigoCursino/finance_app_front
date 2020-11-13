import requestMethods from '@/utils/RequestsMethods'

const login = async ({commit}, payload) => {

    var response = await requestMethods.requestPost('login/', payload).catch( () => {
        return false  
    })
    
    if(response.status === 200) {
        commit('SET_USER',response.data)
        return true
    } else {
        commit('SET_USER',null)
        return false
    }

}

export default {
    login
}