import React, { useEffect } from "react";
import CardCategory from "../../components/category/CategoryCard";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import CategoryRequest from "../../services/request/Category";


const Landing = props => {

    const{title} = props;
    useDocumentTitle(title);

    useEffect(() => {
        const categories = CategoryRequest.getAllCategories();
        console.log(categories);
    }, []);

    return(
        <CardCategory />
    );
};

export default Landing;

