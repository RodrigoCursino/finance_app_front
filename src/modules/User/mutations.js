const SET_USER = (state, payload) => {
   
    if(payload) {
        state.user = payload
        localStorage.setItem('user', JSON.stringify(state.user))
    } else {
        state.user = {}
        localStorage.removeItem('user')
    }
   
}

export default {
    SET_USER
}