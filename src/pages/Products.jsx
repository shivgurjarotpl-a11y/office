import React from 'react'
import ProductImg from '../Components/ProductImg'
import FusionCard from '../Components/FusionCard'
import "../css/Products.css";
import FeatureCard from '../Components/FeatureCard';
import FeatureCard3 from '../Components/FeatureCard3';
import FeatureCard4 from '../Components/FeatureCard4';
import InfoCard from '../Components/InfoCard';
import InfoCard4 from '../Components/InfoCard4 ';
import Footer from '../Components/Footer'





const Products = () => {
  return (
    <div>
      <ProductImg/>
      <div className='product-contanior'>
      <FusionCard/>
      <FeatureCard/>
      <InfoCard/>
      <FeatureCard3/>
      <InfoCard4/>
      <FeatureCard4/>
      <Footer/>
      </div>
    </div>
  )
}

export default Products