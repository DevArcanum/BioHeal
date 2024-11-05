
import React from "react";
import Category from "../Category";
import './index.css';

export default function Categorys({CategoryList}) {
    return (
        <div className="container-fluid pt-5">
            <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4"><span className="bg-secondary pr-3">Categories</span></h2>
            <div className="row px-xl-5 pb-3">
                {
                    CategoryList.map(cat =>(
                        <Category categoryName={cat} productCount={10} imgSrc={'https://www.squash.io/wp-content/uploads/2023/08/tutorias_default_image.jpg'}/>
                    ))
                }
            </div>
        </div>
    );
}