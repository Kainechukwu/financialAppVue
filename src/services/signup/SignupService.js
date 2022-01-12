import Web from "../../components/util/Web"
import Constants from "@/components/util/Constants.js";



export default class SignupService {
	static signupUser(userDetails, successHandler, errorHandler) {

		Web.post(Constants.API_BASE + "/Merchant/create", userDetails, successHandler, errorHandler);
	}

	static resendVerificationEmail(userEmail, successHandler, errorHandler) {
		Web.post(Constants.API_BASE + "/Account/resend-verification-email?email=" + userEmail, successHandler, errorHandler);
	}
}