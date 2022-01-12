import axios from 'axios';
// import store from "@/store";
import Log from "./Log.js";

axios.interceptors.request.use(req => {

	// req.headers["user_id"] = localStorage.getItem("user_id");


	return req;

}, function (error) {
	Log.info("axios-error" + error)
	// Do something with request error
	return Promise.reject(error);
});



export default class Web {
	static BASE_URL = process.env.VUE_APP_BASE_URL;

	static get(url, successCallback, errorCallback) {
		Web.getAbsolute(Web.BASE_URL + url, successCallback, errorCallback);
	}

	static getAbsolute(
		url, successCallback, errorCallback
	) {
		axios.get(url)
			.then(successCallback)
			.catch(errorCallback);
	}

	static post(url, data, successCallback, errorCallback) {
		Web.postAbsolute(Web.BASE_URL + url, data, successCallback, errorCallback);
	}

	static postAbsolute(
		url, data, successCallback, errorCallback
	) {
		axios.post(url, data)
			.then(successCallback)
			.catch(errorCallback);
	}


}