import {Map} from 'immutable';
import {FETCH_TWEETS, FETCH_TWEETS_FAIL, FETCH_TWEETS_SUCCESS} from "../actions/consts";

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
		.set('isFetchingTweets', false)
};

export default (state = initialState, action) => {
	console.log(action);
	const handler = handlers[action.type];
	return typeof handler === 'function' ? handler(state, action) : state;
}