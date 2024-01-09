import { defineStore } from "pinia";
import { Names } from "./store_name";


export const useInfoStore = defineStore(Names.TEST, {
	state: () => {
		return {
			userinfo: {},
			name:'fff'
		}
	},

	getters: {
		newName(): string {
			return `这是getter修改过后的name${this.name}`
		}
	},

	actions: {

	}

})