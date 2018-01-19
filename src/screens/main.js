import React from 'react';
import Header from '../components/header'
import Tweets from '../components/tweets'

class Main extends React.Component {
	render() {
		return <div className={"main"}>
			<Header {...this.props}/>
			<Tweets/>
			{/* /notifications => notifs[] {id, post_id, type, username, target, text, createdAt}  */}
			{/* /profile => user {username, description, createdAt} + user's tweets */}
		</div>
	}
}

export default Main;