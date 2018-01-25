import React from 'react'
import 'moment/locale/fr';
import * as Spinner from 'react-spinkit'
import isFetchingTweets from "../store/selectors/is_fetching_tweets";
import getAllTweets from "../store/selectors/get_all_tweets";
import {bindActionCreators} from "redux";
import {fetchTweets, sendTweet} from "../store/actions/firebase";
import {connect} from "react-redux";
import faker from 'faker';
import Tweet from '../components/tweet.js'

class Tweets extends React.PureComponent {
	handleTweet() {
		const {sendTweet} = this.props;
		const tweet = this.tweetInput.value;
		if (tweet) {
			sendTweet(tweet, "NKiwv0KOGdbLNEHgm5tnLHddDZa2", "Test2")
		}
		this.tweetInput.value = ""
	}
	
	componentDidMount() {
		this.props.fetchTweets(this.props.uid);
		this.sentence = [
			"Quoi de neuf ?",
			"Racontes nous ta journée",
			"Belle journée pour tweeter n'est-ce pas ?",
		][~~(Math.random() * 3)]
	}
	
	render() {
		const {tweets, isFetchingTweets} = this.props;
		
		return <div className={`tweets `}>
			<form className="tweet_input_container"
			      onSubmit={(e) => {
				      e.preventDefault();
				      this.handleTweet()
			      }}>
				<div className="avatar"
				     style={{backgroundImage: `url(${faker.image.avatar()})`}}/>
				<input type="text"
				       ref={ref => this.tweetInput = ref}
				       placeholder={this.sentence}/>
				<div className="button"
				     onClick={() => this.handleTweet()}>Tweeter
				</div>
			</form>
			{isFetchingTweets && <Spinner fadeIn={"none"}
			                              name={"circle"}/>}
			{!isFetchingTweets
			&& tweets !== undefined
			&& tweets
				.map(tweet => <Tweet tweet={tweet}
				                     key={tweet.id}/>)}
		</div>
	}
}

const mapStateToProps = state => ({
	isFetchingTweets: isFetchingTweets(state),
	tweets: getAllTweets(state)
});

const mapDispatchToProps = dispatch => bindActionCreators({
	fetchTweets,
	sendTweet
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Tweets)