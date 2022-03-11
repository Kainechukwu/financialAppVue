import firebase from 'firebase/app'
import 'firebase/messaging'

const firebaseConfig = {
	// apiKey: "AIzaSyD4DHre_KLgZ8_2xKcT1iWmgT_EuTlHRvo",
	// authDomain: "ameta-ad6dc.firebaseapp.com",
	// projectId: "ameta-ad6dc",
	// storageBucket: "ameta-ad6dc.appspot.com",
	// messagingSenderId: "126443713852",
	// appId: "1:126443713852:web:ab48819de37b756dc25a39"
	messagingSenderId: '193154658535',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export default firebase.messaging()
// const apps = getApps()
// const app = !apps.length ? initializeApp(firebaseConfig) : apps[0];
// // export const messaging = getMessaging(app)
// export const messaging = app

