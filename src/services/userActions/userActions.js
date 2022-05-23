import { Web, Constants } from "@/components/util"

export default class UserActions {





	static getEarnings(userId, period, type, successHandler, errorHandler) {
		Web.get(Constants.API_BASE + '/Wallets/get-earnings?userId=' + userId + "&Period=" + period + "&Type=" + type, successHandler, errorHandler)

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

	static getNaijaBeneficiary(bankDetails, successHandler, errorHandler) {

		Web.post(
			Constants.API_BASE + "/Transactions/resolve-nuban",
			bankDetails,
			successHandler,
			errorHandler
		)
	}

	static getPrevBeneficiaries(userId, pageNumber, pageSize, successHandler, errorHandler) {

		Web.get(Constants.API_BASE + `/Transactions/${userId}/beneficiaries?pageNumber=${pageNumber}&pageSize=${pageSize}`, successHandler, errorHandler)

	}

	static naijaWithdrawal(bankDetails, successHandler, errorHandler) {

		Web.post(
			Constants.API_BASE + "/Transactions/withdraw-nigerian",
			bankDetails,
			successHandler,
			errorHandler
		)
	}

	static getNaijaBankAccountDetails(customerId, type, successHandler, errorHandler) {

		Web.get(Constants.API_BASE + `/Transactions/${customerId}/bank-account-details?type=${type}`, successHandler, errorHandler)

	}

	static getBankDetails(successHandler, errorHandler) {

		Web.get(Constants.API_BASE + '/Transactions/bornfree-bank-data', successHandler, errorHandler)

	}

	static getBankList(successHandler, errorHandler) {

		Web.get(Constants.API_BASE + '/Transactions/banks', successHandler, errorHandler)

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

	static saveCompliance(businessDetails, successHandler, errorHandler) {

		Web.post(
			Constants.API_BASE + "/Kyc/business-details",
			businessDetails,
			successHandler,
			errorHandler
		)
	}

	static getBankAccount(ownerId, successHandler, errorHandler) {

		Web.get(Constants.API_BASE + `/Kyc/bank-accounts/${ownerId}`, successHandler, errorHandler)

	}

	static saveBankAccount(bankDetails, successHandler, errorHandler) {

		Web.post(
			Constants.API_BASE + "/Kyc/bank-accounts",
			bankDetails,
			successHandler,
			errorHandler
		)
	}

	static createDirector(details, successHandler, errorHandler) {


		Web.post(
			Constants.API_BASE + "/Kyc/directors",
			details,
			successHandler,
			errorHandler
		)

	}

	static deleteDirector(id, successHandler, errorHandler) {

		Web.delete(Constants.API_BASE + `/Kyc/directors/${id}`, successHandler, errorHandler)
	}

	static editDirectorDetails(details, successHandler, errorHandler) {
		Web.put(
			Constants.API_BASE + "/Kyc/directors",
			details,
			successHandler,
			errorHandler
		)
	}

	static getDirectors(ownerId, successHandler, errorHandler) {

		Web.get(Constants.API_BASE + `/Kyc/directors/${ownerId}`, successHandler, errorHandler)

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

	static forgotPin(successHandler, errorHandler) {

		Web.get(Constants.API_BASE + `/Account/forgot-pin`, successHandler, errorHandler)

	}

	static resetPin(pinDetails, successHandler, errorHandler) {

		Web.post(Constants.API_BASE + "/Account/reset-pin", pinDetails, successHandler, errorHandler)

	}

	static getComplianceDetails(userId, successHandler, errorHandler) {
		Web.get(Constants.API_BASE + `/Kyc/compliances/business/${userId}`, successHandler, errorHandler)

	}

	static getPersonalCompliance(userId, successHandler, errorHandler) {
		Web.get(Constants.API_BASE + `/Kyc/compliances/personal/${userId}/details`, successHandler, errorHandler)

	}

	static getProfileDetails(userId, successHandler, errorHandler) {

		Web.get(Constants.API_BASE + `/Account/${userId}`, successHandler, errorHandler)
	}

	static getBusinessDetails(userId, successHandler, errorHandler) {

		Web.get(Constants.API_BASE + `/Kyc/business-details/${userId}`, successHandler, errorHandler)

	}

	static postDeviceInfo(userDetails, successHandler, errorHandler) {

		Web.post(Constants.API_BASE + "/Account/device-data", userDetails, successHandler, errorHandler)

	}

	static subscribeDevice(userDetails, successHandler, errorHandler) {
		Web.post(Constants.API_BASE + "/Device/subscribe-device", userDetails, successHandler, errorHandler)

	}


	//Notifications

	static getAllNotifications(userId, pageSize, pageNumber, successHandler, errorHandler) {

		Web.get(Constants.API_BASE + `/Notifications/all?UserId=${userId}&PageSize=${pageSize}&PageNumber=${pageNumber}`, successHandler, errorHandler)

	}

	static getUserNotification(userId, successHandler, errorHandler) {

		Web.get(Constants.API_BASE + `/Notifications/${userId}`, successHandler, errorHandler)

	}

	static deleteUserNotification(id, successHandler, errorHandler) {

		Web.delete(Constants.API_BASE + `/Notifications/${id}`, successHandler, errorHandler)

	}

	static markReadNotification(id, successHandler, errorHandler) {

		Web.patch(Constants.API_BASE + `/Notifications/${id}/read`, successHandler, errorHandler)

	}

	static muteNotifications(details, successHandler, errorHandler) {

		Web.post(Constants.API_BASE + "/Notifications/mute", details, successHandler, errorHandler)

	}

	static unmuteNotifications(details, successHandler, errorHandler) {

		Web.post(Constants.API_BASE + "/Notifications/unmute", details, successHandler, errorHandler)

	}

	static resendPhonenumberConfirmation(successHandler, errorHandler) {

		Web.post(Constants.API_BASE + `/Account/resend-phonenumber-confirmation-code`, "", successHandler, errorHandler)

	}


}