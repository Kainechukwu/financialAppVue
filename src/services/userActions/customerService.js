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

	static saveRates(credentials, successHandler, errorHandler) {

		Web.postCustomer(
			Constants.API_BASE + "/Rates/save",
			credentials,
			successHandler,
			errorHandler
		)
	}

	static getAllCustomerRates(merchantId, successHandler, errorHandler) {

		Web.getCustomer(Constants.API_BASE + `/Rates/${merchantId}/get`, successHandler, errorHandler)

	}

	static getAllCustomers(merchantId, successHandler, errorHandler) {

		Web.getCustomer(Constants.API_BASE + `/Customers/${merchantId}/get-all`, successHandler, errorHandler)

	}



}