import { Web, Constants } from "@/components/util"

export default class CustomerService {

	// Customers
	static createCustomer(credentials, successHandler, errorHandler) {

		Web.postCustomer(
			Constants.API_BASE + "/Customers/create",
			credentials,
			successHandler,
			errorHandler
		)
	}

	static getAllCustomers(pageNumber, pageSize, successHandler, errorHandler) {

		Web.getCustomer(Constants.API_BASE + `/Customers/get-all?PageNumber=${pageNumber}&PageSize=${pageSize}`, successHandler, errorHandler)

	}

	static customerSearch(pageNumber, pageSize, searchText, successHandler, errorHandler) {

		Web.getCustomer(Constants.API_BASE + `/Customers/search?PageNumber=${pageNumber}&PageSize=${pageSize}&searchText=${searchText}`, successHandler, errorHandler)

	}

	//Rates

	static saveRate(credentials, successHandler, errorHandler) {

		Web.postCustomer(
			Constants.API_BASE + "/Rates/save",
			credentials,
			successHandler,
			errorHandler
		)
	}

	static getCustomerRate(successHandler, errorHandler) {

		Web.getCustomer(Constants.API_BASE + `/Rates/get`, successHandler, errorHandler)

	}

	static getSuprbizRate(successHandler, errorHandler) {
		Web.getCustomer(Constants.API_BASE + `/Rates/master-rate`, successHandler, errorHandler)

	}


	//Transactions


	static customerTransactionDeposit(credentials, successHandler, errorHandler) {

		Web.postCustomer(
			Constants.API_BASE + "/Transactions/customer/deposit",
			credentials,
			successHandler,
			errorHandler
		)
	}

	static customerConfirmDeposit(credentials, successHandler, errorHandler) {
		Web.postCustomer(
			Constants.API_BASE + "/Transactions/customer/confirm-deposit",
			credentials,
			successHandler,
			errorHandler
		)

	}

	static customerTransactionWithdrawal(credentials, successHandler, errorHandler) {
		Web.postCustomer(
			Constants.API_BASE + "/Transactions/customer/withdrawal",
			credentials,
			successHandler,
			errorHandler
		)

	}


	static customerConfirmWithdrawal(credentials, successHandler, errorHandler) {
		Web.postCustomer(
			Constants.API_BASE + "/Transactions/customer/confirm-withdrawal",
			credentials,
			successHandler,
			errorHandler
		)

	}


	static getCustomerTransactions(PageNumber, PageSize, successHandler, errorHandler) {

		Web.getCustomer(Constants.API_BASE + `/Transactions/customer/transactions?PageNumber=${PageNumber}&PageSize=${PageSize}`, successHandler, errorHandler)

	}

	static getCustomerBanks(successHandler, errorHandler) {

		Web.getCustomer(Constants.API_BASE + `/Transactions/banks`, successHandler, errorHandler)

	}

	static getNaijaCustomerBeneficiary(bankDetails, successHandler, errorHandler) {

		Web.postCustomer(
			Constants.API_BASE + "/Transactions/resolve-nuban",
			bankDetails,
			successHandler,
			errorHandler
		)
	}

	static getCustomerNaijaBankAccountDetails(type, successHandler, errorHandler) {

		Web.getCustomer(Constants.API_BASE + `/Transactions/bank-account-details?type=${type}`, successHandler, errorHandler)

	}

	static getPrevCustomerBeneficiaries(pageNumber, pageSize, successHandler, errorHandler) {

		Web.getCustomer(Constants.API_BASE + `/Transactions/beneficiaries?pageNumber=${pageNumber}&pageSize=${pageSize}`, successHandler, errorHandler)

	}

	static naijaCustomerWithdrawal(bankDetails, successHandler, errorHandler) {

		Web.postCustomer(
			Constants.API_BASE + "/Transactions/withdraw-nigerian",
			bankDetails,
			successHandler,
			errorHandler
		)
	}

	static transactionCustomerWithdrawal(bankDetails, successHandler, errorHandler) {

		Web.postCustomer(
			Constants.API_BASE + "/Transactions/withdraw",
			bankDetails,
			successHandler,
			errorHandler
		)

	}


	static transactionDeposit(details, successHandler, errorHandler) {
		Web.postCustomer(
			Constants.API_BASE + "/Transactions/manual-deposit",
			details,
			successHandler,
			errorHandler
		)
	}

	static confirmDeposit(credentials, successHandler, errorHandler) {
		Web.postCustomer(
			Constants.API_BASE + "/Transactions/confirm-deposit",
			credentials,
			successHandler,
			errorHandler
		)

	}

	static getCharges(successHandler, errorHandler) {

		Web.getCustomer(Constants.API_BASE + '/Transactions/get-charges', successHandler, errorHandler)

	}

	static getMerchantTransactions(pageNumber, pageSize, status, type, origin, source, from, to, successHandler, errorHandler) {
		Web.getCustomer(Constants.API_BASE + `/Transactions/merchant/transactions?PageNumber=${pageNumber}&PageSize=${pageSize}&Status=${status}&Type=${type}&Origin=${origin}&Source=${source}&From=${from}&To=${to}`, successHandler, errorHandler)

	}



}