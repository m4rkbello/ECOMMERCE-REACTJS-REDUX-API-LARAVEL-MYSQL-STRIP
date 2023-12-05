import React from "react";
import ProductCard from "../product/ProductCard";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { CategoryDefaultProps } from "../../data/CategoryDefaultProps";

const CardCategory = (props) => {
  const { category, showMore } = props;

  return (
    <div className="category my-4">
      <div className="d-flex justify-content-between align-items-center">
        <h4>{category?.name}</h4>
        {showMore && category?.products?.length > 0 &&
          (
            <Link to={`category/${category?.id}`}>
              More
            </Link>
          )
        }
      </div>
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {category?.products?.length > 0 ? (
          category.products.map((product) => (
            <div className="col" key={product?.id}>
              <ProductCard
                title={product.title}
                description={product.description}
                imageSrc={product.imageSrc}
                price={product.price}
              />
            </div>
          ))
        ) : (
          <h4>No Products available!</h4>
        )}
      </div>
    </div>
  );
};

CardCategory.propTypes = {
  category: PropTypes.object,
  showMore: PropTypes.bool,
};

CardCategory.defaultProps = {
  category: CategoryDefaultProps,
  showMore: true,
};

export default CardCategory;
