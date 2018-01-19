import React from 'react'

class ProfileSideBar extends React.Component {
	render() {
		return <div className="profile_sidebar">
			<div className="name">Dylan</div>
			<div className="username">@DemoriteDylan</div>
			<div className="createdAt"><i className="fa fa-calendar"/> Inscription en novembre 2014</div>
			<div className="photosandvideos">
				<div><i className="fa fa-image"/> Photos et vidéos</div>
				<div className="list">
					<div className="item"
					     style={{backgroundImage: `url(${"https://picsum.photos/300/300/?image=2"})`}}/>
					<div className="item"
					     style={{backgroundImage: `url(${"https://picsum.photos/300/300?image=3"})`}}/>
					<div className="item"
					     style={{backgroundImage: `url(${"https://picsum.photos/300/300?image=4"})`}}/>
					<div className="item"
					     style={{backgroundImage: `url(${"https://picsum.photos/300/300?image=5"})`}}/>
				</div>
			</div>
		</div>
	}
}

export default ProfileSideBar