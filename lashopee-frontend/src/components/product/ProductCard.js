import React from "react";


const ProductCard = props => {
    return(
        <div className="card">
        <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <p className="card-text"><b>1000</b></p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
        </div>
    );
};

export default ProductCard;