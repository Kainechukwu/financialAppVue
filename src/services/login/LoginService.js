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
		// companyName: "disney"
		// dob: "27/12/1994"
		// email: "kaine.bismarck@suprbiz.io"
		// firstName: "kainechukwu"
		// hasPin: true
		// id: "dce38ac5-4b38-467b-addf-cfad2ba9c223"
		// isVerified: true
		// jwToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJrYWluZS5iaXNtYXJja0BzdXByYml6LmlvIiwianRpIjoiY2IwYmRlMTAtNjdhMi00OTk2LWFmNmItNjFjNzU0MjcyZjFjIiwiZW1haWwiOiJrYWluZS5iaXNtYXJja0BzdXByYml6LmlvIiwidWlkIjoiZGNlMzhhYzUtNGIzOC00NjdiLWFkZGYtY2ZhZDJiYTljMjIzIiwiaXAiOiIxNzIuMzEuMzQuMTg4Iiwicm9sZXMiOiJNZXJjaGFudCIsImV4cCI6MTY0MzI1Nzk4OCwiaXNzIjoiQ29yZUlkZW50aXR5IiwiYXVkIjoiQ29yZUlkZW50aXR5VXNlciJ9.cUMzcituwx1HsEvNNtbjljq4ol0K7jknYcFMl3yQIzg"
		// lastName: "Bismarck"
		// phoneNumber: null
		// roles: ["Merchant"]
		// userName: "kainechukwu Bismarck"
		// Util.formatTime(
		// 	new Date(data.dob),
		// 	"YYYY-MM-DD HH:mm:ss.SSSS",
		// 	"DD/MM/YYYY"

		// )


		const data = response.data.data;
		Log.info("below is data")
		Log.info(data);
		store.commit("authToken/apiToken", data.jwToken);
		store.commit("authToken/isVerified", data.isVerified);
		store.commit("authToken/userId", data.id);
		store.commit("authToken/email", data.email);
		store.commit("authToken/roles", data.roles);
		store.commit("authToken/firstName", data.firstName);
		store.commit("authToken/lastName", data.lastName);
		store.commit("authToken/hasPin", data.hasPin);
		store.commit("authToken/dob", data.dob ? new Date(data.dob) : new Date("01/01/1000"));
		store.commit("authToken/phoneNumber", data.phoneNumber ? data.phoneNumber : "");
		store.commit("authToken/companyName", data.companyName ? data.companyName : "Unverified");
		// store.commit("authToken/companyName", null);
		store.commit("authToken/isProfileUpdated", data.isProfileUpdated);
		store.commit("authToken/isPhoneNumberVerified", data.isPhoneNumberVerified);
		store.commit("authToken/isKycDone", data.isKycDone);




	}

	static handleLogout() {
		localStorage.clear();

	}
}