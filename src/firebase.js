import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyDNkb0hHq20SGI3N_xJ7u5ei3YCtxNcUnU",
	authDomain: "linkedin-aa465.firebaseapp.com",
	projectId: "linkedin-aa465",
	storageBucket: "linkedin-aa465.appspot.com",
	messagingSenderId: "790091097391",
	appId: "1:790091097391:web:bc3a1108936df41436adda",
	measurementId: "G-TRMGVX2EHB",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
