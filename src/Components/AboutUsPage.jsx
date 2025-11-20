
import React from 'react';
import Hero from './Hero';
import CompanyOverview from './CompanyOverview';
import MissionVision from './MissionVision';
import Strengths from './Strengths';
import Timeline from './Timeline';
import Team from './Team';
import FooterCTA from './FooterCTA';

const AboutUsPage = () => {

  const heroData = {
    heading: 'Innovating the Future of IoT',
    description: 'Empowering connected devices with cutting-edge technology for smarter, safer worlds.',
    illustrationSrc: 'https://via.placeholder.com/600x400?text=IoT+Illustration' 
  };

  const overviewData = {
    text: 'Founded in 2015, our company specializes in IoT solutions that bridge the gap between hardware and software, enabling seamless automation.',
    imageSrc: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop' 
  };

  const missionVisionData = [
    { icon: 'Target', title: 'Mission', description: 'To revolutionize IoT by delivering secure, scalable solutions.' },
    { icon: 'Eye', title: 'Vision', description: 'A world where every device is intelligently connected.' }
  ];

  const strengthsData = [
    { icon: 'Radio', title: 'LoRa Connectivity', description: 'Long-range, low-power communication for remote devices.' },
    { icon: 'Cloud', title: 'Cloud Integration', description: 'Seamless data syncing and storage in the cloud.' },
    { icon: 'Zap', title: 'Smart Automation', description: 'AI-driven automation for efficient operations.' },
    { icon: 'Shield', title: 'Advanced Security', description: 'End-to-end encryption and threat protection.' },
    { icon: 'Activity', title: 'Precision Sensors', description: 'High-accuracy sensors for real-time monitoring.' }
  ];

  const timelineData = [
    { date: '2015', title: 'Founded', description: 'Started with a vision to connect the unconnected.' },
    { date: '2018', title: 'First IoT Patent', description: 'Innovated proprietary sensor technology.' },
    { date: '2020', title: 'Global Expansion', description: 'Launched solutions in 20+ countries.' },
    { date: '2023', title: 'AI Integration', description: 'Incorporated AI for predictive analytics.' }
  ];

  const teamData = [
    {
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      name: 'John Doe',
      role: 'CEO',
      bio: 'Expert in IoT innovation with 10+ years experience.',
      socials: { linkedin: '#', twitter: '#' }
    },
    {
      photo: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      name: 'Jane Smith',
      role: 'CTO',
      bio: 'Leading software development for connected ecosystems.',
      socials: { linkedin: '#', twitter: '#' }
    },
   
  ];

  const footerData = {
    message: 'Ready to innovate? Join our team or contact us today.',
    buttonText: 'Get in Touch',
    onClick: () => alert('Contact form or navigation here!')
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Hero {...heroData} />
      <CompanyOverview {...overviewData} />
      <MissionVision data={missionVisionData} />
      <Strengths data={strengthsData} />
      <Timeline data={timelineData} />
      <Team data={teamData} />
      <FooterCTA {...footerData} />
    </div>
  );
};

export default AboutUsPage;