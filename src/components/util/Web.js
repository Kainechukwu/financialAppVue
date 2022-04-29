import axios from 'axios';
// import store from "@/store";
import Log from "./Log.js";
import Constants from "./Constants.js";
import store from "../../store/index.js";

axios.interceptors.request.use(req => {

	// req.headers["user_id"] = localStorage.getItem("user_id");
	const matchingExcludePaths = Constants.authExcludeApiPaths.filter((value) => {
		req.url = req.url || '';
		return req.url.indexOf(value) > -1;
	});

	if (
		matchingExcludePaths.length === 0
		&& process.env.VUE_APP_BASE_URL
		&& req.url?.startsWith(process.env.VUE_APP_BASE_URL)
	) {
		req.headers.Authorization = "Bearer " + store.getters['authToken/apiToken'];
	}

	if (
		matchingExcludePaths.length === 0
		&& process.env.VUE_APP_CUSTOMER_SERVICE
		&& req.url?.startsWith(process.env.VUE_APP_CUSTOMER_SERVICE)
	) {
		req.headers.Authorization = "Bearer " + store.getters['authToken/apiToken'];
		req.headers.clientKey = store.getters['authToken/clientLiveKey'];
	}

	if (
		matchingExcludePaths.length === 0
		&& process.env.VUE_APP_BO_BASE_URL
		&& req.url?.startsWith(process.env.VUE_APP_BO_BASE_URL)
	) {
		req.headers.Authorization = "Bearer " + store.getters['authToken/apiToken'];
	}

	return req;

}, function (error) {
	Log.info("axios-error" + error)
	// Do something with request error
	return Promise.reject(error);
});



export default class Web {
	static BASE_URL = process.env.VUE_APP_BASE_URL;
	static BO_BASE_URL = process.env.VUE_APP_BO_BASE_URL
	static CUSTOMER_SERVICE = process.env.VUE_APP_CUSTOMER_SERVICE

	static get(url, successCallback, errorCallback) {
		Web.getAbsolute(Web.BASE_URL + url, successCallback, errorCallback);
	}

	static getBackOffice(url, successCallback, errorCallback) {
		Web.getAbsolute(Web.BO_BASE_URL + url, successCallback, errorCallback);
	}

	static getCustomer(url, successCallback, errorCallback) {
		Web.getAbsolute(Web.CUSTOMER_SERVICE + url, successCallback, errorCallback);
	}


	static getAbsolute(
		url, successCallback, errorCallback
	) {
		axios.get(url)
			.then(successCallback)
			.catch(errorCallback);
	}

	static navigate(url) {
		window.location.href = url;
	}


	static post(url, data, successCallback, errorCallback) {
		Web.postAbsolute(Web.BASE_URL + url, data, successCallback, errorCallback);
	}

	static postBackOffice(url, data, successCallback, errorCallback) {
		Web.postAbsolute(Web.BO_BASE_URL + url, data, successCallback, errorCallback);
	}

	static postAbsolute(
		url, data, successCallback, errorCallback
	) {
		axios.post(url, data)
			.then(successCallback)
			.catch(errorCallback);
	}

	static postCustomer(url, data, successCallback, errorCallback) {
		Web.postAbsolute(Web.CUSTOMER_SERVICE + url, data, successCallback, errorCallback);
	}

	static postRefreshToken(url, data, refreshToken, successCallback, errorCallback) {
		axios.post(Web.BASE_URL + url, data, {
			headers: {
				'refreshToken': refreshToken,
				// 'Authorization': "Bearer" + " " + jwToken
			}
		})
			.then(successCallback)
			.catch(errorCallback);
	}

	static put(url, data, successCallback, errorCallback) {
		Web.putAbsolute(Web.BASE_URL + url, data, successCallback, errorCallback);
	}

	static putAbsolute(
		url, data, successCallback, errorCallback
	) {
		axios.put(url, data)
			.then(successCallback)
			.catch(errorCallback);
	}

	static delete(url, successCallback, errorCallback) {
		Web.deleteAbsolute(Web.BASE_URL + url, successCallback, errorCallback);
	}

	static deleteBackOffice(url, successCallback, errorCallback) {
		Web.deleteAbsolute(Web.BO_BASE_URL + url, successCallback, errorCallback);
	}


	static deleteAbsolute(
		url, successCallback, errorCallback
	) {
		axios.delete(url)
			.then(successCallback)
			.catch(errorCallback);
	}

	static patch(url, successCallback, errorCallback) {
		Web.patchAbsolute(Web.BASE_URL + url, successCallback, errorCallback);
	}

	static patchBackOffice(url, successCallback, errorCallback) {
		Web.patchAbsolute(Web.BO_BASE_URL + url, successCallback, errorCallback);
	}


	static patchAbsolute(
		url, successCallback, errorCallback
	) {
		axios.patch(url)
			.then(successCallback)
			.catch(errorCallback);
	}










}