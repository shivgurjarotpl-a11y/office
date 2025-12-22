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

import React, { useState,useEffect } from "react";
import "../css/Products.css";
import ProductImg from "../Components/ProductImg";
import Footer from "../Components/Footer";
import axios from "axios";
import ProductTypeSelector from "../Components/ProductTypeSelector";
import DataLoggers from "../Components/DataLoggers";
import Controllers from "../Components/Controllers";

const Products = () => {
  const [active, setActive] = useState("all");

  // const renderComponent = () => {
  //   switch (active) {
  //     case "DataLoggers ":
  //       return <DataLoggers />;
  //     case "Controllers ":
  //       return <Controllers />;
  //     case "VendingMachines ":
  //       return <DataLoggers />;
  //     default:
  //       return <DataLoggers />;
  //   }
  // };

  
const [Data,setData] = useState([]);
  
async function detailfetch(){
  
    const res = await axios.post('https://cspv.in/hpotpl/oxymora-web/apis/fetch_products.php',{
        type :active || 'all'
    },{
        headers : {"Content-Type":"application/json"}
    });
    
    
    console.log(res.data,"data");
    setData(res.data);
    // res.data.forEach((ele,idx) => {

    // });
    
}

useEffect(() => {
  
detailfetch();

},[active]);

  return (
    <>
      <ProductImg />
      <div className="product-contanior">
        <ProductTypeSelector active={active} setActive={setActive} />
        {/* <div style={{}}>{renderComponent()}</div> */}
        {/* {Data.map((ele,index) => { */}
          <DataLoggers Data={Data} /> 
        {/* // })} */}
        <Footer />
      </div>
    </>
  );
};

export default Products;
