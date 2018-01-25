import React from 'react'
import moment from 'moment';
import 'moment/locale/fr';
import faker from 'faker';
import {likeTweet} from "../store/actions/firebase";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {fakeUser} from "../utils/fakeUser";

class Tweet extends React.PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			date: moment().to(parseInt(props.tweet.createdAt, 0)),
			current_user: {
				picture: {
					large: faker.image.avatar()
				},
			}
		};
	}
	
	componentDidMount() {
		// requestAnimationFrame(() => this.updateDate())
	}
	
	updateDate() {
		this.setState({date: moment().to(this.props.tweet.createdAt)});
		requestAnimationFrame(() => this.updateDate());
	}
	
	render() {
		const {tweet, likeTweet} = this.props;
		const {date, current_user} = this.state;
		
		const picture = current_user.picture.large;
		const username = tweet.username;
		const {text, likes = []} = tweet;
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
				<div className="likes"
				     onClick={() => likeTweet(tweet.id)}>
					{!likes.find(like => String(like) === String(fakeUser.uid))
						? <i className="fa fa-heart-o"/>
						: <i className="fa fa-heart" color={"red"}/>}
					<div>{likes.length}</div>
				</div>
			</div>
		</div>
	}
}

const mapDispatchToProps = dispatch => bindActionCreators({
	likeTweet
}, dispatch);

export default connect(null, mapDispatchToProps)(Tweet);