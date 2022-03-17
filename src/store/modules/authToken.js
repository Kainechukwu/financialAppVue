import { Log } from "@/components/util";
const state = {
	// username: '',
	isVerified: false,
	apiToken: null,
	refreshToken: null,
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
	phoneNumber: "",
	isProfileUpdated: false,
	isPhoneNumberVerified: false,
	isKycDone: false,
	count: 0

	// authorizations: [],
};


const getters = {
	count(state) {
		return state.count;
	},
	isProfileUpdated(state) {
		return state.isProfileUpdated;
	},
	isPhoneNumberVerified(state) {
		return state.isPhoneNumberVerified;
	},
	isKycDone(state) {
		return state.isKycDone;
	},
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

	refreshToken(state) {
		return state.refreshToken;
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
	isProfileUpdated(state, isProfileUpdated) {
		state.isProfileUpdated = isProfileUpdated;
	},
	isPhoneNumberVerified(state, isPhoneNumberVerified) {
		state.isPhoneNumberVerified = isPhoneNumberVerified;
	},
	isKycDone(state, isKycDone) {
		state.isKycDone = isKycDone;
	},
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
	refreshToken(state, refreshToken) {
		state.refreshToken = refreshToken
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
	},

	increment(state) {
		state.count++
		Log.info("stateCount:" + state.count)
	}

};


const actions = {

	increment({ commit }) {

		setInterval(() => {
			commit('increment')
		}, 1000)
	}

};


export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations,
};