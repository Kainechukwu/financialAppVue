import store from "@/store/index";
import moment from "moment";
import Log from "./Log.js";
var numeral = require("numeral");

export default class Util {
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