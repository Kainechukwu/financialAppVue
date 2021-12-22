import { Web, Constants } from "@/components/util";

export default class LoginService {
	static loginUser(
		userDetails,
		successHandler,
		errorHandler
	) {
		Web.post(
			Constants.API_BASE + "/Account/sign-in",
			userDetails,
			successHandler,
			errorHandler
		);
	}

	static forgotPasswordApi(
		userDetails,
		successHandler,
		errorHandler
	) {
		Web.post(
			Constants.API_BASE + "/Account/forgot-password",
			userDetails,
			successHandler,
			errorHandler
		)
	}

	static resetPassword(
		userDetails,
		successHandler,
		errorHandler
	) {
		Web.post(
			Constants.API_BASE + "/Account/reset-password",
			userDetails,
			successHandler,
			errorHandler
		)
	}
}