// import { Log } from "@/components/util";
const state = {

	transactionDetails: {},
	customerId: ""

	// authorizations: [],
};


const getters = {
	transactionDetails(state) {
		return state.transactionDetails;
	},

	customerId(state) {
		return state.customerId;
	},



};


const mutations = {
	transactionDetails(state, transactionDetails) {
		state.transactionDetails = transactionDetails;
	},
	customerId(state, customerId) {
		state.customerId = customerId;
	},

};


const actions = {



};


export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations,
};