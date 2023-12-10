import React from "react";
import { connect } from "react-redux";
import { setCurrentCategory } from "../../redux/actions";
import { Await, useParams } from "react-router-dom";
import CategoryRequest from "../../services/request/Category";
import useLoading from "../../hooks/useLoading";
import CategoryRequest from "../../services/request/Category";

const CategoryDetail = props => {
//distructure the data 
const { currentCategory, setCurrentCategory } = props;

const HandleGetACategory = async = () => {
    try{
        const category = await withLoading(CategoryRequest.getAcategory(id));
    }catch(error){
        console.log(error);
    }
}


const { id } = useParams();

    console.log(id);
    return (<h4>Category Page!</h4>)
}

//1
const mapStateToProps = ({ category }) => {
    const { currentCategory } = category;
    return currentCategory;
}

//2
const mapDispatchToProps = {
    setCurrentCategory,
}


export default connect(mapStateToProps, mapDispatchToProps)(CategoryDetail);