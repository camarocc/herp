import * as types from './types.js'
const mutations={
	[types.LOGIN]:(state,data)=>{
		state.token=data;
		window.sessionStorage.setItem('token',data)
	},
	[types.LOGOUT]:(state)=>{
		state.token=null;
		window.sessionStorage.removeItem('token')
	},
	[types.USERNAME]:(state,data)=>{
		state.name=data[0].num
	}

}

export default mutations;