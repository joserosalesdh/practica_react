import React from 'react'

const Box = ({title, paragraph, image}) => {
    return (
        <>
            <div className="col-lg-6 mb-4">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">{title}</h6>
                    </div>
                    <div className="card-body">
                        <div className="text-center">
                            <img className={image} style={{width: "25rem;"}} src="assets/images/product_dummy.svg" alt="dummy" />
                        </div>
                        <p>{paragraph}</p>
                        <a target="_blank" rel="nofollow" href="/">View product detail</a>
                    </div>
                </div>
			</div>
        </>
    )
}

export default Box