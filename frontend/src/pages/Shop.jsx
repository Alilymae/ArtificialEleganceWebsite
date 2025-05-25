import React from "react";
import Featured from "../Components/Featured/Featured";

//COMPONENTS
import Shopheader from "../Components/Shopheader/Shopheader";
import Banner from "../Components/Banner/Banner";
import NewCollections from "../Components/NewCollections/NewCollections";

const Shop = () => {
  return (
    <>
      <Shopheader />
      <Featured />
      <Banner />
      <NewCollections />
    </>
  );
};

export default Shop;
