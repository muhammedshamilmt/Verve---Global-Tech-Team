import React from 'react';
import { 
  Zap, Shield, Globe, Cpu, BarChart3, 
  Smartphone, Code2, Sparkles, ArrowRight,
  Check, Terminal, Lock, Server, Fingerprint, RefreshCw,
  GitBranch, Database, Command
} from 'lucide-react';
import StaggerText from './ui/StaggerText';
import ScrollReveal from './ui/ScrollReveal';

const FeaturesPage: React.FC = () => {
  return (
    <div className="w-full pt-8 pb-24 relative overflow-hidden">
      
      {/* Header */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center mb-20 relative z-10">
         <ScrollReveal>
             <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1A202C]/50 border border-verve-accent/20 backdrop-blur-sm mb-8">
                <Sparkles className="w-3 h-3 text-verve-accent fill-verve-accent" />
                <span className="text-[11px] font-semibold text-gray-200 tracking-wide uppercase">Verve Capabilities</span>
            </div>
         </ScrollReveal>
        
        <div className="text-5xl lg:text-7xl font-semibold tracking-tight leading-[1.1] mb-6">
            <StaggerText text="Everything you need to" className="text-white" />
            <br className="hidden lg:block"/>
            <ScrollReveal delay={0.3}>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-verve-accent via-white to-verve-accent opacity-90 animate-gradient">build faster.</span>
            </ScrollReveal>
        </div>
        
        <ScrollReveal delay={0.4}>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
                A complete suite of tools designed to transform how your team collaborates, builds, and ships software.
            </p>
        </ScrollReveal>
      </div>

      {/* Bento Grid Overview */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 mb-32">
        {/* Reduced row height from 300px to 240px to decrease section height */}
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6 auto-rows-[240px]">
            
            {/* Item 1: Real-time Analytics (Cloned Design) */}
            <ScrollReveal className="md:col-span-6 lg:col-span-8 row-span-2 rounded-[2rem] bg-[#050608] border border-white/5 p-8 relative overflow-hidden group hover:border-white/10 transition-colors">
                 {/* Background Gradient */}
                 <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-indigo-500/5 via-transparent to-transparent" />
                 
                 <div className="relative z-10 h-full flex flex-col justify-between">
                    <div>
                        <div className="w-10 h-10 rounded-lg bg-[#111318] border border-white/10 flex items-center justify-center mb-4 shadow-inner">
                            <BarChart3 className="text-indigo-400" size={20} />
                        </div>
                        <h3 className="text-2xl font-semibold text-white mb-2">Real-time Analytics</h3>
                        <p className="text-sm text-gray-400 max-w-sm leading-relaxed">
                            Track user engagement, system performance, and revenue metrics in real-time with our advanced dashboard.
                        </p>
                    </div>

                    {/* Chart Visualization */}
                    <div className="mt-6 w-full h-48 relative flex items-end justify-between gap-2 px-2">
                         {/* Grid Lines */}
                        <div className="absolute inset-0 border-t border-b border-white/5 flex flex-col justify-between pointer-events-none">
                            <div className="w-full h-px bg-white/5"></div>
                            <div className="w-full h-px bg-white/5"></div>
                            <div className="w-full h-px bg-white/5"></div>
                        </div>

                        {/* Bars (Purple Gradient) */}
                        {[20, 45, 30, 60, 40, 75, 55, 65, 45, 80, 50, 30].map((h, i) => (
                            <div 
                                key={i} 
                                className="w-full bg-gradient-to-t from-indigo-600/20 to-indigo-500/60 rounded-t-sm hover:from-indigo-500/40 hover:to-indigo-400/80 transition-all duration-300" 
                                style={{ height: `${h}%` }}
                            />
                        ))}
                        
                         {/* Smooth Curve Line */}
                         <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 100">
                             <path 
                                d="M0,80 C10,60 20,70 30,40 C40,60 50,25 60,45 C70,35 80,20 90,50 L100,70" 
                                fill="none" 
                                stroke="#818cf8" 
                                strokeWidth="0.8" 
                                className="drop-shadow-[0_0_4px_rgba(129,140,248,0.5)]"
                                vectorEffect="non-scaling-stroke"
                             />
                         </svg>

                         {/* Floating "Active Users" Card */}
                         <div className="absolute top-4 right-4 bg-[#0F1115] border border-white/10 p-3 rounded-xl shadow-2xl z-20 flex flex-col animate-[float_6s_ease-in-out_infinite]">
                             <span className="text-[10px] text-gray-500 font-medium mb-1">Active Users</span>
                             <div className="flex items-center gap-2">
                                 <span className="text-xl font-bold text-white tracking-tight">12,405</span>
                                 <span className="bg-emerald-500/10 text-emerald-400 text-[10px] font-bold px-1.5 py-0.5 rounded flex items-center gap-0.5">
                                    +12%
                                 </span>
                             </div>
                         </div>
                    </div>
                 </div>
            </ScrollReveal>

            {/* Item 2: Lightning Fast (Cloned Design) */}
            <ScrollReveal delay={0.1} className="md:col-span-6 lg:col-span-4 row-span-2 rounded-[2rem] bg-[#050608] border border-white/5 p-8 relative overflow-hidden group hover:border-white/10 transition-colors">
                <div className="relative z-10 h-full flex flex-col items-center justify-center text-center">
                    
                    {/* Glowing Icon Circle */}
                    <div className="mb-8 relative">
                        <div className="absolute inset-0 bg-verve-accent/20 blur-2xl rounded-full"></div>
                        <div className="w-16 h-16 rounded-full bg-[#0F1115] border border-white/10 flex items-center justify-center relative z-10 shadow-[0_0_20px_rgba(94,234,212,0.15)] group-hover:scale-110 transition-transform duration-500">
                            <Zap className="text-verve-accent fill-verve-accent" size={28} />
                        </div>
                        {/* Orbit ring */}
                        <div className="absolute inset-[-8px] border border-dashed border-white/10 rounded-full animate-[spin_12s_linear_infinite]"></div>
                    </div>
                    
                    <h3 className="text-2xl font-semibold text-white mb-2">Lightning Fast</h3>
                    <p className="text-gray-400 text-sm mb-1">Built on the edge.</p>
                    <p className="text-verve-accent font-mono text-sm font-medium mb-10">99.99% Uptime</p>
                    
                    {/* Vertical Bars Graphic */}
                    <div className="flex items-center justify-center gap-3 h-16 mb-8">
                        <div className="w-1 h-full bg-gradient-to-b from-transparent via-verve-accent/30 to-transparent rounded-full"></div>
                        <div className="w-1 h-3/4 bg-gradient-to-b from-transparent via-verve-accent/60 to-transparent rounded-full"></div>
                        <div className="w-1 h-full bg-gradient-to-b from-transparent via-verve-accent/40 to-transparent rounded-full"></div>
                        <div className="w-1 h-1/2 bg-gradient-to-b from-transparent via-verve-accent/20 to-transparent rounded-full"></div>
                    </div>

                    {/* Latency Badge */}
                    <div className="mt-auto px-4 py-1.5 rounded-full bg-[#0F1115] border border-verve-accent/20 text-verve-accent text-[11px] font-mono shadow-[0_0_10px_rgba(94,234,212,0.1)]">
                        ~12ms Latency
                    </div>
                </div>
            </ScrollReveal>

            {/* Item 3: Security - 4 cols */}
            <ScrollReveal delay={0.2} className="md:col-span-6 lg:col-span-4 rounded-[2rem] bg-[#050608] border border-white/5 p-8 relative overflow-hidden group">
                 <div className="relative z-10">
                     <div className="flex items-start justify-between mb-4">
                        <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center border border-emerald-500/10">
                            <Shield className="text-emerald-400" size={20} />
                        </div>
                        <span className="text-[10px] font-bold tracking-wider text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded border border-emerald-500/10">
                             SOC2 READY
                        </span>
                     </div>
                     <h3 className="text-xl font-medium text-white mb-2">Enterprise Security</h3>
                     <p className="text-sm text-gray-500 mb-6">End-to-end encryption for all your data at rest and in transit.</p>
                     
                     {/* Encryption Visual */}
                     <div className="w-full bg-[#0F1115] rounded-lg border border-white/5 p-3 flex items-center gap-3">
                         <div className="w-8 h-8 rounded bg-emerald-500/20 flex items-center justify-center">
                             <Lock size={14} className="text-emerald-400" />
                         </div>
                         <div className="space-y-1 flex-1">
                             <div className="h-1.5 w-24 bg-white/10 rounded-full"></div>
                             <div className="h-1.5 w-16 bg-white/5 rounded-full"></div>
                         </div>
                         <div className="text-[10px] text-emerald-500 font-mono">AES-256</div>
                     </div>
                 </div>

                 {/* Background decoration */}
                 <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl"></div>
            </ScrollReveal>

            {/* Item 4: Global - 4 cols */}
            <ScrollReveal delay={0.3} className="md:col-span-6 lg:col-span-4 rounded-[2rem] bg-[#050608] border border-white/5 p-8 relative overflow-hidden group">
                 {/* Map Dots Background */}
                 <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#3b82f6 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }}></div>
                 
                 <div className="relative z-10">
                     <div className="flex items-start justify-between mb-4">
                         <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center border border-blue-500/10">
                             <Globe className="text-blue-400" size={20} />
                         </div>
                     </div>
                     <h3 className="text-xl font-medium text-white mb-2">Global Network</h3>
                     <p className="text-sm text-gray-500">Deploy your application to 35+ regions in seconds.</p>
                     
                     {/* Connection Arcs */}
                     <div className="absolute bottom-0 right-0 w-24 h-24 opacity-40">
                         <div className="absolute bottom-4 right-4 w-2 h-2 bg-blue-500 rounded-full animate-ping"></div>
                         <svg className="absolute inset-0 w-full h-full" style={{ transform: 'rotate(-45deg)' }}>
                             <path d="M 10 100 Q 50 50 100 10" fill="none" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="4 4" />
                         </svg>
                     </div>
                 </div>
            </ScrollReveal>

            {/* Item 5: API - 4 cols */}
            <ScrollReveal delay={0.4} className="md:col-span-6 lg:col-span-4 rounded-[2rem] bg-[#050608] border border-white/5 p-8 relative overflow-hidden group">
                 <div className="flex items-start justify-between mb-4 relative z-10">
                     <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center border border-purple-500/10">
                         <Code2 className="text-purple-400" size={20} />
                     </div>
                 </div>
                 <div className="relative z-10">
                    <h3 className="text-xl font-medium text-white mb-2">Powerful API</h3>
                    <p className="text-sm text-gray-500 max-w-[150px]">Extensible GraphQL and REST APIs.</p>
                 </div>

                 {/* Code Snippet Visual */}
                 <div className="absolute -right-4 -bottom-4 bg-[#0F1115] border border-white/10 p-4 rounded-xl shadow-2xl w-48 transform -rotate-6 hover:rotate-0 transition-transform duration-300 z-0 opacity-80 group-hover:opacity-100">
                      <div className="flex gap-1.5 mb-2">
                        <div className="w-2 h-2 rounded-full bg-red-500/50" />
                        <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                        <div className="w-2 h-2 rounded-full bg-green-500/50" />
                      </div>
                      <div className="space-y-1 font-mono text-[9px] leading-relaxed">
                         <div className="text-purple-400">POST <span className="text-white">/v1/data</span></div>
                         <div className="text-gray-500">{`{`}</div>
                         <div className="pl-2 text-blue-400">"status"<span className="text-white">:</span> <span className="text-green-400">true</span></div>
                         <div className="text-gray-500">{`}`}</div>
                      </div>
                </div>
            </ScrollReveal>

            {/* Item 6: Mobile - 6 cols */}
            <ScrollReveal delay={0.5} className="md:col-span-6 lg:col-span-6 rounded-[2rem] bg-[#050608] border border-white/5 p-8 flex items-center justify-between relative overflow-hidden group">
                <div className="z-10 relative max-w-[50%]">
                     <div className="w-10 h-10 rounded-lg bg-rose-500/10 flex items-center justify-center mb-4 border border-rose-500/10">
                         <Smartphone className="text-rose-400" size={20} />
                     </div>
                     <h3 className="text-xl font-medium text-white mb-2">Mobile First</h3>
                     <p className="text-sm text-gray-500">Fully responsive components that look great on any device.</p>
                </div>
                
                {/* Visual: Stacked Phones */}
                <div className="absolute right-8 top-1/2 -translate-y-1/2 w-32 h-full flex items-center">
                    <div className="relative w-20 h-36 bg-[#0F1115] border-2 border-white/10 rounded-xl shadow-2xl transform rotate-12 translate-x-4 z-10 group-hover:rotate-6 transition-transform duration-500 flex flex-col p-2 overflow-hidden">
                        <div className="w-6 h-0.5 bg-white/10 rounded-full mx-auto mb-2"></div>
                        <div className="space-y-2">
                             <div className="h-6 bg-white/5 rounded w-full"></div>
                             <div className="flex gap-1">
                                <div className="h-6 bg-white/5 rounded w-1/3"></div>
                                <div className="h-6 bg-white/5 rounded w-2/3"></div>
                             </div>
                        </div>
                    </div>
                    <div className="absolute top-1/2 -translate-y-1/2 -translate-x-2 w-20 h-36 bg-[#1A1D24] border-2 border-white/5 rounded-xl shadow-xl transform -rotate-6 opacity-60 scale-95 z-0"></div>
                </div>
            </ScrollReveal>

            {/* Item 7: Integration - 6 cols */}
             <ScrollReveal delay={0.6} className="md:col-span-6 lg:col-span-6 rounded-[2rem] bg-[#050608] border border-white/5 p-8 flex items-center justify-between relative overflow-hidden group">
                <div className="z-10 relative max-w-[50%]">
                     <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center mb-4 border border-amber-500/10">
                         <Cpu className="text-amber-400" size={20} />
                     </div>
                     <h3 className="text-xl font-medium text-white mb-2">Seamless Integration</h3>
                     <p className="text-sm text-gray-500">Connects with your favorite tools: Slack, Linear, Notion.</p>
                </div>
                 
                 {/* Visual: Connector Nodes */}
                 <div className="absolute right-12 top-1/2 -translate-y-1/2 w-32 h-32 flex items-center justify-center">
                    <div className="relative z-10 w-10 h-10 rounded-xl bg-[#1A1D24] border border-white/10 flex items-center justify-center shadow-lg">
                        <Command className="text-white" size={18} />
                    </div>
                    
                    {/* Satellites */}
                    <div className="absolute inset-0 animate-[spin_10s_linear_infinite]">
                         <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-3 w-6 h-6 rounded-full bg-[#0F1115] border border-white/10 flex items-center justify-center shadow-lg">
                             <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                         </div>
                         <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-3 w-6 h-6 rounded-full bg-[#0F1115] border border-white/10 flex items-center justify-center shadow-lg">
                             <div className="w-1.5 h-1.5 rounded-full bg-rose-500"></div>
                         </div>
                    </div>
                    <div className="absolute inset-0 border border-white/5 rounded-full scale-125"></div>
                 </div>
            </ScrollReveal>
        </div>
      </div>

      {/* Deep Dive Section */}
      <section className="py-24 relative border-t border-white/5 bg-gradient-to-b from-[#020406] to-[#040608]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 space-y-32">
            
            {/* Feature 1: Developer Experience */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <ScrollReveal>
                    <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-8 border border-blue-500/20">
                        <Terminal className="text-blue-400" size={28} />
                    </div>
                    <div className="text-4xl lg:text-5xl font-semibold mb-6">
                        <StaggerText text="Developer Experience" /> <br/> 
                        <span className="text-gray-500">First.</span>
                    </div>
                    <p className="text-gray-400 text-lg leading-relaxed mb-8">
                        We've obsessed over every pixel and every line of code to ensure that your experience is seamless. From our CLI to our dashboard, everything is designed to get you out of the weeds and into the flow.
                    </p>
                    <ul className="space-y-4">
                        {['Zero-config deployments', 'Automatic HTTPS/SSL', 'Instant rollbacks', 'Preview Deployments'].map(item => (
                            <li key={item} className="flex items-center gap-3">
                                <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-500/30">
                                    <Check size={14} className="text-blue-400" />
                                </div>
                                <span className="text-gray-300 font-medium">{item}</span>
                            </li>
                        ))}
                    </ul>
                </ScrollReveal>
                <ScrollReveal delay={0.2} className="relative group">
                    {/* Abstract Code Editor Visual */}
                    <div className="rounded-2xl bg-[#0A0C10] border border-white/10 p-1 shadow-2xl relative overflow-hidden group-hover:border-blue-500/30 transition-colors duration-500">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent pointer-events-none" />
                        <div className="bg-[#0F1115] rounded-xl p-6 relative z-10">
                             <div className="flex gap-2 mb-6 border-b border-white/5 pb-4">
                                <div className="w-3 h-3 rounded-full bg-rose-500/20 border border-rose-500/30" />
                                <div className="w-3 h-3 rounded-full bg-amber-500/20 border border-amber-500/30" />
                                <div className="w-3 h-3 rounded-full bg-emerald-500/20 border border-emerald-500/30" />
                                <div className="ml-auto text-xs text-gray-500 font-mono">deployment.ts</div>
                            </div>
                            <div className="space-y-3 font-mono text-sm leading-relaxed">
                                <div className="flex gap-4"><span className="text-gray-600 select-none">1</span> <span><span className="text-purple-400">import</span> <span className="text-white">{`{ Verve }`}</span> <span className="text-purple-400">from</span> <span className="text-emerald-400">'@verve/sdk'</span>;</span></div>
                                <div className="flex gap-4"><span className="text-gray-600 select-none">2</span></div>
                                <div className="flex gap-4"><span className="text-gray-600 select-none">3</span> <span><span className="text-purple-400">const</span> <span className="text-blue-400">app</span> = <span className="text-purple-400">new</span> <span className="text-amber-400">Verve</span>({`{`});</span></div>
                                <div className="flex gap-4"><span className="text-gray-600 select-none">4</span> <span><span className="text-blue-400">app</span>.<span className="text-amber-400">deploy</span>({`{`}</span></div>
                                <div className="flex gap-4"><span className="text-gray-600 select-none">5</span> <span className="pl-4"><span className="text-white">region:</span> <span className="text-emerald-400">'us-east-1'</span>,</span></div>
                                <div className="flex gap-4"><span className="text-gray-600 select-none">6</span> <span className="pl-4"><span className="text-white">scaling:</span> <span className="text-blue-400">true</span>,</span></div>
                                <div className="flex gap-4"><span className="text-gray-600 select-none">7</span> <span className="pl-4"><span className="text-white">env:</span> <span className="text-white">process.env.NODE_ENV</span></span></div>
                                <div className="flex gap-4"><span className="text-gray-600 select-none">8</span> <span>{`}`}).<span className="text-amber-400">then</span>(() <span className="text-purple-400">=></span> {`{`}</span></div>
                                <div className="flex gap-4"><span className="text-gray-600 select-none">9</span> <span className="pl-4"><span className="text-white">console</span>.<span className="text-amber-400">log</span>(<span className="text-emerald-400">'🚀 Deployed!'</span>);</span></div>
                                <div className="flex gap-4"><span className="text-gray-600 select-none">10</span> <span>{`}`});</span></div>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </div>

            {/* Feature 2: Global Infrastructure */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <ScrollReveal className="order-2 lg:order-1 relative flex justify-center">
                    {/* Abstract Visual */}
                    <div className="w-[400px] h-[400px] relative flex items-center justify-center">
                        <div className="absolute inset-0 bg-verve-accent/5 rounded-full blur-[60px]" />
                        
                        {/* Orbit Rings */}
                        <div className="absolute w-full h-full rounded-full border border-dashed border-white/10 animate-[spin_60s_linear_infinite]" />
                        <div className="absolute w-[70%] h-[70%] rounded-full border border-white/5 animate-[spin_40s_linear_infinite_reverse]" />
                        
                        {/* Center Globe */}
                        <div className="relative z-10 w-32 h-32 rounded-full bg-[#0A0C10] border border-verve-accent/30 flex items-center justify-center shadow-[0_0_30px_rgba(94,234,212,0.1)]">
                            <Globe className="text-verve-accent" size={48} />
                        </div>

                        {/* Orbiting Nodes */}
                        <div className="absolute w-[100%] h-[100%] animate-[spin_20s_linear_infinite]">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 w-4 h-4 bg-[#0A0C10] border border-verve-accent rounded-full shadow-[0_0_10px_rgba(94,234,212,0.5)]"></div>
                        </div>
                        <div className="absolute w-[70%] h-[70%] animate-[spin_15s_linear_infinite_reverse]">
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-2 w-3 h-3 bg-[#0A0C10] border border-white rounded-full"></div>
                        </div>
                    </div>
                </ScrollReveal>
                <ScrollReveal delay={0.2} className="order-1 lg:order-2">
                    <div className="w-14 h-14 rounded-2xl bg-verve-accent/10 flex items-center justify-center mb-8 border border-verve-accent/20">
                        <Zap className="text-verve-accent" size={28} />
                    </div>
                    <div className="text-4xl lg:text-5xl font-semibold mb-6">
                        <StaggerText text="Global Edge" /> <br/> 
                        <span className="text-gray-500">Performance.</span>
                    </div>
                    <p className="text-gray-400 text-lg leading-relaxed mb-8">
                        Your users are everywhere, and so should your application. Our intelligent edge network routes requests to the nearest node, ensuring lightning-fast latency regardless of location.
                    </p>
                    <ul className="space-y-4">
                        {['35+ Global Regions', 'Smart Routing', '<50ms Latency', 'DDoS Mitigation'].map(item => (
                            <li key={item} className="flex items-center gap-3">
                                <div className="w-6 h-6 rounded-full bg-verve-accent/20 flex items-center justify-center border border-verve-accent/30">
                                    <Check size={14} className="text-verve-accent" />
                                </div>
                                <span className="text-gray-300 font-medium">{item}</span>
                            </li>
                        ))}
                    </ul>
                </ScrollReveal>
            </div>

            {/* Feature 3: Enterprise Security */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <ScrollReveal>
                    <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-8 border border-emerald-500/20">
                        <Lock className="text-emerald-400" size={28} />
                    </div>
                    <div className="text-4xl lg:text-5xl font-semibold mb-6">
                        <StaggerText text="Enterprise" /> <br/> 
                        <span className="text-gray-500">Security.</span>
                    </div>
                    <p className="text-gray-400 text-lg leading-relaxed mb-8">
                        Security isn't an afterthought—it's built into the core. From automated vulnerability scanning to granular access controls, we provide the tools you need to stay safe.
                    </p>
                    <ul className="space-y-4">
                        {['SOC2 Type II Certified', 'End-to-end Encryption', 'SAML/SSO Support', 'Audit Logs'].map(item => (
                            <li key={item} className="flex items-center gap-3">
                                <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center border border-emerald-500/30">
                                    <Check size={14} className="text-emerald-400" />
                                </div>
                                <span className="text-gray-300 font-medium">{item}</span>
                            </li>
                        ))}
                    </ul>
                </ScrollReveal>
                <ScrollReveal delay={0.2} className="relative flex justify-center">
                     {/* Security Scanner Visual */}
                    <div className="w-full max-w-md aspect-square bg-[#0A0C10] border border-white/10 rounded-3xl p-8 relative overflow-hidden group hover:border-emerald-500/30 transition-colors duration-500">
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:20px_20px]" />
                        
                        <div className="relative z-10 flex flex-col items-center justify-center h-full gap-6">
                            <div className="w-24 h-24 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center relative">
                                <Fingerprint size={48} className="text-emerald-400" />
                                <div className="absolute inset-0 rounded-full border border-emerald-500/50 animate-ping opacity-20" />
                            </div>
                            
                            <div className="space-y-2 w-full">
                                <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                                    <div className="h-full bg-emerald-500 w-[85%] rounded-full animate-pulse" />
                                </div>
                                <div className="flex justify-between text-xs font-mono">
                                    <span className="text-gray-500">Scanning...</span>
                                    <span className="text-emerald-400">Secure</span>
                                </div>
                            </div>
                            
                            <div className="grid grid-cols-2 gap-4 w-full mt-4">
                                <div className="bg-[#15171B] p-3 rounded-lg border border-white/5 flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-emerald-500" />
                                    <span className="text-xs text-gray-400 font-mono">DB_ENCRYPT</span>
                                </div>
                                <div className="bg-[#15171B] p-3 rounded-lg border border-white/5 flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-emerald-500" />
                                    <span className="text-xs text-gray-400 font-mono">FIREWALL</span>
                                </div>
                            </div>
                        </div>
                        
                        {/* Scanning Line */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent shadow-[0_0_20px_rgba(16,185,129,0.5)] animate-[scan_3s_ease-in-out_infinite]" />
                    </div>
                </ScrollReveal>
            </div>

        </div>
      </section>

      {/* Technical Specs Grid */}
      <section className="py-24 bg-[#0A0C10] border-y border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <ScrollReveal className="text-center mb-16">
                 <h2 className="text-3xl font-semibold text-white mb-4">Technical Specifications</h2>
                 <p className="text-gray-400">Built for scale, reliability, and performance.</p>
            </ScrollReveal>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    { label: 'Uptime SLA', value: '99.99%', icon: Server, desc: 'Guaranteed availability' },
                    { label: 'Latency', value: '<50ms', icon: Zap, desc: 'Global average response' },
                    { label: 'Compliance', value: 'SOC2', icon: Shield, desc: 'Type II Certified' },
                    { label: 'Support', value: '24/7', icon: RefreshCw, desc: 'Dedicated engineer support' },
                    { label: 'Requests', value: 'Unlimited', icon: Globe, desc: 'Autoscaling capabilities' },
                    { label: 'Build Time', value: '~45s', icon: GitBranch, desc: 'Average deployment time' },
                    { label: 'Storage', value: '5TB+', icon: Database, desc: 'Persistant volume limits' },
                    { label: 'Retention', value: '90 Days', icon: Fingerprint, desc: 'Log retention policy' },
                ].map((spec, i) => (
                    <ScrollReveal key={i} delay={i * 0.05} className="bg-[#020406] border border-white/5 p-6 rounded-xl hover:border-verve-accent/20 transition-colors">
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-sm text-gray-500">{spec.label}</span>
                            <spec.icon size={16} className="text-gray-600" />
                        </div>
                        <div className="text-2xl font-semibold text-white mb-1">{spec.value}</div>
                        <div className="text-xs text-gray-500">{spec.desc}</div>
                    </ScrollReveal>
                ))}
            </div>
        </div>
      </section>

      {/* CTA Section */}
      <ScrollReveal className="max-w-[1400px] mx-auto px-6 lg:px-12 mt-32">
          <div className="relative rounded-[3rem] bg-gradient-to-b from-[#0F1115] to-[#050608] border border-white/5 p-12 lg:p-24 text-center overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-verve-accent/10 via-transparent to-transparent opacity-30" />
              
              <div className="relative z-10 space-y-8">
                  <h2 className="text-3xl lg:text-5xl font-semibold text-white">Ready to start building?</h2>
                  <p className="text-gray-400 max-w-xl mx-auto text-lg">
                      Join thousands of developers who are building the future with Verve. Start your 14-day free trial today.
                  </p>
                  <div className="flex items-center justify-center gap-4 pt-4">
                      <button className="px-8 py-4 rounded-full bg-verve-accent text-black font-semibold hover:bg-verve-accent/90 transition-all hover:shadow-[0_0_20px_rgba(94,234,212,0.3)]">Get Started Now</button>
                      <button className="px-8 py-4 rounded-full bg-transparent border border-white/10 text-white font-medium hover:bg-white/5 transition-all flex items-center gap-2">
                          View Documentation <ArrowRight size={16} />
                      </button>
                  </div>
              </div>
          </div>
      </ScrollReveal>

      <style>
          {`
            @keyframes gradient {
                0% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
                100% { background-position: 0% 50%; }
            }
            @keyframes scan {
                0%, 100% { top: 0%; opacity: 0; }
                10% { opacity: 1; }
                90% { opacity: 1; }
                100% { top: 100%; opacity: 0; }
            }
            .animate-gradient {
                background-size: 200% 200%;
                animation: gradient 6s ease infinite;
            }
            @keyframes float {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-10px); }
            }
            @keyframes spin {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
            }
          `}
      </style>
    </div>
  );
};

export default FeaturesPage;