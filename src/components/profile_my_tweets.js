import React from 'react'
import Tweets from "./tweets";
import {fakeUser} from "../utils/fakeUser";

class MyTweets extends React.Component {
	render() {
		return <Tweets uid={fakeUser.uid}/>
	}
}

export default MyTweets