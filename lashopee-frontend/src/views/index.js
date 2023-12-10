import React from "react";
import Header from "../components/shared/Header";
//not use
import CardCategory from "../components/category/CategoryCard";
import { Route, Routes } from 'react-router-dom'
import Landing from "./Landing";
import Cart from "./Cart";
import Category from './Category';



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
                    path="/category" 
                    element={<Category title="CATEGORY PAGE" />}  
                />
         
       
                </Routes>
            </div>
        </>
    );
};

export default Views;








