import React from 'react'
import {Link} from 'react-router-dom';

class Header extends React.Component {
	render() {
		const {location} = this.props;
		const {pathname} = location;
		
		return <div className="header">
			<div className="navigation">
				<div className="actions">
					<Link to={"/"}
					      className={`home ${pathname === "/" && "active"}`}>
						<i className="fa fa-home"/>
						<div>Accueil</div>
					</Link>
					<Link to={"/notifications"}
					      className={`notifications ${pathname === "/notifications" && "active"}`}>
						<i className="fa fa-bell-o"/>
						<div>Notifications</div>
					</Link>
					<Link to={"/messages"}
					      className={`messages ${pathname === "/messages" && "active"}`}>
						<i className="fa fa-envelope-o"/>
						<div>Messages</div>
					</Link>
				</div>
				<Link to={"/"}
				      className="logo">
					<i className={"fa fa-twitter"}/>
				</Link>
				<div className="profile">
					<div className="search">
						<input type="search"
						       placeholder={"Rechercher sur twitter"}/>
						<i className={"fa fa-search"}/>
					</div>
					<Link to={"/profile"}
					      className="user">
						<i className="fa fa-user"/>
					</Link>
					<div className="tweeter">
						<div>Tweeter</div>
					</div>
				</div>
			</div>
		</div>
	}
}

export default Header;