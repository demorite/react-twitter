import _ from 'lodash'

const getAllTweets = (state) => _
	.sortBy(state.appReducer.get('tweets'), ['createdAt'])
	.reverse();
export default getAllTweets;