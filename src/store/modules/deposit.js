

const state = {
	// username: '',
	// isVerified: false,
	// details: {
	amount: 0,
	rateId: "",
	amountToSend: 0,
	amountRecieved: 0,
	holderName: "",
	// userId: "",
	// bank: {
	bankAddress: "",
	accountNumber: "",
	bankName: "",
	routingNumber: "",

	transactionFee: 0,
	transactionRefCode: "",
	transactionsReference: ""
	// }
	// }

};


const getters = {

	// details(state) {
	// 	return state.details
	// }
	amount(state) {
		return state.amount
	},
	rateId(state) {
		return state.rateId
	},

	amountToSend(state) {
		return state.amountToSend
	},
	amountRecieved(state) {
		return state.amountRecieved
	},
	holderName(state) {
		return state.holderName
	},
	accountNumber(state) {
		return state.accountNumber
	},
	transactionFee(state) {
		return state.transactionFee
	},
	transactionRefCode(state) {
		return state.transactionRefCode
	},
	transactionsReference(state) {
		return state.transactionsReference
	},

	bankName(state) {
		return state.bankName
	},
	bankAddress(state) {
		return state.bankAddress
	},
	routingNumber(state) {
		return state.routingNumber
	},
};


const mutations = {

	amount(state, amount) {
		state.amount = amount;
	},
	rateId(state, rateId) {
		state.rateId = rateId;
	},
	amountToSend(state, amountToSend) {
		state.amountToSend = amountToSend;
	},
	amountRecieved(state, amountRecieved) {
		state.amountRecieved = amountRecieved;
	},
	holderName(state, holderName) {
		state.holderName = holderName;
	},
	accountNumber(state, accountNumber) {
		state.accountNumber = accountNumber;
	},
	transactionFee(state, transactionFee) {
		state.transactionFee = transactionFee;
	},
	transactionRefCode(state, transactionRefCode) {
		state.transactionRefCode = transactionRefCode;
	},

	transactionsReference(state, transactionsReference) {
		state.transactionsReference = transactionsReference;
	},
	bankName(state, bankName) {
		state.bankName = bankName;
	},
	bankAddress(state, bankAddress) {
		state.bankAddress = bankAddress;
	},
	routingNumber(state, routingNumber) {
		state.routingNumber = routingNumber;
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