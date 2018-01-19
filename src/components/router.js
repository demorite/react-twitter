import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Main from '../screens/main'
import Notifications from '../screens/notifications'
import Messages from '../screens/messages'
import Profile from '../screens/profile'

class Router extends React.Component {
	render() {
		return <BrowserRouter>
			<Switch>
				<Route exact
				       path={"/"}
				       component={Main}/>
				<Route exact
				       path={"/notifications"}
				       component={Notifications}/>
				<Route exact
				       path={"/messages"}
				       component={Messages}/>
				<Route exact
				       path={"/profile"}
				       component={Profile}/>
			</Switch>
		</BrowserRouter>
	}
}

export default Router