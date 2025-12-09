import React from 'react';
import HeroSection from '../components/HeroSection';
import StatsStrip from '../components/StatsStrip';
import FeaturesSection from '../components/FeaturesSection';
import StorySection from '../components/StorySection';
import SlackIntegrationSection from '../components/SlackIntegrationSection';
import GridFeaturesSection from '../components/GridFeaturesSection';
import PricingSection from '../components/PricingSection';

interface LandingProps {
  onNavigate: (page: string) => void;
}

const Landing: React.FC<LandingProps> = ({ onNavigate }) => {
  return (
    <>
      <HeroSection />
      <StatsStrip />
      <FeaturesSection />
      <StorySection />
      <SlackIntegrationSection />
      <GridFeaturesSection />
      <PricingSection onNavigate={onNavigate} />
    </>
  );
};

export default Landing;