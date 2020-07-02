import React from 'react'

const AlertButton = ({number, dropdown, icon}) => {
    return (
        <>
            <li className="nav-item dropdown no-arrow mx-1">
                <a className="nav-link dropdown-toggle" href="/" id={dropdown}>
                    <i className={icon}></i>
    <span className="badge badge-danger badge-counter">{number}</span>
                </a>
            </li>
        </>
    )
}

export default AlertButton