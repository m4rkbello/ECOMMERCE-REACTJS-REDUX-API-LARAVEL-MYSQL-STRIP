import React from "react";
import Header from "../components/shared/Header";
//not use
import CardCategory from "../components/category/CategoryCard";
import { Route, Routes, Router } from 'react-router-dom'
import Landing from "./Landing";
import Cart from "./Cart";
import Category from './Category';
import Product from './Product';
import NotFound from "./NotFound";


const Views = () => {
    return (
        <div>
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
                    element={<Category title="CATEGORY DETAIL PAGE" />}  
                />
            

                <Route
                path="/product/:1" 
                element={<Product title="PRODUCT DETAIL PAGE" />}  
                 />
          
              
                    
                    <Route
                    path="/error" 
                    element={<NotFound title="ERROR PAGE" />}  
                />

     
         
       
                </Routes>
            </div>
        </div>
    );
};

export default Views;








