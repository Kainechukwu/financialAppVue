import store from '@/store';
import { Log, Util } from '@/components/util';
import LoginService from "@/services/login/LoginService"


const authRoute = async (to, from, next) => {
	// Log.info('Auth Logged In: ' + store.getters['authToken/loggedIn']);
	// Log.info('to meta: ' + JSON.stringify(to.meta));


	if (store.getters['authToken/loggedIn']) {
		//If they are logged in check if their token is valid
		const tokenIsValid = await store.dispatch("authToken/checkTokenExpiration");
		if (!tokenIsValid) {
			//If token is not valid then refresh the token
			store.dispatch("authToken/refreshTheToken")
		}

		if (to.meta.auth) {
			//check if user is authorised to see the page
			if (Util.checkAuth(to.meta.auth)) {
				navigatePath(next);
			} else {
				navigatePath(from)
			}
			return;
		}

		navigatePath(next);

	} else {
		navigateLogin(to, next);
	}
};


const navigateLogin = (to, next) => {
	Log.info(next)
	store.commit('entryUrl', to.path);
	LoginService.handleLogout()

};


const navigatePath = (next) => {
	const url = store.getters.entryUrl;

	if (Util.isValidString(url)) {
		next(url);
		store.commit('entryUrl', null);
	} else {
		next();
	}
};


export default function (to, from, next) {
	// Log.info("from:" + JSON.stringify(from));
	if (to.matched.some((record) => record.meta.skipAuth)) {
		next();
		return;
	}

	authRoute(to, from, next);
}

