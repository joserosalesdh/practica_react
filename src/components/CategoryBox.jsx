import React from 'react'
import Category from './Category'

const CategoryBox = ({title}) => {
    let categories = [
        {
            title: "Cateogry 01"
        },
        {
            title: "Cateogry 02"
        },
        {
            title: "Cateogry 03"
        },
        {
            title: "Cateogry 04"
        },
        {
            title: "Cateogry 05"
        },
        {
            title: "Cateogry 06"
        },
        
    ]
    return (
        <>
            <div className="col-lg-6 mb-4">						
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">{title}</h6>
                    </div>
                    <div className="card-body">
                        <div className="row">    
                                {categories.map((category, i) => {
                                    return <Category key = {i} {...category}/>
                                    })
                                }   
                        </div>
                    </div>
                </div>
		    </div>
        </>
    )
}

export default CategoryBox