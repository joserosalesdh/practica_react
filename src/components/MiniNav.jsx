import React from 'react';
import AlertButton from './AlertButton'
import Profile from './Profile'

const MiniNav = () => {
    let icons = [
        {
            dropdown: "alertsDropdown",
            icon: "fas fa-bell fa-fw",
            number: "3+"
        },
        {
            dropdown: "messagesDropdown",
            icon: "fas fa-envelope fa-fw",
            number: "7"
        }
    ]
    return (
        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
            <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                <i className="fa fa-bars"></i>
            </button>
            <ul className="navbar-nav ml-auto">
                
                {icons.map((icon, i) => {
                    return <AlertButton key = {i} {...icon}/>
                    })
                }

                <div className="topbar-divider d-none d-sm-block"></div>

                <Profile 
                    name= "Walter White"
                    profileImage = "assets/images/dummy-avatar.jpg"
                />

            </ul>
		</nav>
    )
}

export default MiniNav