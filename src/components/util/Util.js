import store from "@/store/index";
import moment from "moment";

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

	// static getId = (obj) => {
	// 	const id = array.value.find((obj) => obj.name === string).id;

	// 	return id;
	// };
}