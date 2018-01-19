const firebase = require('firebase');

const config = {
	apiKey: "AIzaSyCjRikjl3XwKe7cYSRywTG-LUJhUzVACyc",
	authDomain: "twitter-like-e9c46.firebaseapp.com",
	databaseURL: "https://twitter-like-e9c46.firebaseio.com",
	projectId: "twitter-like-e9c46",
	storageBucket: "twitter-like-e9c46.appspot.com",
	messagingSenderId: "200246249695"
};

const firebase_conf = firebase.initializeApp(config);

export const database = firebase_conf.database();
export const auth = firebase_conf.auth();