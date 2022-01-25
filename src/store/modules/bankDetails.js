

const state = {
	// username: '',
	// isVerified: false,
	// details: {
	pin: "",
	amount: 0,
	rateId: "",
	// userId: "",
	// bank: {
	beneficiaryName: "",
	beneficiaryAccountNumber: "",
	bankName: "",
	abaRoutingNumber: "",
	bankAddress: "",
	balance: ""
	// }
	// }

};


const getters = {

	// details(state) {
	// 	return state.details
	// }
	pin(state) {
		return state.pin
	},
	balance(state) {
		return state.balance
	},
	amount(state) {
		return state.amount
	},
	rateId(state) {
		return state.rateId
	},
	beneficiaryName(state) {
		return state.beneficiaryName
	},
	beneficiaryAccountNumber(state) {
		return state.beneficiaryAccountNumber
	},

	bankName(state) {
		return state.bankName
	},
	bankAddress(state) {
		return state.bankAddress
	},
	abaRoutingNumber(state) {
		return state.abaRoutingNumber
	},
};


const mutations = {

	pin(state, pin) {
		state.pin = pin;
	},
	balance(state, balance) {
		state.balance = balance;
	},
	amount(state, amount) {
		state.amount = amount;
	},
	rateId(state, rateId) {
		state.rateId = rateId;
	},
	beneficiaryName(state, beneficiaryName) {
		state.beneficiaryName = beneficiaryName;
	},

	beneficiaryAccountNumber(state, beneficiaryAccountNumber) {
		state.beneficiaryAccountNumber = beneficiaryAccountNumber;
	},
	bankName(state, bankName) {
		state.bankName = bankName;
	},
	bankAddress(state, bankAddress) {
		state.bankAddress = bankAddress;
	},
	abaRoutingNumber(state, abaRoutingNumber) {
		state.abaRoutingNumber = abaRoutingNumber;
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