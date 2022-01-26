import { Web, Constants } from "@/components/util"

export default class UserInfo {
	static accountBalance(customerId, successHandler, errorHandler) {
		Web.get(Constants.API_BASE + `/Wallets/${customerId}/customer-balance`, successHandler, errorHandler)
	}

	static transactionHistory(customerId, successHandler, errorHandler) {
		Web.get(Constants.API_BASE + `/Wallets/${customerId}/customer-transactions`, successHandler, errorHandler)
	}

	static getClientKeys(successHandler, errorHandler) {

		Web.get(Constants.API_BASE + '/Account/get-clientkeys', successHandler, errorHandler)
	}


}