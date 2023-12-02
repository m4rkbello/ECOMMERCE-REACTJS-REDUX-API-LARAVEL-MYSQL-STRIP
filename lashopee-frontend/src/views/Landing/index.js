import React from "react";
import CardCategory from "../../components/category/CategoryCard";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";

const Landing = props => {

    const{title} = props;
    useDocumentTitle(title);

    return(
        <CardCategory />
    );
};

export default Landing;

