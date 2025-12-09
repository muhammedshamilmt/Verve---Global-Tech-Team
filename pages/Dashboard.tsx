import React, { useState } from 'react';
import DashboardLayout from '../components/dashboard/DashboardLayout';
import DashboardOverview from '../components/dashboard/DashboardOverview';
import DashboardProjects from '../components/dashboard/DashboardProjects';
import DashboardSettings from '../components/dashboard/DashboardSettings';

interface DashboardPageProps {
  onNavigate: (page: string) => void;
}

const Dashboard: React.FC<DashboardPageProps> = ({ onNavigate }) => {
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

export default Dashboard;