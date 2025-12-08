import React from 'react';
import { 
  Mail, 
  Terminal, 
  Calendar, 
  MoreHorizontal, 
  FileSpreadsheet, 
  Database,
  PieChart,
  MessageSquare,
  ChevronDown,
  LayoutGrid
} from 'lucide-react';

const DashboardPreview: React.FC = () => {
  return (
    <div className="relative w-full max-w-[700px] aspect-[1.1/1] md:aspect-[1.3/1] select-none scale-90 md:scale-100">
      
      {/* 
         LAYOUT GRID 
         Using absolute positioning percentages to match the reference composition precisely.
      */}

      {/* 1. Template Goals (Top Left/Center) */}
      <div 
        className="absolute top-[5%] left-[0%] w-[42%] z-20"
        style={{ animation: 'float 6s ease-in-out infinite' }}
      >
        <div className="bg-[#0b0d11]/80 backdrop-blur-xl border border-white/5 rounded-3xl p-5 shadow-2xl">
            <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-2">
                <span className="text-xs text-gray-400 font-medium">Template Goals</span>
                <ChevronDown size={12} className="text-gray-600" />
            </div>
            </div>
            
            <div className="space-y-4">
            <div className="flex items-center gap-3 bg-white/[0.02] p-2 rounded-xl border border-white/[0.02]">
                <div className="w-10 h-10 rounded-lg bg-[#2D1B21] flex items-center justify-center text-rose-500 shadow-inner">
                <LayoutGrid size={18} />
                </div>
                <div>
                <div className="text-lg font-bold text-white leading-none">64%</div>
                <div className="text-[9px] text-gray-500 font-medium mt-1">Template Marketing</div>
                </div>
            </div>
            
            <div className="flex items-center gap-3 bg-white/[0.02] p-2 rounded-xl border border-white/[0.02]">
                <div className="w-10 h-10 rounded-lg bg-[#291F15] flex items-center justify-center text-amber-500 shadow-inner">
                <MessageSquare size={18} />
                </div>
                <div>
                <div className="text-lg font-bold text-white leading-none">64%</div>
                <div className="text-[9px] text-gray-500 font-medium mt-1">SMS Marketing</div>
                </div>
            </div>
            </div>
        </div>
      </div>

      {/* 2. Dashboard Main (Top Right) */}
      <div 
        className="absolute top-[0%] right-[0%] w-[52%] z-10"
        style={{ animation: 'float 7s ease-in-out infinite 1s' }}
      >
        <div className="bg-[#0b0d11]/90 backdrop-blur-xl border border-white/5 rounded-3xl p-6 shadow-2xl">
            <div className="mb-6">
            <h3 className="text-xs text-gray-400 font-medium mb-4">Dashboard</h3>
            <div className="flex gap-2">
                <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-[#1a1d24] border border-white/5 text-[10px] font-medium text-gray-400">
                    <Calendar size={10} /> Date
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-[#1a1d24] border border-white/5 text-[10px] font-medium text-gray-400">
                    <Mail size={10} /> Mail
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-[10px] font-medium text-indigo-400 shadow-[0_0_10px_rgba(99,102,241,0.1)]">
                    <Terminal size={10} /> Console
                </div>
            </div>
            </div>

            <div className="bg-black/40 rounded-2xl p-4 border border-white/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-blue-500/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="text-[11px] font-medium text-gray-300 mb-1">Import CSV</div>
                <div className="text-[9px] text-gray-600 mb-4 font-medium">Lorem ipsum dolor sit amet.</div>
                
                <div className="w-full h-10 bg-[#15171b] rounded-lg border border-white/5 flex items-center px-3 gap-2">
                    <div className="w-16 h-1.5 bg-[#252830] rounded-full" />
                    <div className="w-4 h-1.5 bg-[#252830] rounded-full ml-auto" />
                </div>
                <div className="mt-2 w-full h-10 bg-[#15171b] rounded-lg border border-white/5 flex items-center px-3 opacity-50">
                    <div className="w-12 h-1.5 bg-[#252830] rounded-full" />
                </div>
            </div>
        </div>
      </div>

      {/* 3. Small Stats (Bottom Center-Left) */}
      <div 
        className="absolute top-[60%] left-[10%] w-[35%] z-30"
        style={{ animation: 'float 5s ease-in-out infinite 0.5s' }}
      >
         <div className="bg-[#0b0d11]/80 backdrop-blur-xl border border-white/5 rounded-3xl p-4 shadow-2xl flex items-center justify-between">
             <div className="space-y-3 w-full pr-4">
                <div className="flex gap-3 items-center">
                  <div className="w-0.5 h-4 bg-rose-500 rounded-full shadow-[0_0_8px_rgba(244,63,94,0.5)]"></div>
                  <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <div className="w-[60%] h-full bg-white/10 rounded-full"></div>
                  </div>
                </div>
                <div className="flex gap-3 items-center">
                  <div className="w-0.5 h-4 bg-blue-500 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.5)]"></div>
                  <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <div className="w-[40%] h-full bg-white/10 rounded-full"></div>
                  </div>
                </div>
                <div className="flex gap-3 items-center">
                  <div className="w-0.5 h-4 bg-verve-accent rounded-full shadow-[0_0_8px_rgba(94,234,212,0.5)]"></div>
                  <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <div className="w-[20%] h-full bg-white/10 rounded-full"></div>
                  </div>
                </div>
             </div>
             
             {/* 3D Icon Representation */}
             <div className="relative w-10 h-10 flex-shrink-0">
                 <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-purple-600 rounded-xl opacity-20 blur-md"></div>
                 <div className="absolute inset-0 flex items-center justify-center">
                     <div className="grid grid-cols-2 gap-1 rotate-12">
                         <div className="w-2 h-2 bg-rose-500 rounded-full shadow-[0_0_5px_rgba(244,63,94,0.8)]"></div>
                         <div className="w-2 h-2 bg-blue-500 rounded-full shadow-[0_0_5px_rgba(59,130,246,0.8)]"></div>
                         <div className="w-2 h-2 bg-verve-accent rounded-full shadow-[0_0_5px_rgba(94,234,212,0.8)]"></div>
                         <div className="w-2 h-2 bg-purple-500 rounded-full shadow-[0_0_5px_rgba(168,85,247,0.8)]"></div>
                     </div>
                 </div>
             </div>
         </div>
      </div>

      {/* 4. Storage Usage (Bottom Right) */}
      <div 
        className="absolute top-[55%] right-[5%] w-[45%] z-20"
        style={{ animation: 'float 8s ease-in-out infinite 1.5s' }}
      >
        <div className="bg-[#0b0d11]/90 backdrop-blur-xl border border-white/5 rounded-3xl p-5 shadow-2xl">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-8 rounded-full bg-[#1a1d24] flex items-center justify-center border border-white/5 shadow-inner">
              <Database size={12} className="text-gray-400" />
            </div>
            <span className="text-[11px] font-medium text-gray-200">Verve SaaS Template:</span>
          </div>
          
          <div className="w-full h-1.5 bg-[#15171b] rounded-full mb-3 overflow-hidden border border-white/5">
            <div className="w-[12%] h-full bg-gray-500 rounded-full" />
          </div>
          <div className="text-[9px] font-medium text-gray-500">
            8.2 GB out of 80 GB used.
          </div>
        </div>
      </div>

    </div>
  );
};

export default DashboardPreview;