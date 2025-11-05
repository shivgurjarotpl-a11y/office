import React from 'react';
import "../css/BlogSection.css";

const posts = [
  {
    title: 'How to Select Microcontrollers For IoT Projects',
    meta: 'February 22, 2024 · oxymora',
    excerpt: 'Selecting the right microcontroller (MCU) for your Internet of Things (IoT) project',
    img: 'https://cspv.in/image/oxymora_imgs/image/Gemini_Generated_Image_4.png',
    featured: false,
  },
  {
    title: 'Securing IoT: The Essential Role Of ISO 27001',
    meta: 'February 22, 2024 · oxymora',
    excerpt: 'ISO 27001 is an international standard that specifies a management system.',
    img: 'https://cspv.in/image/oxymora_imgs/image/Gemini_Generated_Image_2.png',
    featured: false,
  },
  {
    title: 'Apple’s Embedded Swift programming language supports ESP32-C6,',
    meta: 'April 30, 2024 · oxymora',
    excerpt: 'Apple has released a beta version of Embedded Swift that notably works with Espressif ESP32-C6.',
    img: 'https://cspv.in/image/oxymora_imgs/image/Gemini_Generated_Image_9.png',
    featured: false,
  },
    {
    title: 'Securing IoT: The Essential Role Of ISO 27001',
    meta: 'February 22, 2024 · oxymora',
    excerpt: 'ISO 27001 is an international standard that specifies a management system.',
    img: 'https://cspv.in/image/oxymora_imgs/image/Gemini_Generated_Image_5.png',
    featured: false,
  },
     {
    title: 'How to Select Microcontrollers For IoT Projects',
    meta: 'February 22, 2024 · oxymora',
    excerpt: 'Selecting the right microcontroller (MCU) for your Internet of Things (IoT) project',
    img: 'https://cspv.in/image/oxymora_imgs/image/Gemini_Generated_Image_7.png',
    featured: false,
  },
 {
    title: 'Apple’s Embedded Swift programming language supports ESP32-C6,',
    meta: 'April 30, 2024 · oxymora',
    excerpt: 'Apple has released a beta version of Embedded Swift that notably works with Espressif ESP32-C6.',
    img: 'https://cspv.in/image/oxymora_imgs/image/Gemini_Generated_Image_11.png',
    featured: false,
  },
 {
    title: 'Apple’s Embedded Swift programming language supports ESP32-C6, Raspberry Pi RP2040, STM32F7, nRF52840 microcontrollers',
    meta: 'February 22, 2024 · oxymora',
    excerpt: 'Apple has released a beta version of Embedded Swift that notably works with Espressif ESP32-C6 wireless RISC-V microcontroller, and the company also built a Matter sample based on ESP-IDF and ESP-Matter SDKs. ',
    img: 'https://cspv.in/image/oxymora_imgs/image/Gemini_Generated_Image_10.png',
    featured: true,
  },
  {
    title: 'Apple’s Embedded Swift programming language supports ESP32-C6,',
    meta: 'April 30, 2024 · oxymora',
    excerpt: 'Apple has released a beta version of Embedded Swift that notably works with Espressif ESP32-C6.',
    img: 'https://cspv.in/image/oxymora_imgs/image/Gemini_Generated_Image_11.png',
    featured: false,
  },
  {
    title: 'Apple’s Embedded Swift programming language supports ESP32-C6,',
    meta: 'April 30, 2024 · oxymora',
    excerpt: 'Apple has released a beta version of Embedded Swift that notably works with Espressif ESP32-C6.',
    img: 'https://cspv.in/image/oxymora_imgs/image/Gemini_Generated_Image_11.png',
    featured: false,
  },
  {
    title: 'Apple’s Embedded Swift programming language supports ESP32-C6,',
    meta: 'April 30, 2024 · oxymora',
    excerpt: 'Apple has released a beta version of Embedded Swift that notably works with Espressif ESP32-C6.',
    img: 'https://cspv.in/image/oxymora_imgs/image/Gemini_Generated_Image_11.png',
    featured: false,
  },
  {
    title: 'Apple’s Embedded Swift programming language supports ESP32-C6,',
    meta: 'April 30, 2024 · oxymora',
    excerpt: 'Apple has released a beta version of Embedded Swift that notably works with Espressif ESP32-C6.',
    img: 'https://cspv.in/image/oxymora_imgs/image/Gemini_Generated_Image_11.png',
    featured: false,
  },
   {
    title: 'Apple’s Embedded Swift programming language supports ESP32-C6, Raspberry Pi RP2040, STM32F7, nRF52840 microcontrollers',
    meta: 'February 22, 2024 · oxymora',
    excerpt: 'Apple has released a beta version of Embedded Swift that notably works with Espressif ESP32-C6 wireless RISC-V microcontroller, and the company also built a Matter sample based on ESP-IDF and ESP-Matter SDKs. ',
    img: 'https://cspv.in/image/oxymora_imgs/image/Gemini_Generated_Image_10.png',
    featured: true,
  },
  {
    title: 'Apple’s Embedded Swift programming language supports ESP32-C6,',
    meta: 'April 30, 2024 · oxymora',
    excerpt: 'Apple has released a beta version of Embedded Swift that notably works with Espressif ESP32-C6.',
    img: 'https://cspv.in/image/oxymora_imgs/image/Gemini_Generated_Image_11.png',
    featured: false,
  },
    {
    title: 'Securing IoT: The Essential Role Of ISO 27001',
    meta: 'February 22, 2024 · oxymora',
    excerpt: 'ISO 27001 is an international standard that specifies a management system.',
    img: 'https://cspv.in/image/oxymora_imgs/image/Gemini_Generated_Image_5.png',
    featured: false,
  },
  
];

function BlogSection() {
  return (
    <section className="blog-wrapper">
      <div className="blog-container">
        <p className="blog-label">Blogs</p>
        <h2 className="blog-title">Insights from the Internet of Things.</h2>

        <div className="blog-list">
          {posts.map((post, idx) => (
            <article
              key={idx}
              className={`blog-item${post.featured ? ' blog-item-featured' : ''}`}
              style={{ ['--i']: idx }}
            >
              <div className="blog-thumb">
                <img src={post.img} alt={post.title} />
              </div>

              <div className="blog-content">
                <div className="blog-meta">{post.meta}</div>
                <h3 className="blog-heading">{post.title}</h3>
                <p className="blog-excerpt">{post.excerpt}</p>
                <a className="blog-link" href="#">Read more →</a>
              </div>
            </article>
          ))}
        </div>

        <a className="blog-more-link" href="#">View  more articles →</a>
      </div>
    </section>
  );
}

export default BlogSection;
