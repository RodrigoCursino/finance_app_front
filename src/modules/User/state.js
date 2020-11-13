let user = {}

if(localStorage.getItem('user')) {
    user = JSON.parse(localStorage.getItem('user'))
}

export default {
    user
}