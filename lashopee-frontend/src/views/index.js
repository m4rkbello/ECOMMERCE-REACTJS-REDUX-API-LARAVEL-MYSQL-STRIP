import React from "react";
import Header from "../components/shared/Header";
//not use
import CardCategory from "../components/category/CategoryCard";
import { Route, Routes } from 'react-router-dom'
import Landing from "./Landing";
import Cart from "./Cart";
import CategoryDetail from './Category';
import ProductDetail from './Product';
import Errors from "./NotFound";


const Views = () => {
    return (
        <>
          <Header />
           
            <div className="category my-4 container">
                <Routes>
                <Route
                    path="/" 
                    element={<Landing title="Landing Page" />}  
                />
                <Route
                    path="/cart" 
                    element={<Cart title="CART PAGE" />}  
                />
                <Route
                    path="/category/:id" 
                    element={<CategoryDetail title="CATEGORY DETAIL PAGE" />}  
                />
                <Route
                path="/product/:id" 
                element={<ProductDetail title="PRODUCT DETAIL PAGE" />}  
            />
            <Route
            path="/error" 
            element={<Errors title="ERROR PAGE" />}  
        />

     
         
       
                </Routes>
            </div>
        </>
    );
};

export default Views;








