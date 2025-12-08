import React, { useState } from 'react';
import DashboardLayout from './dashboard/DashboardLayout';
import DashboardOverview from './dashboard/DashboardOverview';
import DashboardProjects from './dashboard/DashboardProjects';
import DashboardSettings from './dashboard/DashboardSettings';

interface DashboardPageProps {
  onNavigate: (page: string) => void;
}

const DashboardPage: React.FC<DashboardPageProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview': return <DashboardOverview />;
      case 'projects': return <DashboardProjects />;
      case 'settings': return <DashboardSettings />;
      default: return <DashboardOverview />;
    }
  };

  return (
    <DashboardLayout 
        activeTab={activeTab} 
        onTabChange={setActiveTab}
        onLogout={() => onNavigate('home')}
    >
        {renderContent()}
    </DashboardLayout>
  );
};

export default DashboardPage;