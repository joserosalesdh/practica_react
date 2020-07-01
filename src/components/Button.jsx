import React from 'react'


const Buttom = ({name, property, icon}) =>{
	function tieneProperty(property) {
		if(property === undefined){
			return "";
		}
		else {
			return property
		}
	};
    return (
        <li className={"nav-item" + tieneProperty(property)}>
		<a className="nav-link collapsed" href="/">
			<i className={icon}></i> 
			<span>{name}</span>
		</a>
	</li>
    );
}

export default Buttom