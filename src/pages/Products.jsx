import React from 'react'
import ProductImg from '../Components/ProductImg'
import FusionCard from '../Components/FusionCard'
import "../css/Products.css";
import FeatureCard from '../Components/FeatureCard';
import InfoCard from '../Components/InfoCard';

const Products = () => {
  return (
    <div>
      <ProductImg/>
      <div className='product-contanior'>
      <FusionCard/>
      <FeatureCard/>
      <InfoCard/>
      </div>
    </div>
  )
}

export default Products