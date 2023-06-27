const Profile = () => {
  return(
    <div className="perfil">
				<img id="avatar" src="https://cdn-icons-png.flaticon.com/512/2920/2920072.png"></img>
				<h2>Elis Menezes</h2>
				<h3>Professora Senac</h3>
				<div className="status"><h2>Status:</h2> 
					<img id="status" src="https://www.colorpersonalitytest.org/static/colorpersonalitytest/images/cpt_images/angry.png"></img>
				</div>
				<button>Respire!</button>
		</div>
  );
}

export default Profile