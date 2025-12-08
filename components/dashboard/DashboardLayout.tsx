import React, { useState } from 'react';
import { 
  LayoutGrid, Folder, Settings, LogOut, Bell, Search, 
  Menu, X, Sparkles, ChevronDown, User 
} from 'lucide-react';

interface DashboardLayoutProps {
  children: React.ReactNode;
  activeTab: string;
  onTabChange: (tab: string) => void;
  onLogout: () => void;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ 
  children, 
  activeTab, 
  onTabChange,
  onLogout 
}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navItems = [
    { id: 'overview', label: 'Overview', icon: LayoutGrid },
    { id: 'projects', label: 'Projects', icon: Folder },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-[#020406] flex text-white font-sans overflow-hidden">
      
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed top-0 left-0 h-full w-64 bg-[#060709] border-r border-white/5 z-50 transition-transform duration-300 ease-in-out
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
         <div className="h-full flex flex-col">
             {/* Logo */}
             <div className="h-20 flex items-center px-6 border-b border-white/5">
                <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 flex items-center justify-center">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-verve-accent">
                            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="currentColor" fillOpacity="0.1"/>
                            <path d="M14 6C14 6 10 8 10 12C10 16 14 18 14 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                        </svg>
                    </div>
                    <span className="text-xl font-semibold tracking-tight text-white">Verve</span>
                </div>
             </div>

             {/* Navigation */}
             <div className="flex-1 py-8 px-4 space-y-2">
                 {navItems.map((item) => (
                     <button
                        key={item.id}
                        onClick={() => {
                            onTabChange(item.id);
                            setIsSidebarOpen(false);
                        }}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
                            activeTab === item.id 
                            ? 'bg-verve-accent/10 text-verve-accent' 
                            : 'text-gray-400 hover:text-white hover:bg-white/5'
                        }`}
                     >
                         <item.icon size={20} className={activeTab === item.id ? 'text-verve-accent' : 'text-gray-500 group-hover:text-white'} />
                         <span className="font-medium text-sm">{item.label}</span>
                         {activeTab === item.id && (
                             <div className="ml-auto w-1.5 h-1.5 rounded-full bg-verve-accent shadow-[0_0_8px_rgba(94,234,212,0.5)]" />
                         )}
                     </button>
                 ))}
             </div>

             {/* User Profile / Logout */}
             <div className="p-4 border-t border-white/5">
                 <div className="bg-[#0F1115] rounded-xl p-3 border border-white/5 flex items-center gap-3 mb-3">
                     <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-xs font-bold">
                         JD
                     </div>
                     <div className="flex-1 overflow-hidden">
                         <div className="text-sm font-medium text-white truncate">John Doe</div>
                         <div className="text-xs text-gray-500 truncate">Pro Plan</div>
                     </div>
                 </div>
                 <button 
                    onClick={onLogout}
                    className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-red-400 hover:bg-red-500/10 transition-colors text-sm font-medium"
                 >
                     <LogOut size={18} />
                     <span>Sign Out</span>
                 </button>
             </div>
         </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 lg:ml-64 flex flex-col min-h-screen">
          
          {/* Top Header */}
          <header className="h-20 border-b border-white/5 bg-[#020406]/80 backdrop-blur-xl sticky top-0 z-30 px-6 flex items-center justify-between">
              <div className="flex items-center gap-4">
                  <button 
                    onClick={() => setIsSidebarOpen(true)}
                    className="lg:hidden p-2 text-gray-400 hover:text-white"
                  >
                      <Menu size={24} />
                  </button>
                  <h1 className="text-xl font-semibold text-white capitalize hidden md:block">
                      {activeTab}
                  </h1>
              </div>

              <div className="flex items-center gap-4 lg:gap-6">
                  {/* Search */}
                  <div className="hidden md:flex items-center relative group">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-verve-accent transition-colors" size={16} />
                      <input 
                        type="text" 
                        placeholder="Search..." 
                        className="bg-[#0F1115] border border-white/10 rounded-full py-2 pl-10 pr-4 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-verve-accent/50 focus:ring-1 focus:ring-verve-accent/50 w-64 transition-all"
                      />
                  </div>

                  {/* Notifications */}
                  <button className="relative p-2 text-gray-400 hover:text-white transition-colors">
                      <Bell size={20} />
                      <div className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-verve-accent border-2 border-[#020406]"></div>
                  </button>
              </div>
          </header>

          {/* Page Content */}
          <div className="flex-1 p-6 lg:p-8 overflow-y-auto">
              <div className="max-w-7xl mx-auto">
                {children}
              </div>
          </div>
      </main>

    </div>
  );
};

export default DashboardLayout;