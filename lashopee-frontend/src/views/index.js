import React from "react";
import Header from "../components/shared/Header";
import CardCategory from "../components/category/CategoryCard";
import { Route, Routes } from 'react-router-dom'
import Landing from "./Landing";


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
                </Routes>
            </div>
        </>
    );
};

export default Views;








