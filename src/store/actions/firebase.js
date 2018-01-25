import {FETCH_TWEETS, FETCH_TWEETS_FAIL, FETCH_TWEETS_SUCCESS, LIKE_TWEET, LIKE_TWEET_FAIL, LIKE_TWEET_SUCCESS, SEND_TWEET, SEND_TWEET_FAIL, SEND_TWEET_SUCCESS} from "./consts";
//import {auth, database} from "../../utils/firebase";
import fetch from 'cross-fetch';
import {tweet_url} from "../../utils/api";
import {fakeUser} from "../../utils/fakeUser";

export const fetchTweets = (uid) => dispatch => {
	dispatch({type: FETCH_TWEETS});
	
	const url = uid ? tweet_url+"?uid="+uid : tweet_url;
	
	fetch(url)
		.then(res => {
			if(res.ok)
				return res.json();
			throw new Error("Not Found")
		})
		.then(json => {
			return dispatch({
				type: FETCH_TWEETS_SUCCESS,
				payload: json,
			})
		})
		.catch(err => dispatch({
				type: FETCH_TWEETS_FAIL,
				err
			})
		);
	
	/**
	
	auth
		.signInWithEmailAndPassword("dylan3396@hotmail.fr", "ceciestunmotdepasse")
		.then((user) => {
			database
				.ref('/posts')
				.on("value", snapshot => {
						const values = snapshot.val();
						const posts = Object
							.keys(values)
							.map(key => ({
								...values[key],
								id: key,
							}));
						
						return dispatch({
							type: FETCH_TWEETS_SUCCESS,
							payload: posts,
						})
						
					}, err => dispatch({
						type: FETCH_TWEETS_FAIL,
						err
					})
				)
			
		})
		.catch(err => dispatch({
				type: FETCH_TWEETS_FAIL,
				err
			})
		)
	 */
};

export const sendTweet = (text, user_id, username) => dispatch => {
	dispatch({
		type: SEND_TWEET
	});
	
	const tweet = {
		text,
		user_uid: fakeUser.uid,
		username: fakeUser.username,
		createdAt: Date.now(),
		likes: [],
	};
	
	const body = (Object.keys(tweet).map(key => `${encodeURIComponent(key)}=${encodeURIComponent(tweet[key])}`).join("&"));
	
	fetch(tweet_url, {
		method: "POST",
		headers:{
			'Content-Type': 'application/x-www-form-urlencoded'
		},
		body,
	})
		.then(res => {
			if (res.ok)
				return res.json();
			throw new Error("not found")
		})
		.then(json => {
			dispatch({
				type: SEND_TWEET_SUCCESS,
				payload: tweet
			});
		})
		.catch(err => dispatch({
			type: SEND_TWEET_FAIL,
			err
		}));
	
	/**
	 database
	 .ref("/posts")
	 .push(tweet)
	 .then(success => dispatch({
			type: SEND_TWEET_SUCCESS,
			payload: tweet
		}))
	 .catch(err => dispatch({
			type: SEND_TWEET_FAIL,
			err
		}))
	 */
};

export const likeTweet = (tweetId) => dispatch => {
	dispatch({
		type: LIKE_TWEET,
	});
	
	const url = `${tweet_url}/${tweetId}/like`;
	
	fetch(url, {
		method: "POST",
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		},
		body: "uid="+fakeUser.uid,
	})
		.then(res => {
			if (res.ok)
				return res.json();
			throw new Error("not found")
		})
		.then(json => {
			dispatch({
				type: LIKE_TWEET_SUCCESS,
				payload: {
					message: json.message,
					uid: fakeUser.uid,
					tweetId
				}
			});
		})
		.catch(err => dispatch({
			type: LIKE_TWEET_FAIL,
			err
		}));
};
