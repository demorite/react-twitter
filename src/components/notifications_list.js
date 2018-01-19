import React from 'react'
import loremipsum from 'lorem-ipsum';
import moment from 'moment';
import 'moment/locale/fr';
import Spinner from "react-spinkit"

class NotificationsList extends React.Component {
	state = {
		users: [],
		tweets: []
	};
	
	componentDidMount() {
		fetch('https://randomuser.me/api/?results=10')
			.then(res => res.json())
			.then(json => {
				const users = json.results;
				const tweets = users.map((user, id) => ({
					id,
					post_id: id,
					type: ['like', 'unlike', 'tweet'][~~(Math.random() * 3)],
					username: users[~~(Math.random() * users.length)].login.username,
					target: "me",
					text: loremipsum({
						format: "plain",
						count: ~~(Math.random() * 10),
					}),
					createdAt: new Date(),
				}));
				this.setState({tweets, users})
			});
		
		
	}
	
	render() {
		const users = this.state.users;
		const tweets = this.state.tweets;
		
		return <div className="tweets">
			{tweets.length <= 0 && <Spinner fadeIn={"none"} name={"circle"}/>}
			{tweets.map(tweet => {
				const current_user = users.find(user => user.login.username === tweet.username) || {};
				const username = current_user.login.username;
				const date = moment().to(tweet.createdAt);
				const {text} = tweet;
				
				return <div key={tweet.id}
				            className="tweet animated fadeIn">
					<div className="top">
						<div className="img"/>
						<div className="username">{username}</div>
						<div className="createdAt">{date}</div>
					</div>
					<div className="middle">
						{text.slice(0, 70).trim('.').trim()}{text.length > 70 && '...'}
					</div>
				</div>
			})}
		</div>
	}
}

export default NotificationsList