import { Web, Constants } from "@/components/util";
import store from "@/store/index.js";
import { Log } from "@/components/util";



export default class LoginService {
	static loginUser(
		userDetails,
		successHandler,
		errorHandler
	) {
		Web.post(
			Constants.API_BASE + "/Account/login",
			userDetails,
			successHandler,
			errorHandler
		);
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

	static confirmEmail(
		userId,
		code,
		successHandler,
		errorHandler
	) {
		Web.get(
			// Account/confirm-email?userId=www&code=wwwww
			Constants.API_BASE + "/Account/confirm-email?userId=" + userId + "&code=" + code,

			successHandler,
			errorHandler
		)
	}

	static handleSuccessfulLogin(response) {
		// const store = useStore();


		const data = response.data.data;
		Log.info("below is data")
		Log.info(data);
		store.commit("authToken/authToken", data.jwToken);
		store.commit("authToken/isVerified", data.isVerified);
		store.commit("authToken/userId", data.id);
		store.commit("authToken/email", data.email);
		store.commit("authToken/roles", data.roles);
		store.commit("authToken/firstName", data.firstName);
		store.commit("authToken/lastName", data.lastName);



	}
}