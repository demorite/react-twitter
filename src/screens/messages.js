import React from 'react';
import Header from '../components/header'

class Messages extends React.Component {
	
	render() {
		return <div className={"main"}>
			<Header {...this.props}/>
			{/* /notifications => notifs[] {id, post_id, type, username, target, text, createdAt}  */}
			{/* /profile => user {username, description, createdAt} + user's tweets */}
		</div>
	}
}

export default Messages;