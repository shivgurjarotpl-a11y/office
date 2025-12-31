import React, { useEffect, useState } from 'react';

 const App = () => {
  const [inputText, setInputText] = useState(`Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem minima delectus quis molestias sunt, amet veritatis maiores, doloribus saepe, natus repellat 
      exercitationem aliquid veniam nisi labore ullam cupiditate. Mollitia impedit in amet itaque dolor odit maxime voluptatibus?`);

  const [translatedText, setTranslatedText] = useState('');
  const [targetLang, setTargetLang] = useState('en'); // 'en' for English, 'hi' for Hindi
  const [isTranslating, setIsTranslating] = useState(false);

  const handleTranslate = async () => {
    if (!inputText.trim()) {
      setTranslatedText('');
      return;
    }

    setIsTranslating(true);
    try {
      const response = await fetch('https://libretranslate.de/translate', {
        method: 'POST',
        body: JSON.stringify({
          q: inputText,
          source: 'auto',
          target: targetLang,
          format: 'text',
          // api_key: "" // Optional for public instance
        }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setTranslatedText(data.translatedText || 'Translation failed.');
    } catch (error) {
      console.error('Translation error:', error);
      setTranslatedText('Error: Could not translate. The service might be down or rate-limited.');
    } finally {
      setIsTranslating(false);
    }
  };

  // Optional: Auto-translate when target language changes
  useEffect(() => {
    if (inputText.trim()) {
      handleTranslate();
    }
  }, [targetLang]);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: '0 auto' }}>
      <h2>Text Translator</h2>

      <div style={{ marginBottom: '20px' }}>
        <label>
          <strong>Input Text:</strong>
          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            rows={8}
            style={{ width: '100%', marginTop: '8px', padding: '10px', fontSize: '16px' }}
            placeholder="Enter text to translate..."
          />
        </label>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <strong>Translate to:</strong>
        <div style={{ marginTop: '10px' }}>
          <button
            onClick={() => setTargetLang('en')}
            disabled={isTranslating}
            style={{
              padding: '10px 20px',
              marginRight: '10px',
              backgroundColor: targetLang === 'en' ? '#007bff' : '#f8f9fa',
              color: targetLang === 'en' ? 'white' : 'black',
              border: '1px solid #ccc',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            English
          </button>
          <button
            onClick={() => setTargetLang('hi')}
            disabled={isTranslating}
            style={{
              padding: '10px 20px',
              backgroundColor: targetLang === 'hi' ? '#007bff' : '#f8f9fa',
              color: targetLang === 'hi' ? 'white' : 'black',
              border: '1px solid #ccc',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            हिंदी (Hindi)
          </button>
        </div>
      </div>

      <div style={{ marginTop: '20px' }}>
        <strong>Translation:</strong>
        <p
          style={{
            minHeight: '100px',
            backgroundColor: '#f8f9fa',
            padding: '15px',
            borderRadius: '4px',
            marginTop: '8px',
            whiteSpace: 'pre-wrap',
            fontSize: '16px',
          }}
        >
          {isTranslating ? 'Translating...' : translatedText || 'Translation will appear here.'}
        </p>
      </div>
    </div>
  );
};

export default App







// import React from "react";
// import "../css/Project2.css";

// const Project1 = () => {
//   return (
//     <section className="case-study-wrapper">
//       <div className="case-study-container">
//         <h1>Project 1: Sound & Magnetic Field Detector (Pinpoint)</h1>

//       <div >
//         <img
//           src="https://cspv.in/hpotpl/oxymora-web/apis/product_image/1766144981_Unconfirmed 633430.crdownload"
//           alt="App Mockup"
//           height={"500"}
//           // className="project3-phone-img"
//         />
//       </div>

//         <div className="case-study-section">
//           <h2>Industry / Domain</h2>
//           <p>Defence Technology, Surveillance, Security & Monitoring Systems</p>
//         </div>

//         <div className="case-study-section">
//           <h2>Client Background</h2>
//           <p>
//             This project was developed as a specialised detection system aimed at
//             identifying and localising hidden electronic devices, unauthorised
//             equipment, or abnormal activity in sensitive environments. The
//             solution is suitable for defence agencies, security teams, research
//             organisations, and critical infrastructure operators.
//           </p>
//         </div>

//         <div className="case-study-section">
//           <h2>Problem Statement</h2>
//           <p>
//             In high-security and sensitive zones, detecting covert electronic
//             devices, abnormal sound signatures, or magnetic field disturbances is
//             a major challenge. Traditional inspection methods are time-consuming,
//             intrusive, and often inaccurate, especially in environments with
//             high electromagnetic noise.
//           </p>
//           <p>
//             The requirement was to build a compact, portable system capable of
//             accurately detecting sound patterns and magnetic field variations,
//             and providing precise indications for pinpointing the source.
//           </p>
//         </div>

//         <div className="case-study-section">
//           <h2>Oxymora Solution</h2>
//           <p>
//             Oxymora designed and developed <strong>Pinpoint</strong>, a Sound &
//             Magnetic Field Detection system that integrates advanced sensors,
//             signal processing algorithms, and embedded intelligence.
//           </p>
//           <p>
//             The system continuously monitors environmental sound and magnetic
//             field data, filters background noise, and identifies anomalies that
//             may indicate the presence of electronic devices, concealed objects,
//             or suspicious activity.
//           </p>
//         </div>

//         <div className="case-study-section">
//           <h2>Key Features & Capabilities</h2>
//           <ul>
//             <li>High-sensitivity sound detection for abnormal acoustic patterns</li>
//             <li>Magnetic field sensing for electronic components and metallic objects</li>
//             <li>Real-time signal processing and noise filtering</li>
//             <li>Portable and compact embedded design</li>
//             <li>Visual and alert-based indication</li>
//             <li>Configurable sensitivity for different environments</li>
//           </ul>
//         </div>

//         <div className="case-study-section">
//           <h2>Technologies Used</h2>

//           <h3>Hardware</h3>
//           <ul>
//             <li>High-sensitivity microphones</li>
//             <li>Magnetic field sensors (Hall-effect / magnetometer)</li>
//             <li>Microcontroller-based embedded system</li>
//             <li>Custom power management circuitry</li>
//           </ul>

//           <h3>Firmware</h3>
//           <ul>
//             <li>Embedded C / C++</li>
//             <li>Sensor drivers and calibration algorithms</li>
//             <li>Signal processing and filtering logic</li>
//             <li>Real-time event detection</li>
//           </ul>

//           <h3>Communication / Interface</h3>
//           <ul>
//             <li>On-device indicators (LED / buzzer / display)</li>
//             <li>Optional data logging and external interface support</li>
//           </ul>
//         </div>

//         <div className="case-study-section">
//           <h2>Development Scope</h2>
//           <ul>
//             <li>System architecture and hardware design</li>
//             <li>Sensor selection, integration, and calibration</li>
//             <li>Firmware development for signal processing</li>
//             <li>Prototype development and testing</li>
//             <li>Environmental validation and accuracy tuning</li>
//           </ul>
//         </div>

//         <div className="case-study-section">
//           <h2>Outcome / Impact</h2>
//           <ul>
//             <li>Faster and more reliable detection of hidden electronic sources</li>
//             <li>Reduced manual inspection effort</li>
//             <li>Improved accuracy and response time</li>
//             <li>Scalable platform for future enhancements</li>
//           </ul>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Project1;
