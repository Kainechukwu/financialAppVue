import store from "@/store/index";
import moment from "moment";
import Log from "./Log.js";
var numeral = require("numeral");

export default class Util {

	static getDeviceType = (string) => {
		const ua = string;
		if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {


			return "tablet";
		}
		if (
			/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
				ua
			)
		) {

			return "mobile";
		}

		return "desktop";
	};

	static getSystemOs = (string) => {
		const result = string.split("(")[1].split(";")[0]
		return result
	}
	static throttleObject = {};

	static throttle(t) {
		if (Util.throttleObject[t.key]) {
			Util.throttleObject[t.key].exec = false;
		}

		Util.throttleObject[t.key] = t;
		t.exec = true;

		setTimeout(() => {
			if (t.exec) {
				if (Util.isValidFunction(t.func)) {
					t.func();
				} else if (Util.isValidFunction(t.run)) {
					t.run();
				}
			}
		}, t.time || 1000);
	}

	static isValidFunction(f) {
		return typeof f === "function";
	}

	static hasLowerCase(str) {
		return /[a-z]/.test(str);
	}

	static hasUpperCase(str) {
		return /[A-Z]/.test(str);
	}

	static hasSpecialCharacter(str) {
		//eslint-disable-next-line
		return /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(str);
	}

	static hasNumber(str) {
		return /\d/.test(str);
	}

	static isValidString(str, empty = false) {
		return (typeof str === 'string') && ((!empty) ? (!!str && !!str.length) : true);
	}

	static toBase64 = (file) =>
		new Promise((resolve, reject) => {
			const reader = new FileReader();
			reader.readAsDataURL(file);
			reader.onload = () => resolve(reader.result);
			reader.onerror = (error) => reject(error);
		});

	static handleGlobalAlert = (show, type, text) => {

		store.commit("setGlobalAlert", { show, type, text });
	}

	static handleNotification = (show, type, text) => {

		store.commit("setNotification", { show, type, text });
	}

	static formatTime(
		time,
		inputFormat,
		outputFormat
	) {
		return moment(time, inputFormat).format(outputFormat);
	}

	static numWithComma(x) {
		const parts = x.toString().split(".");
		parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		// console.log(parts.join("."))
		return Number(parts.join("."));
	}

	static currencyFormatter(number, format) {


		const formatted = numeral(number).format(format)

		return formatted
	}

	static checkAuth(arr) {
		const roles = store.getters["authToken/roles"]

		const bool = roles.some(v => arr.includes(v))
		Log.info(bool)
		Log.info(roles)

		return bool

	}



	// static getId = (obj) => {
	// 	const id = array.value.find((obj) => obj.name === string).id;

	// 	return id;
	// };
}