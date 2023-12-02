
import React from "react";
import ProductCard from "../product/ProductCard";


const CardCategory = props => {

    return(
        <div className="category my-4">
        <div className="d-flex justify-content-between align-items-center">
        <h4>Category Name</h4>
          <span>More</span>
        </div>
        <div className="row">
          <div className="col-md-3">
        <ProductCard />
          </div>
        </div>
        
    </div>
    );
};


export default CardCategory;