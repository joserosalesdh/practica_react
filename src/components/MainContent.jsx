import React from 'react';
import MiniBox from './MiniBox'
import MiniNav from './MiniNav'
import Box from './Box'
import CategoryBox from './CategoryBox'
import Footer from './Footer.jsx'

const MainContent = () => {
    let datos = [
        {
            name: "Products in Data Base" , 
			number: 135 ,
			border: "card border-left-primary shadow h-100 py-2",
            color: "text-xs font-weight-bold text-primary text-uppercase mb-1",
            icon: "fas fa-clipboard-list fa-2x text-gray-300"
        },
        {
            name: "Amount in products", 
			number: "$555.555",
			border: "card border-left-success shadow h-100 py-2",
            color: "text-xs font-weight-bold text-success text-uppercase mb-1",
            icon: "fas fa-dollar-sign fa-2x text-gray-300"
        },
        {
            name: "Users quantity", 
			number: 33,
			border: "card border-left-warning shadow h-100 py-2",
            color: "text-xs font-weight-bold text-warning text-uppercase mb-1",
            icon: "fas fa-user-check fa-2x text-gray-300"
        }
	];
    return (
		<div>
			<div id="content">	
				<MiniNav/>
				<div className="container-fluid">
					<div className="d-sm-flex align-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
					</div>
					<div className="row">
						{datos.map((dato, i) => {
							return <MiniBox key = {i} {...dato}/>
							})
						}
					</div>
					<div className="row">
						<Box
							title = "Last product in Data Dase"
							paragraph = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia inventore libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa exercitationem ratione?"
							image = "img-fluid px-3 px-sm-4 mt-3 mb-4"
						/>
						<CategoryBox
							title= "Categories in Data Base"
						/>
					</div>
				</div>
			</div>
			<Footer/>
		</div> 
    )
}

export default MainContent