import mutations from './mutations.js'
import actions from './actions.js'

const state ={
	token:window.sessionStorage.getItem('token')
}

export default{
    state ,
    mutations,
    actions
}