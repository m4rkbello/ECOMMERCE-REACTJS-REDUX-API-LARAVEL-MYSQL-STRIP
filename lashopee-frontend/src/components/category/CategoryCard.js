
import React from "react";
import ProductCard from "../product/ProductCard";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { CategoryDefaultProps } from "../../data/CategoryDefaultProps";

const CardCategory = props => {

  const { category, showMore } = props;

    return(
        <div className="category my-4">
        <div className="d-flex justify-content-between align-items-center">
        <h4>{category?.name}</h4>
        {
          showMore && <Link to={`category/${category?.id}`}
          >
          More
          </Link>
        }
        </div>
        <div className="row">
          <div className="col-md-3">
        <ProductCard />
          </div>
        </div>
        
    </div>
    );
};


// CardCategory.PropTypes = {
//   category: PropTypes.object,
//   showMore: PropTypes.bool
// };


CardCategory.defaultProps = {
  category: CategoryDefaultProps,
  showMore: true
};


export default CardCategory;