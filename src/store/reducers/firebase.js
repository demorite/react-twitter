import {Map} from 'immutable';
import {FETCH_TWEETS, FETCH_TWEETS_FAIL, FETCH_TWEETS_SUCCESS, LIKE_TWEET_SUCCESS, SEND_TWEET_SUCCESS} from "../actions/consts";
import * as _ from "lodash";

const initialState = Map({
	tweets: undefined,
	isFetchingTweets: undefined
});

const handlers = {
	[FETCH_TWEETS]: (state, action) => state
		.set('isFetchingTweets', true),
	[FETCH_TWEETS_SUCCESS]: (state, action) => state
		.set('tweets', action.payload)
		.set('isFetchingTweets', false),
	[FETCH_TWEETS_FAIL]: (state, action) => state
		.set('tweets', [])
		.set('isFetchingTweets', false),
	[SEND_TWEET_SUCCESS]: (state, action) => state.update('tweets', tweets => {
		return [
			{...action.payload, id: ~~(Math.random() * Math.random() * 10000)},
			...tweets
		]
	}),
	[LIKE_TWEET_SUCCESS]: (state, action) => state.update('tweets', tweets => {
		tweets = [...tweets.map(tweet => {
			if (String(tweet.id) === String(action.payload.tweetId)) {
				if (action.payload.message === "unliked") {
					tweet.likes = tweet.likes.filter(like => String(like) !== String(action.payload.uid));
				}
				else {
					const newlikes = [tweet.likes];
					newlikes.push(action.payload.uid);
					tweet.likes = newlikes;
				}
			}
			return {...tweet};
		})];
		return [...tweets]
	})
};

export default (state = initialState, action) => {
	console.log(action);
	const handler = handlers[action.type];
	return typeof handler === 'function' ? handler(state, action) : state;
}