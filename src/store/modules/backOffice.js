

const state = {

	transRef: "",
	confirmNum: ","



};


const getters = {


	transRef(state) {
		return state.transRef
	},
	confirmNum(state) {
		return state.confirmNum
	},


};


const mutations = {
	transRef(state, transRef) {
		state.transRef = transRef;
	},
	confirmNum(state, confirmNum) {
		state.confirmNum = confirmNum;
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