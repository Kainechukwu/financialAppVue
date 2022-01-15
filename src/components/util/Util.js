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
}