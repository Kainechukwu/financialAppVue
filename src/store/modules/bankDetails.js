

const state = {

	pin: "",
	amount: 0,
	rateId: "",
	beneficiaryName: "",
	beneficiaryAccountNumber: "",
	bankName: "",
	abaRoutingNumber: "",
	bankAddress: "",
	balance: "",
	amountToReceive: 0,
	withdrawalFee: 0,
	depositFee: 0,
	walletId: 0,
	naijaBankDetails: {}


};


const getters = {

	// details(state) {
	// 	return state.details
	// }
	naijaBankDetails(state) {
		return state.naijaBankDetails
	},
	walletId(state) {
		return state.walletId
	},
	depositFee(state) {
		return state.depositFee
	},

	withdrawalFee(state) {
		return state.withdrawalFee
	},

	pin(state) {
		return state.pin
	},
	amountToReceive(state) {
		return state.amountToReceive
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

	naijaBankDetails(state, naijaBankDetails) {
		state.naijaBankDetails = naijaBankDetails;
	},
	walletId(state, walletId) {
		state.walletId = walletId;
	},
	depositFee(state, depositFee) {
		state.depositFee = depositFee;
	},
	withdrawalFee(state, withdrawalFee) {
		state.withdrawalFee = withdrawalFee;
	},
	pin(state, pin) {
		state.pin = pin;
	},
	amountToReceive(state, amountToReceive) {
		state.amountToReceive = amountToReceive;
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