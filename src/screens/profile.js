import React from 'react';
import Header from '../components/header'
import ProfileTop from "../components/profile_top"
import ProfileSideBar from "../components/profile_sidebar"
import MyTweets from "../components/profile_my_tweets"

class Profile extends React.Component {
	
	render() {
		return <div className={"main"}>
			<Header {...this.props}/>
			<ProfileTop/>
			<div className="profile_container animated fadeIn">
				<div className="profile_wrapper">
					<ProfileSideBar/>
					<MyTweets/>
				</div>
			</div>
		</div>
	}
}

export default Profile;