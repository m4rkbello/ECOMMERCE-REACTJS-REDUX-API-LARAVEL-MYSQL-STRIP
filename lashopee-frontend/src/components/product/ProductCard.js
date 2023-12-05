import React from "react";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { CategoryDefaultProps } from "../../data/CategoryDefaultProps";

const ProductCard = props => {

  const { product } = props;

    return(
        <div className="card">
        <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{product?.product_name}</h5>
          <p className="card-text">{product?.product_description}</p>
          <p className="card-text"><b>{product?.product_price.toFixed(2)}</b></p>
          <div className="d-grid gap-2">
            <button className="btn btn-primary">
            Add to Cart
            </button>
            <Link className="btn btn-secondary" to={`/product/${product.id}`}>View details</Link>
          </div>
        </div>
        </div>
    );
};

ProductCard.propTypes = {
  product: PropTypes.object,
  showMore: PropTypes.bool,
};

ProductCard.defaultProps = {
  product: CategoryDefaultProps?.products?.[0],
  showMore: true,
};




export default ProductCard;