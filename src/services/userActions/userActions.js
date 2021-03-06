import { Web, Constants } from "@/components/util"

export default class UserActions {
	static updateProfile(userDetails, successHandler, errorhandler) {
		Web.post(Constants.API_BASE + "Account/update-profile", userDetails, successHandler, errorhandler)
	}

	static createPIN(userDetails, successHandler, errorHandler) {
		Web.post(Constants.API_BASE + "Account/create-pin", userDetails, successHandler, errorHandler)
	}

	static changePIN(userDetails, successHandler, errorHandler) {
		Web.post(Constants.API_BASE + "Account/change-pin", userDetails, successHandler, errorHandler)
	}
}