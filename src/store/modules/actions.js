import * as types from './types.js'
import api from '@/api'

const actions={
	UserLogin({commit},data){
		commit(types.LOGIN,'token')

		// api.userLogin(data).then((response)=>{
		// commit(types.LOGIN,response.data.ret_msg)
		// })
	},
	UserLogout({commit}){
		commit(types.LOGOUT)
	},
	UserName({commit}){
		api.getInfo().then((response)=>{
			commit(types.USERNAME,response.data)
		})
		// commit(types.USERNAME,data)
	}
}

export default actions;