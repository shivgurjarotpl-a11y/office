import React from 'react'
import "../css/ProductImg.css";
const ProductImg = () => {
  return (
    <div className="pro-Container">
            <video
        src="https://cspv.in/image/oxymora_imgs/videos/video7.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="video-bg"
      />

      <h1 style={{zIndex : 99}}>Precision-Built IoT Solutions for Modern Industries </h1>
      <h2 style={{zIndex : 99}}>Discover devices engineered to meet today’s connectivity and automation needs. Each product is developed with a focus on quality, durability, and ease of integration.</h2>
    </div>
  )
}

export default ProductImg