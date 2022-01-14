
const state = {
	// username: '',
	isVerified: false,
	apiToken: null,
	userId: "",
	email: "",
	roles: [],
	firstName: "",
	lastName: "",
	// authorizations: [],
};


const getters = {
	// username(state) {
	// 	return state.username;
	// },
	firstName(state) {
		return state.firstName
	},

	lastName(state) {
		return state.lastName
	},

	isVerified(state) {
		return state.isVerified
	},

	apiToken(state) {
		return state.apiToken
	},

	userId(state) {
		return state.userId
	},

	email(state) {
		return state.email
	},

	roles(state) {
		return state.roles
	}


};


const mutations = {

	firstName(state, firstName) {
		state.firstName = firstName;
	},

	lastName(state, lastName) {
		state.lastName = lastName;
	},

	apiToken(state, token) {

		state.apiToken = token;
	},

	isVerified(state, isVerified) {
		state.isVerified = isVerified
	},



	userId(state, userId) {
		state.userId = userId;
	},

	email(state, email) {
		state.email = email;
	},

	roles(state, roles) {
		state.roles = roles;
	}

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