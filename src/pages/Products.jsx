// import React from 'react'
// import FusionCard from '../Components/FusionCard'
// import FeatureCard from '../Components/FeatureCard';
// import FeatureCard3 from '../Components/FeatureCard3';
// import FeatureCard4 from '../Components/FeatureCard4';
// import InfoCard from '../Components/InfoCard';
// import InfoCard4 from '../Components/InfoCard4 ';
// import ProductCategorySelector from '../Components/ProductCategorySelector';
// const Products = () => {
//   return (
//     <div>
//       <ProductImg/>
//       <div className='product-contanior'>
//       <ProductCategorySelector/>
//       <FusionCard/>
//       <FeatureCard/>
//       <InfoCard/>
//       <FeatureCard3/>
//       <InfoCard4/>
//       <FeatureCard4/>
//       <Footer/>
//       </div>
//     </div>
//   )
// }

// export default Products




import React, { useState } from "react";
import "../css/Products.css";
import ProductImg from '../Components/ProductImg'
import Footer from '../Components/Footer'

import ProductTypeSelector from "../Components/ProductTypeSelector";
import DataLoggers from "../Components/DataLoggers";
import Controllers from "../Components/Controllers";

const Products = () => {
  const [active, setActive] = useState("all");

  const renderComponent = () => {
    switch (active) {
      case "DataLoggers ":
        return <DataLoggers />;
      case "Controllers ":
        return <Controllers />;
      case "VendingMachines ":
        return <DataLoggers />;
      default:
        return <DataLoggers />;
    }
  };

  return (
    <>
         <ProductImg/>
      <div className='product-contanior'>
      <ProductTypeSelector active={active} setActive={setActive} />
      <div style={{ }}>
        {renderComponent()}
      </div>
         <Footer/>
         </div>
</>
   
 
  );
};

export default Products;
