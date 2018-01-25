import React from 'react'
import {fakeUser} from "../utils/fakeUser";
import moment from "moment";

class ProfileSideBar extends React.Component {
	imgs = [];
	
	componentDidMount(){
		this.fullScreenImages()
	}
	
	render() {
		return <div className="profile_sidebar">
			<div className="name">{fakeUser.username}</div>
			<div className="username">@{fakeUser.email.split('@')[0]}</div>
			<div className="createdAt"><i className="fa fa-calendar"/> Inscription en {moment(fakeUser.createdAt).format("MMMM YYYY")}</div>
			<div className="photosandvideos">
				<div><i className="fa fa-image"/> Photos et vidéos</div>
				<div className="list">
					<div className="item"
					     ref={img => this.imgs.push(img)}
					     style={{backgroundImage: `url(https://picsum.photos/300/300/?image=2)`}}/>
					<div className="item"
					     style={{backgroundImage: `url(https://picsum.photos/300/300?image=3)`}}/>
					<div className="item"
					     style={{backgroundImage: `url(https://picsum.photos/300/300?image=4)`}}/>
					<div className="item"
					     style={{backgroundImage: `url(https://picsum.photos/300/300?image=5)`}}/>
				</div>
			</div>
		</div>
	}
	
	fullScreenImages() {
		this.imgs.map(img => {
			return img.addEventListener("click", function(e){
				const url = img.style.backgroundImage.replace('url(', '').replace(/\)$/,'').replace('"', "").replace('"', "");
				const image = new Image();
				image.src = url;
				image.style.position = "absolute";
				image.style.zIndex = 9999999999;
				image.style.width = "100vw";
				image.style.height = "100vh";
				image.style.top = 0;
				image.style.left = 0;
				image.addEventListener("click", function(){
					document.body.removeChild(image);
				})
				document.body.appendChild(image);
			})
		})
	}
}

export default ProfileSideBar