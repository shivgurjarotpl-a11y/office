// import React from 'react';
// import '../css/Footer.css';
// import { FaFacebookF, FaInstagram, FaXTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa6';

// const Footer = () => {
//   return (
//     <>
//     <footer className="footer">
       
//       <div className="footer-top">
//         <div className="footer-logo-address">
//           <img src="/oxymora_logo (1).png" alt="Foxconn Logo" className="footer-logo" />
//           <p>
//             271,Lower Ground Floor, 2nd, Mahavir Nagar, Maharani Farm, Phase-II, Durgapura, Jaipur, Rajasthan 302018 <br />
           
//           </p>
//         </div>

//         <div className="footer-links">
//           <div>
//             <h4>About</h4>
//             <ul>
//               <li>Vision and Mission</li>
//               <li>Overview</li>
//               <li>Key Milestones</li>
//               <li>Global Footprint</li>
//               <li>Advocacy and Promotion</li>
//             </ul>
//           </div>

//           <div>
//             <h4>Services and Products</h4>
//             <ul>
//               <li>Event Highlights</li>
//               <li>Development Strategy and Blueprint</li>
//               <li>R&D and Technology</li>
//             </ul>
//           </div>

//           {/* <div>
//             <h4>R&D and Technology</h4>
//             <ul>
//               <li>Hon Hai Research Institute</li>
//               <li>MIH Consortium</li>
//             </ul>
//           </div> */}

//           <div>
//             <h4>Press Center</h4>
//             <ul>
//               <li>News</li>
//               {/* <li>Events</li> */}
//               <li>Corporate Events</li>
//               {/* <li>Factory Tour</li> */}
//               <li>Media Center</li>
//             </ul>
//           </div>

//           <div>
//             <h4>Investor Relations</h4>
//             <ul>
//               <li>Leadership Vision</li>
//               <li>Calendar</li>
//               <li>Investor Meetings and Roadshows</li>
//               <li>Financials</li>
//               <li>Shareholders Meeting</li>
//               <li>FAQ</li>
//               <li>Contacts</li>
//               <li>Subscription Center</li>
//             </ul>
//           </div>

//           <div>
//             <h4>Corporate Sustainability</h4>
//             <ul>
//               {/* <li>CSR Overview</li> */}
//               {/* <li>Our Focuses</li> */}
//               <li>Implementation of the Sustainable Development</li>
//               <li>Stakeholders</li>
//               <li>Resources</li>
//               {/* <li>Foxconn Education Foundation</li> */}
//             </ul>
//           </div>

//           {/* <div>
//             <h4>Careers</h4>
//           </div> */}

//           <div>
//             <h4>Contact Us</h4>
//             <ul>
//               <li>+91 7060828710</li>
//               <li style={{
//                 display:"flex",
//                 gap : "2rem",
//                 flexDirection: ""
//               }}>
//                 <FaFacebookF />
//                 <FaInstagram />
//                 <FaXTwitter />
//                 <FaLinkedinIn />
//                 <FaYoutube />
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* <div className="footer-social">
//           <FaFacebookF />
//           <FaInstagram />
//           <FaXTwitter />
//           <FaLinkedinIn />
//           <FaYoutube />
//         </div> */}
//       </div>

//       <div className="footer-bottom">
//         <p>© 2025 OTPL. All rights reserved.</p>
//         <div className="footer-policy">
//           <a href="#">Legal Notice & Trademark Info</a>
//           <a href="#">Privacy Policy</a>
//           <a href="#">Cookies Policy</a>
//           <a href="#">Sitemap</a>
//         </div>
//       </div>
//     </footer>
//     </>
//   );
// };

// export default Footer;



import React from "react";



import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  
  return (
    <footer
      style={{
        backgroundColor: "#000",
        color: "#fff",
        width: "100%",
        fontFamily: "Arial, sans-serif",
      }}
    >

      <style>{`
        #topdiv {
          position: relative;
          background: #0b4dbb; 
          padding-top: 50px;
          margin-top: 100px;
        }
        #topdiv::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 85px; 
          border-radius: 0 0 50% 50%; 
          background-color: #000; 
          transform: translateY(-50px); 
        }
      `}</style>
    <div id="topdiv"
        // style={{
        //   backgroundColor: "#0b4dbb",
        //   textAlign: "center",
        //   padding: "12px",
        //   fontSize: "14px",
        // }}
      />

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          padding: "40px 60px",
          gap: "40px",
        }}
      >
        <div style={{ minWidth: "200px" }}>
          <h2
            style={{
              margin: 0,
              color: "#1e90ff",
              fontWeight: "bold",
              letterSpacing: "1px",
              display : "flex",
              flexDirection : "column"
            }}
          >
          <img src="/oxymora_logo (1).png" alt="Foxconn Logo" className="footer-logo" style={{"height":"100px", "width":"300px"}}/>
          </h2>
          <p style={{ marginTop: "10px", lineHeight: "1.6", textAlign : "center" }}>
            We Will Become <br /> Your CTO
          </p>
        </div>

        <div
          style={{
            width: "2px",
            backgroundColor: "#fff",
            height: "160px",
          }}
        />

        <div>
          <h4 style={{ marginBottom: "12px", fontSize: "2rem" }}>Menu</h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {[
              "About Us",
              "Services",
              "Products",
              "Blog",
              "Portfolio",
              "Career",
            ].map((item) => (
              <li key={item} style={{ marginBottom: "6px" }}>
                {item}
              </li>
            ))}
          </ul>
        </div>


        <div>
          <h4 style={{ marginBottom: "12px", fontSize : "2rem" }}>Contact us</h4>
          <p style={{ margin: "4px 0" }}>info@oxymoratechnology.com</p>
          <p style={{ margin: "4px 0" }}>+91 7060828710</p>

          <div
            style={{
              display: "flex",
              gap: "16px",
              marginTop: "15px",
              fontSize: "34px",
              cursor: "pointer",
            }}
          >
            <FaYoutube />
            <FaInstagram />
            <FaWhatsapp />
            <FaFacebookF />
            <FaLinkedinIn />
          </div>
        </div>


        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d889.9026641907747!2d75.78103296963486!3d26.852333195041155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5bf16ff1419%3A0x8923893c79ad932d!2sRST%20Bank!5e0!3m2!1sen!2sin!4v1768818467331!5m2!1sen!2sin"
            title="Location"
            style={{
              width: "280px",
              height: "200px",
              border: "0",
              borderRadius: "6px",
              marginRight : "2rem"
            }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div
        style={{
          backgroundColor: "#0b4dbb",
          textAlign: "center",
          padding: "12px",
          fontSize: "14px",
        }}
      >
        All Copyrights! Reserved By Oxymora Technology
      </div>
    </footer>
  );
};

export default Footer;
