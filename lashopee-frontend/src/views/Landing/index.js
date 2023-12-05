import React, { useEffect } from "react";
import { connect } from "react-redux";
import CardCategory from '../../components/category/CategoryCard'
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import CategoryRequest from "../../services/request/Category";
import { setCategories } from "../../redux/actions";
import useLoading from "../../hooks/useLoading";

const Landing = (props) => {
  const { title, setCategories, categories } = props;
  const [Loading, withLoading] = useLoading();
  useDocumentTitle(title);

  const getCategories = async () => {
    try {
      const category = await withLoading(CategoryRequest.getAllCategories());
      setCategories(category?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div>
      {Loading ? (
        "Loading Categories and Products"
      ) : categories?.length > 0 ? (
        categories.map((category) => (
          <CardCategory key={category?.id} category={category} />
        ))
      ) : (
        !Loading && <h4>No Category Available!</h4>
      )}
    </div>
  );
};

const mapStateToProps = ({ category }) => {
  const { categories } = category;
  return { categories };
};

const mapDispatchToProps = {
  setCategories,
};

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
