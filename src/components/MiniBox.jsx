import React from 'react';

const MiniBox = ({name, icon, number, border, color}) =>{
    return (
        <div className="col-md-4 mb-4">
            <div className={border}>
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className={color}>{name}</div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">{number}</div>
                        </div>
                        <div className="col-auto">
                            <i className={icon}></i>
                        </div>
                    </div>
                </div>
            </div>
		</div>
    );
}

export default MiniBox;