import React from 'react';
import { ArrowUpRight, ArrowDownRight, Users, CreditCard, Activity, Box } from 'lucide-react';
import ScrollReveal from '../ui/ScrollReveal';

const DashboardOverview: React.FC = () => {
  const stats = [
    { label: "Total Revenue", value: "$42,593.00", change: "+12.5%", isPositive: true, icon: CreditCard },
    { label: "Active Projects", value: "12", change: "+2", isPositive: true, icon: Box },
    { label: "Team Members", value: "24", change: "+4", isPositive: true, icon: Users },
    { label: "Bounce Rate", value: "4.2%", change: "-0.8%", isPositive: true, icon: Activity },
  ];

  return (
    <div className="space-y-8">
       {/* Welcome Banner */}
       <ScrollReveal>
           <div className="relative rounded-3xl bg-gradient-to-r from-verve-accent/20 to-blue-500/20 p-8 border border-white/10 overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-verve-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                <div className="relative z-10">
                    <h2 className="text-3xl font-bold text-white mb-2">Welcome back, John! 👋</h2>
                    <p className="text-gray-300 max-w-xl">
                        Here's what's happening with your projects today. You have <span className="text-verve-accent font-semibold">3 tasks</span> pending review.
                    </p>
                </div>
           </div>
       </ScrollReveal>

       {/* Stats Grid */}
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
           {stats.map((stat, i) => (
               <ScrollReveal key={i} delay={i * 0.1} className="bg-[#060709] border border-white/5 p-6 rounded-2xl hover:border-verve-accent/20 transition-all duration-300">
                   <div className="flex justify-between items-start mb-4">
                       <div className="w-10 h-10 rounded-xl bg-[#0F1115] border border-white/10 flex items-center justify-center">
                           <stat.icon size={18} className="text-gray-400" />
                       </div>
                       <div className={`flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full ${stat.isPositive ? 'bg-emerald-500/10 text-emerald-400' : 'bg-rose-500/10 text-rose-400'}`}>
                           {stat.isPositive ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />}
                           {stat.change}
                       </div>
                   </div>
                   <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                   <div className="text-xs text-gray-500">{stat.label}</div>
               </ScrollReveal>
           ))}
       </div>

       {/* Main Chart Section (Visual Approximation) */}
       <div className="grid lg:grid-cols-3 gap-8">
           <ScrollReveal delay={0.2} className="lg:col-span-2 bg-[#060709] border border-white/5 rounded-3xl p-8">
               <div className="flex justify-between items-center mb-8">
                   <h3 className="text-lg font-semibold text-white">Revenue Overview</h3>
                   <div className="flex gap-2">
                       {['1D', '1W', '1M', '1Y'].map(t => (
                           <button key={t} className={`px-3 py-1 rounded-lg text-xs font-medium ${t === '1M' ? 'bg-white/10 text-white' : 'text-gray-500 hover:text-white'}`}>
                               {t}
                           </button>
                       ))}
                   </div>
               </div>
               
               {/* CSS Bar Chart Visual */}
               <div className="h-64 flex items-end justify-between gap-2 md:gap-4">
                   {[35, 55, 40, 70, 50, 85, 60, 75, 55, 90, 65, 45].map((h, i) => (
                       <div key={i} className="w-full bg-[#0F1115] rounded-t-lg relative group">
                           <div 
                                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-verve-accent/20 to-verve-accent/80 rounded-t-lg transition-all duration-500 group-hover:to-verve-accent"
                                style={{ height: `${h}%` }}
                           />
                           {/* Tooltip */}
                           <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white text-black text-xs font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                               ${h}k
                           </div>
                       </div>
                   ))}
               </div>
               <div className="flex justify-between mt-4 text-xs text-gray-500 font-mono">
                   <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
                   <span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span>
               </div>
           </ScrollReveal>

           <ScrollReveal delay={0.3} className="bg-[#060709] border border-white/5 rounded-3xl p-8">
               <h3 className="text-lg font-semibold text-white mb-6">Recent Activity</h3>
               <div className="space-y-6">
                   {[
                       { text: "New project created", time: "2 min ago", color: "bg-blue-500" },
                       { text: "Meeting with team", time: "1h ago", color: "bg-purple-500" },
                       { text: "Invoice #402 paid", time: "3h ago", color: "bg-emerald-500" },
                       { text: "New user registered", time: "5h ago", color: "bg-orange-500" },
                       { text: "Server maintenance", time: "1d ago", color: "bg-rose-500" },
                   ].map((item, i) => (
                       <div key={i} className="flex items-start gap-4">
                           <div className={`w-2 h-2 rounded-full mt-2 ${item.color} shadow-[0_0_8px_rgba(255,255,255,0.3)]`} />
                           <div>
                               <div className="text-sm text-gray-300">{item.text}</div>
                               <div className="text-xs text-gray-600">{item.time}</div>
                           </div>
                       </div>
                   ))}
               </div>
               <button className="w-full mt-8 py-3 rounded-xl border border-white/10 text-sm text-gray-400 hover:text-white hover:bg-white/5 transition-colors">
                   View All Activity
               </button>
           </ScrollReveal>
       </div>
    </div>
  );
};

export default DashboardOverview;