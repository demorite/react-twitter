import {FETCH_TWEETS, FETCH_TWEETS_FAIL, FETCH_TWEETS_SUCCESS} from "./consts";
import {auth, database} from "../../utils/firebase";

export const fetchTweets = () => dispatch => {
	dispatch({type: FETCH_TWEETS});
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
};