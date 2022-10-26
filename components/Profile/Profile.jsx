import React from "react";
import "./Profile.css"
function Profile(){
    return(
        <div className="Profile">

            <img src="/Images\share.svg" alt="" id="share_btn"/>
            <img src="/Images\profile.jpg" alt="" id="profile__img"/>
            <p id="twitter">Esinnation</p>
            <p id="slack">Esinnation</p>
        </div>
    )
}

export default Profile