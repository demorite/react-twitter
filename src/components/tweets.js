import React from 'react'
import moment from 'moment';
import 'moment/locale/fr';
import * as Spinner from 'react-spinkit'
import isFetchingTweets from "../store/selectors/is_fetching_tweets";
import getAllTweets from "../store/selectors/get_all_tweets";
import {bindActionCreators} from "redux";
import {fetchTweets} from "../store/actions/firebase";
import {connect} from "react-redux";
import faker from 'faker';

class Tweets extends React.Component {
	componentDidMount() {
		this.props.fetchTweets();
		this.sentence = [
			"Quoi de neuf ?",
			"Racontes nous ta journée",
			"Belle journée pour tweeter n'est-ce pas ?",
		][~~(Math.random() * 3)]
	}
	
	render() {
		const {tweets, isFetchingTweets} = this.props;
		
		return <div className={`tweets `}>
			<div className="tweet_input_container">
				<div className="avatar"
				     style={{backgroundImage: `url(${faker.image.avatar()})`}}/>
				<input type="text"
				       placeholder={this.sentence}/>
				<div className="button">Tweeter</div>
			</div>
			{isFetchingTweets && <Spinner fadeIn={"none"}
			                              name={"circle"}/>}
			{!isFetchingTweets && tweets !== undefined && tweets.map(tweet => {
				const current_user = {
					picture: {
						large: faker.image.avatar()
					},
					login: {
						username: faker.internet.userName()
					}
				};
				const picture = current_user.picture.large;
				const username = tweet.username;
				const date = moment().to(tweet.createdAt);
				const {text, likes = {}} = tweet;
				
				return <div key={tweet.id}
				            className="tweet animated fadeIn">
					<div className="top">
						<img src={picture}
						     alt={"something"}/>
						<div className="username">{username}</div>
						<div className="createdAt">{date}</div>
					</div>
					<div className="middle">
						{text}
					</div>
					<div className="bottom">
						<div className="likes">
							<i className="fa fa-heart-o"/>
							<div>{Object.keys(likes).length}</div>
						</div>
					</div>
				</div>
			})}
		</div>
	}
}

const mapStateToProps = state => ({
	isFetchingTweets: isFetchingTweets(state),
	tweets: getAllTweets(state)
});

const mapDispatchToProps = dispatch => bindActionCreators({
	fetchTweets
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Tweets)