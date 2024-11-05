import React from "react";
import './index.css';

export default function Category({ categoryName,productCount,imgSrc }) {
    return (
        <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
            <a className="text-decoration-none" href="">
                <div className="cat-item d-flex align-items-center mb-4">
                    <div className="overflow-hidden" style={{ width: 100 + 'px', height: 100 + 'px' }}>
                        <img className="img-fluid" src={imgSrc} alt="" />
                    </div>
                    <div className="flex-fill pl-3">
                        <h6>{categoryName}</h6>
                        <small className="text-body">{productCount}</small>
                    </div>
                </div>
            </a>
        </div>
    );
}