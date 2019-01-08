import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)


const store=new Vuex.Store({
	state:{
		a:0
	},
	getters:{
		num:(state)=>{
			return state.a
		}
	},
	mutations:{
		addState:(store,num)=>{
			console.log(num);
			store.a=store.a+num
		}
	},
	actions:{
		add:(store,num)=>{
			console.log(store)
			store.commit('addState',num)
		}
	}
	
	
})

export default store;

