import React from 'react';
import TopSection from '../components/TopSection';
import CustomHeader from '../components/CustomHeader';
import FeatureSection from '../components/FeatureSection';
import ContactSection from '../components/ContactSection';
import CustomFooter from '../components/CustomFooter';

const MainPage = () => {
  return (
    <main>
      <CustomHeader />
      <TopSection />
      <FeatureSection />
      <ContactSection />
      <CustomFooter />
    </main>
  );
};

export default MainPage;
