import React, { useEffect } from "react";
import { connect } from "react-redux";
import { setCurrentCategory } from "../../redux/actions/Category";
import { useParams } from "react-router-dom";
import CategoryRequest from "../../services/request/Category";
import useLoading from "../../hooks/useLoading";
import CardCategory from "../../components/category/CategoryCard";

const CategoryDetail = (props) => {
  // destructure the data
  const { currentCategory, setCurrentCategory } = props;
  const [Loading, withLoading] = useLoading();

  const { id } = useParams();

  const handleGetACategory = async () => {
    try {
      const category = await withLoading(CategoryRequest.getACategory(id));
      setCurrentCategory(category?.data);
      console.log(category);
    } catch (error) {
      console.log(error);
    }
  };

  // use effect hook!
  useEffect(() => {
    handleGetACategory();
  }, []); // <-- Add an empty dependency array here

  console.log(id);
  return (
    <>
        {
            Loading && currentCategory ?
            <h4>Loading category...</h4>
            :
        
                <CardCategory category={currentCategory} showMore={false} />
          
        }
    </>
  );

};


// 1
const mapStateToProps = ({ category }) => {
  const { currentCategory } = category;
  return { currentCategory }; // <-- Return an object here
};

// 2
const mapDispatchToProps = {
  setCurrentCategory,
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryDetail);
