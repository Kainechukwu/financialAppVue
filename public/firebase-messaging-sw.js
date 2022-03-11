importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');

const firebaseConfig = {
    messagingSenderId: '193154658535',
    // apiKey: "AIzaSyD4DHre_KLgZ8_2xKcT1iWmgT_EuTlHRvo",
    // authDomain: "ameta-ad6dc.firebaseapp.com",
    // projectId: "ameta-ad6dc",
    // storageBucket: "ameta-ad6dc.appspot.com",
    // messagingSenderId: "126443713852",
    // appId: "1:126443713852:web:ab48819de37b756dc25a39"
};


const app = firebase.initializeApp(firebaseConfig);
