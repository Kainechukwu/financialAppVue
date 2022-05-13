import { Web, Constants } from "@/components/util"
import store from "@/store/index.js";


export default class UserInfo {
	static accountBalance(customerId, successHandler, errorHandler) {
		Web.get(Constants.API_BASE + `/Wallets/${customerId}/customer-balance`, successHandler, errorHandler)
	}

	static transactionHistory(customerId, pageNumber, pageSize, successHandler, errorHandler) {
		// Web.get(Constants.API_BASE + `/Transactions/merchant-customer-transactions/${merchantId}?pageSize=` + pageSize + "&pageNumber=" + pageNumber, successHandler, errorHandler)

		Web.get(Constants.API_BASE + `/Wallets/${customerId}/customer-transactions?PageNumber=` + pageNumber + "&PageSize=" + pageSize, successHandler, errorHandler)
	}

	static getClientKeys(successHandler, errorHandler) {

		Web.get(Constants.API_BASE + '/Account/get-clientkeys', successHandler, errorHandler)
	}
	static getInterestRate(successHandler, errorHandler) {
		Web.get(Constants.API_BASE + '/Rates/interest-percent', successHandler, errorHandler)

	}

	static isNigerian() {
		const country = store.getters['authToken/countryName'];
		return country != null && country.length > 0 && country === "Nigeria";
	}


}