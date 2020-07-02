import React from 'react'

const Profile = ({name, profileImage})=> {
    return (
        <>
            <li className="nav-item dropdown no-arrow">
                <a className="nav-link dropdown-toggle" href="/" id="userDropdown">
    <span className="mr-2 d-none d-lg-inline text-gray-600 small">{name}</span>
                    <img className="img-profile rounded-circle" src={profileImage} style={{width: "60"}} />
                </a>
            </li>
        </>
    )
}

export default Profile