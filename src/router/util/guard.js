import store from '@/store';
import { Log, Util } from '@/components/util';
import LoginService from "@/services/login/LoginService"


const authRoute = async (to, from, next) => {
	Log.info('Auth Logged In: ' + store.getters['authToken/loggedIn']);
	Log.info('to meta: ' + JSON.stringify(to.meta));
	// const authenticated = await store.dispatch("authToken/authenticate");
	// Log.info("DispatchAuth: " )
	// if (authenticated) {
	// 	console.log("authenticated: " + authenticated)
	// }

	if (store.getters['authToken/loggedIn']
		// && authenticated
	) {
		// const authenticated = await store.dispatch('authToken/authenticate');
		// if (!authenticated) {
		// 	navigateLogin(to, next);
		// } else {
		// 	let userActive = store.getters['authToken/isUserActive'];
		// 	if (userActive === true) {
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
		// 	} else if (userActive === false) {
		// 		Web.navigate('/user_activation');
		// 	} else {
		// 		Log.warn('userActive flag undefined. Unable to proceed');
		// 	}
		// }
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

