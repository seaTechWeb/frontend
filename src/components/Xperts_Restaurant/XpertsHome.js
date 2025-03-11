import React from "react";
import { Routes, Route } from "react-router-dom";

import LandingPage from "./LandingPage"
import XpertsNavbar from "./XpertsNavbar";
import FoodOrdering from "./FoodOrdering";
import RestaurantService from "./RestaurantService";
import StripePricingTable from "./StripePricingTable";

function XpertsHome() {
    return (
        <>
            <XpertsNavbar />
            <div style={{marginTop:'160px'}}>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="FoodOrdering" element={<FoodOrdering />} />
                    <Route path="RestaurantService" element={<RestaurantService />} />
                    <Route path="Pricing" element={<StripePricingTable />} />
                </Routes>
            </div>
        </>
    );
}

export default XpertsHome;