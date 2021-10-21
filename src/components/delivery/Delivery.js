import React from "react";
import { restaurants } from "../../data/Restaurants";
import ExploreSection from "../common/exploreSection/ExploreSection";
import Filter from "../common/filters/Filter";
import "./Delivery.css";
import DeliveryCollection from "./deliveryCollections/DeliveryCollection";
import TopBrands from "./topBrands/TopBrands";

const deliveryFilters = [
  {
    id: 1,
    icon: <i className="fi fi-rr-settings-sliders absolute-center"></i>,
    title: "Filters",
  },
  {
    id: 2,
    title: "Rating: 4.0+",
  },
  {
    id: 3,
    title: "Safe and Hygienic",
  },
  {
    id: 4,
    title: "Pure Veg",
  },
  {
    id: 5,
    title: "Delivery Time",
    icon: <i className="fi fi-rr-apps-sort absolute-center"></i>,
  },
  {
    id: 6,
    title: "Great Offers",
  },
];

const Delivery = () => {
  return (
    <div>
      <div className="max-width">
        <Filter filterList={deliveryFilters} />
      </div>
      <DeliveryCollection />
      <TopBrands />
      <ExploreSection
        list={restaurants}
        collectionName="Delivery Restaurants in Banglore"
      />
    </div>
  );
};

export default Delivery;
