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

	static getAllCustomers(merchantId, successHandler, errorHandler) {

		Web.getCustomer(Constants.API_BASE + `/Customers/${merchantId}/get-all`, successHandler, errorHandler)

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





}