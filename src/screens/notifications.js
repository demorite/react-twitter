import React from 'react';
import Header from '../components/header'
import NotificationsList from '../components/notifications_list'

class Notifications extends React.Component {
	
	render() {
		return <div className={"main"}>
			<Header {...this.props}/>
			<NotificationsList/>
			{/* /notifications => notifs[] {id, post_id, type, username, target, text, createdAt}  */}
			{/* /profile => user {username, description, createdAt} + user's tweets */}
		</div>
	}
}

export default Notifications;