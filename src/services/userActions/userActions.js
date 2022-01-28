import { Web, Constants } from "@/components/util"

export default class UserActions {


	static getEarnings(successHandler, errorHandler) {
		Web.get(Constants.API_BASE + '/Wallets/get-earnings', successHandler, errorHandler)

	}

	static getCharges(successHandler, errorHandler) {

		Web.get(Constants.API_BASE + '/Transactions/get-charges', successHandler, errorHandler)

	}

	static confirmDeposit(credentials, successHandler, errorHandler) {
		Web.post(
			Constants.API_BASE + "/Transactions/confirm-deposit",
			credentials,
			successHandler,
			errorHandler
		)

	}


	static transactionDeposit(details, successHandler, errorHandler) {
		Web.post(
			Constants.API_BASE + "/Transactions/manual-deposit",
			details,
			successHandler,
			errorHandler
		)
	}

	static transactionWithdrawal(bankDetails, successHandler, errorHandler) {

		Web.post(
			Constants.API_BASE + "/Transactions/withdraw",
			bankDetails,
			successHandler,
			errorHandler
		)

	}

	static getBankDetails(successHandler, errorHandler) {

		Web.get(Constants.API_BASE + '/Transactions/bornfree-bank-data', successHandler, errorHandler)

	}
	static getCustomerTransactions(merchantId, successHandler, errorHandler) {

		Web.get(Constants.API_BASE + `/Transactions/merchant-customer-transactions/${merchantId}`, successHandler, errorHandler)

	}

	static getAllRates(successHandler, errorHandler) {

		Web.get(Constants.API_BASE + "/Rates/all", successHandler, errorHandler)

	}

	static forgotPasswordApi(
		userEmail,
		successHandler,
		errorHandler
	) {
		Web.post(
			Constants.API_BASE + "/Account/forgot-password?email=" + userEmail, "",
			successHandler,
			errorHandler
		)
	}

	static setBusinessProfile(businessDetails, successHandler, errorHandler) {

		Web.post(
			Constants.API_BASE + "/Kyc/business-profiles",
			businessDetails,
			successHandler,
			errorHandler
		)
	}


	static compliancePersonalUpload(details, successHandler, errorHandler) {
		Web.post(
			Constants.API_BASE + "/Kyc/compliances/personal/upload",
			details,
			successHandler,
			errorHandler
		)
	}

	static businessVerification(details, successHandler, errorHandler) {

		Web.post(
			Constants.API_BASE + "/Kyc/compliances/business/create",
			details,
			successHandler,
			errorHandler
		)
	}

	static getStates(stateId, successHandler, errorHandler) {
		Web.get(Constants.API_BASE + "/Kyc/countries/" + stateId + "/states", successHandler, errorHandler)
	}

	static getCountries(successHandler, errorHandler) {
		Web.get(Constants.API_BASE + "/Kyc/countries", successHandler, errorHandler)
	}

	static getCustomers(merchantId, successHandler, errorHandler) {
		Web.get(Constants.API_BASE + `/Customers/${merchantId}/all-customers`, successHandler, errorHandler)

	}

	static resetPassword(userDetails, successHandler, errorhandler) {

		Web.post(Constants.API_BASE + "/Account/reset-password", userDetails, successHandler, errorhandler)

	}

	static merchantUpdateProfile(userDetails, successHandler, errorhandler) {
		Web.post(Constants.API_BASE + "/Merchant/update", userDetails, successHandler, errorhandler)
	}

	static changePassword(userDetails, successHandler, errorHandler) {
		Web.post(Constants.API_BASE + "/Account/change-password", userDetails, successHandler, errorHandler);

	}

	static confirmPhoneNumber(userDetails, successHandler, errorhandler) {
		Web.post(Constants.API_BASE + "/Account/confirm-phone-number", userDetails, successHandler, errorhandler)
	}

	static updateProfile(userDetails, successHandler, errorhandler) {
		Web.post(Constants.API_BASE + "/Account/update-profile", userDetails, successHandler, errorhandler)
	}

	static createPIN(userDetails, successHandler, errorHandler) {
		Web.post(Constants.API_BASE + "/Account/create-pin", userDetails, successHandler, errorHandler)
	}

	static changePIN(userDetails, successHandler, errorHandler) {
		Web.post(Constants.API_BASE + "/Account/change-pin", userDetails, successHandler, errorHandler)
	}


}