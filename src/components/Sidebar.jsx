import React from 'react'
import Button from './Button'

const Sidebar = () => { 
	let datos = [
		{
			
			name: "Dashboard",
			property: "active",
			icon: "fas fa-fw fa-tachometer-alt"
		},
		{
			name: "Pages",
			icon: "fas fa-fw fa-folder"
		},
		{
			name: "Charts",
			icon: "fas fa-fw fa-chart-area"
		},
		{
			name: "Tables",
			icon: "fas fa-fw fa-table"
		}
	];
    return (
<ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
	<a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
		<div className="sidebar-brand-icon">
			<i className="fas fa-chart-line"></i>
		</div>
		<div className="sidebar-brand-text mx-3">Admin</div>
	</a>
	<hr className="sidebar-divider my-0" />

	{datos.map((dato, i) => {
		return <Button key = {i} {...dato}/>
	})}

	<hr className="sidebar-divider" />
	<div className="sidebar-heading">Actions</div>


	<hr className="sidebar-divider d-none d-md-block" />
</ul>
    );
}

export default Sidebar 