import React from 'react';
import { User, Bell, Shield, CreditCard, Save } from 'lucide-react';
import Button from '../ui/Button';
import ScrollReveal from '../ui/ScrollReveal';

const DashboardSettings: React.FC = () => {
  return (
    <div className="max-w-4xl space-y-8">
        <div>
            <h2 className="text-2xl font-semibold text-white">Settings</h2>
            <p className="text-gray-400 text-sm mt-1">Manage your account preferences.</p>
        </div>

        <div className="grid gap-8">
            {/* Profile Section */}
            <ScrollReveal className="bg-[#060709] border border-white/5 rounded-2xl p-8">
                <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
                    <User size={20} className="text-verve-accent" /> Profile Information
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                     <div className="space-y-1.5">
                        <label className="text-xs font-medium text-gray-400 ml-1">First Name</label>
                        <input type="text" defaultValue="John" className="w-full bg-[#0F1115] border border-white/10 rounded-xl px-4 py-3 text-white focus:border-verve-accent/50 focus:ring-1 focus:ring-verve-accent/50 focus:outline-none transition-all" />
                    </div>
                    <div className="space-y-1.5">
                        <label className="text-xs font-medium text-gray-400 ml-1">Last Name</label>
                        <input type="text" defaultValue="Doe" className="w-full bg-[#0F1115] border border-white/10 rounded-xl px-4 py-3 text-white focus:border-verve-accent/50 focus:ring-1 focus:ring-verve-accent/50 focus:outline-none transition-all" />
                    </div>
                    <div className="space-y-1.5 md:col-span-2">
                        <label className="text-xs font-medium text-gray-400 ml-1">Email Address</label>
                        <input type="email" defaultValue="john.doe@verve.com" className="w-full bg-[#0F1115] border border-white/10 rounded-xl px-4 py-3 text-white focus:border-verve-accent/50 focus:ring-1 focus:ring-verve-accent/50 focus:outline-none transition-all" />
                    </div>
                    <div className="space-y-1.5 md:col-span-2">
                        <label className="text-xs font-medium text-gray-400 ml-1">Bio</label>
                        <textarea rows={3} defaultValue="Senior Product Designer based in San Francisco." className="w-full bg-[#0F1115] border border-white/10 rounded-xl px-4 py-3 text-white focus:border-verve-accent/50 focus:ring-1 focus:ring-verve-accent/50 focus:outline-none transition-all resize-none" />
                    </div>
                </div>
                
                <div className="mt-8 flex justify-end">
                    <Button className="shadow-[0_0_20px_rgba(94,234,212,0.15)]">
                        <Save size={16} className="mr-2" /> Save Changes
                    </Button>
                </div>
            </ScrollReveal>

            {/* Notifications */}
            <ScrollReveal delay={0.1} className="bg-[#060709] border border-white/5 rounded-2xl p-8">
                <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
                    <Bell size={20} className="text-blue-400" /> Notifications
                </h3>
                
                <div className="space-y-6">
                    {[
                        "Email me when a new project is created",
                        "Email me when a task is assigned to me",
                        "Email me about product updates and news"
                    ].map((item, i) => (
                        <div key={i} className="flex items-center justify-between py-2">
                            <span className="text-gray-300 text-sm">{item}</span>
                            <div className="relative inline-block w-12 h-6 transition duration-200 ease-in-out rounded-full cursor-pointer bg-verve-accent/20">
                                <span className={`absolute left-0 inline-block w-6 h-6 transform translate-x-6 bg-verve-accent rounded-full shadow transition-transform duration-200 ease-in-out`}></span>
                            </div>
                        </div>
                    ))}
                </div>
            </ScrollReveal>

            {/* Billing */}
             <ScrollReveal delay={0.2} className="bg-[#060709] border border-white/5 rounded-2xl p-8">
                <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
                    <CreditCard size={20} className="text-purple-400" /> Billing
                </h3>
                <div className="bg-[#0F1115] rounded-xl p-4 border border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-8 bg-white/10 rounded-md"></div>
                        <div>
                            <div className="text-sm font-medium text-white">Visa ending in 4242</div>
                            <div className="text-xs text-gray-500">Expiry 12/2025</div>
                        </div>
                    </div>
                    <button className="text-sm text-verve-accent hover:underline">Edit</button>
                </div>
            </ScrollReveal>
        </div>
    </div>
  );
};

export default DashboardSettings;