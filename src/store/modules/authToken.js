
const state = {
	// username: '',
	isVerified: false,
	apiToken: null,
	userId: "",
	email: "",
	roles: [],
	firstName: "",
	lastName: "",
	hasPin: false,
	entryUrl: "",
	loggedIn: false,
	dob: "",
	companyName: "",
	phoneNumber: ""

	// authorizations: [],
};


const getters = {
	// username(state) {
	// 	return state.username;
	// },
	dob(state) {
		return state.dob;
	},
	companyName(state) {
		return state.companyName;
	},
	phoneNumber(state) {
		return state.phoneNumber;
	},
	firstName(state) {
		return state.firstName;
	},

	lastName(state) {
		return state.lastName;
	},

	isVerified(state) {
		return state.isVerified;
	},

	apiToken(state) {
		return state.apiToken;
	},

	userId(state) {
		return state.userId;
	},

	email(state) {
		return state.email;
	},
	loggedIn(state) {
		return state.loggedIn;
	},

	roles(state) {
		return state.roles;
	},

	hasPin(state) {
		return state.hasPin;
	},
	entryUrl(state) {
		return state.entryUrl;
	},


};


const mutations = {
	dob(state, dob) {
		state.dob = dob;
	},
	companyName(state, companyName) {
		state.companyName = companyName;
	},
	phoneNumber(state, phoneNumber) {
		state.phoneNumber = phoneNumber;
	},

	firstName(state, firstName) {
		state.firstName = firstName;
	},

	lastName(state, lastName) {
		state.lastName = lastName;
	},

	apiToken(state, token) {
		state.loggedIn = true;
		state.apiToken = token;
	},

	isVerified(state, isVerified) {
		state.isVerified = isVerified
	},
	// loggedIn(state, loggedIn) {
	// 	state.loggedIn = loggedIn
	// },



	userId(state, userId) {
		state.userId = userId;
	},

	email(state, email) {
		state.email = email;
	},

	roles(state, roles) {
		state.roles = roles;
	},

	hasPin(state, hasPin) {
		state.hasPin = hasPin;
	},
	entryUrl(state, entryUrl) {
		state.entryUrl = entryUrl;
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