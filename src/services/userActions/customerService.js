import { Web, Constants } from "@/components/util"

export default class CustomerService {
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





}