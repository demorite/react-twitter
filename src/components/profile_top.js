import React from 'react'

class ProfileTop extends React.Component {
	render() {
		return <div className="profile_top animated fadeIn"
		            style={{backgroundImage: `url(https://picsum.photos/1920/500?id=3)`}}>
			<div className="picture_container">
				<div className="picture"
				     style={{
					     backgroundImage: `url(https://picsum.photos/300/300)`
				     }}/>
			</div>
			<div className="infos_container">
				<div className="infos_bar">
					<div className="infos">
						<div>
							<div>Tweets</div>
							<div>7</div>
						</div>
						<div>
							<div>Abonnements</div>
							<div>6</div>
						</div>
						<div>
							<div>J'aime</div>
							<div>1</div>
						</div>
						<div>
							<div>Listes</div>
							<div>0</div>
						</div>
						<div>
							<div>Moments</div>
							<div>0</div>
						</div>
					</div>
					<div className="edit_profile">
						<div className="edit">Editer le profil</div>
					</div>
				</div>
			</div>
		</div>
	}
}

export default ProfileTop