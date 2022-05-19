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

	static getRefreshToken(refreshToken, successHandler, errorHandler) {
		// 
		Web.postRefreshToken(
			Constants.API_BASE + "/Account/refresh-token",
			"",
			refreshToken,

			successHandler,
			errorHandler
		)

	}

	// static replaceToken(refreshToken) {
	// 	LoginService.getRefreshToken(
	// 		refreshToken,

	// 		(response) => {
	// 			const data = response.data.data;
	// 			store.commit("authToken/apiToken", data.jwToken);
	// 			store.commit("authToken/refreshToken", data.refreshToken)
	// 			Log.info("tokenData:" + JSON.stringify(data))
	// 		},
	// 		(error) => {
	// 			Log.info("Tokenerror: " + error)
	// 		}
	// 	)
	// }
	static refreshToken = () => {
		LoginService.getRefreshToken(
			store.getters["authToken/refreshToken"],
			(response) => {
				const data = response.data.data;
				store.commit("authToken/apiToken", data.jwToken);
				store.commit("authToken/refreshToken", data.refreshToken);

				Log.info("refreshAuth: " + JSON.stringify(response))
			},
			(error) => {
				Log.info("Tokenerror: " + error);
			}
		);
	};



	static handleSuccessfulLogin(response) {


		const data = response.data.data;
		Log.info("below is data")
		Log.info(data);
		store.commit("authToken/apiToken", data.jwToken ? data.jwToken : null);

		store.commit("authToken/isVerified", data.isVerified);
		store.commit("authToken/userId", data.id);
		store.commit("authToken/email", data.email);
		store.commit("authToken/roles", data.roles);
		store.commit("authToken/firstName", data.firstName);
		store.commit("authToken/lastName", data.lastName);
		store.commit("authToken/hasPin", data.hasPin);
		store.commit("authToken/dob", data.dob ? data.dob : new Date("01/01/1000"));
		store.commit("authToken/phoneNumber", data.phoneNumber ? data.phoneNumber : "");
		store.commit("authToken/companyName", data.companyName ? data.companyName : "Unverified");
		store.commit("authToken/countryName", data.countryName ? data.countryName : "")
		// store.commit("authToken/companyName", null);
		store.commit("authToken/isProfileUpdated", data.isProfileUpdated);
		store.commit("authToken/isPhoneNumberVerified", data.isPhoneNumberVerified);
		store.commit("authToken/isKycDone", data.isKycDone);

		//commit refreshToken
		store.commit("authToken/refreshToken", data.refreshToken ? data.refreshToken : null)

		// store.dispatch('authToken/increment')
		//set interval to call refreshtoken endpoint and pass jwToken
		// setInterval(replaceToken, 28 * 60 * 1000);
		// setInterval(LoginService.replaceToken, 5000);




	}

	static handleLogout() {
		localStorage.clear();
		Web.navigate('/login');
	}
}