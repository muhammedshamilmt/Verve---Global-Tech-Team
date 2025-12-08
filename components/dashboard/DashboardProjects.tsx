import React from 'react';
import { MoreHorizontal, Plus, Calendar, Paperclip } from 'lucide-react';
import Button from '../ui/Button';
import ScrollReveal from '../ui/ScrollReveal';

const DashboardProjects: React.FC = () => {
  const projects = [
    {
        title: "Verve Landing Page",
        status: "In Progress",
        statusColor: "text-amber-400 bg-amber-400/10",
        date: "Due Oct 24",
        progress: 65,
        members: 3,
        image: "from-purple-500/20 to-blue-500/20"
    },
    {
        title: "Dashboard Redesign",
        status: "Review",
        statusColor: "text-blue-400 bg-blue-400/10",
        date: "Due Nov 01",
        progress: 90,
        members: 5,
        image: "from-emerald-500/20 to-teal-500/20"
    },
    {
        title: "Mobile App API",
        status: "Completed",
        statusColor: "text-emerald-400 bg-emerald-400/10",
        date: "Completed",
        progress: 100,
        members: 2,
        image: "from-rose-500/20 to-orange-500/20"
    },
    {
        title: "Marketing Assets",
        status: "Planning",
        statusColor: "text-gray-400 bg-gray-400/10",
        date: "Starts Dec 12",
        progress: 0,
        members: 4,
        image: "from-indigo-500/20 to-purple-500/20"
    },
    {
        title: "User Research",
        status: "In Progress",
        statusColor: "text-amber-400 bg-amber-400/10",
        date: "Due Oct 30",
        progress: 32,
        members: 3,
        image: "from-cyan-500/20 to-blue-500/20"
    },
  ];

  return (
    <div className="space-y-8">
        <div className="flex flex-col md:flex-row justify-between items-end md:items-center gap-4">
            <div>
                <h2 className="text-2xl font-semibold text-white">Projects</h2>
                <p className="text-gray-400 text-sm mt-1">Manage and track your ongoing projects.</p>
            </div>
            <Button className="flex items-center gap-2 shadow-[0_0_20px_rgba(94,234,212,0.2)]">
                <Plus size={18} /> New Project
            </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
                <ScrollReveal key={i} delay={i * 0.05} className="group bg-[#060709] border border-white/5 rounded-2xl p-6 hover:border-verve-accent/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                    <div className={`h-32 rounded-xl bg-gradient-to-br ${project.image} mb-6 relative overflow-hidden`}>
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent opacity-50" />
                        <button className="absolute top-3 right-3 p-1.5 rounded-lg bg-black/20 hover:bg-black/40 text-white backdrop-blur-sm transition-colors">
                            <MoreHorizontal size={16} />
                        </button>
                    </div>

                    <div className="space-y-4">
                        <div className="flex justify-between items-start">
                            <h3 className="text-lg font-semibold text-white group-hover:text-verve-accent transition-colors">{project.title}</h3>
                            <span className={`text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wide ${project.statusColor}`}>
                                {project.status}
                            </span>
                        </div>

                        <div className="space-y-2">
                            <div className="flex justify-between text-xs text-gray-500">
                                <span>Progress</span>
                                <span>{project.progress}%</span>
                            </div>
                            <div className="h-1.5 w-full bg-[#0F1115] rounded-full overflow-hidden">
                                <div className="h-full bg-verve-accent rounded-full" style={{ width: `${project.progress}%` }} />
                            </div>
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t border-white/5">
                            <div className="flex -space-x-2">
                                {[...Array(project.members)].map((_, idx) => (
                                    <div key={idx} className={`w-8 h-8 rounded-full border-2 border-[#060709] flex items-center justify-center text-[10px] font-bold text-white bg-gradient-to-br from-gray-700 to-gray-800`}>
                                        U{idx+1}
                                    </div>
                                ))}
                                <div className="w-8 h-8 rounded-full border-2 border-[#060709] bg-[#1A1D24] flex items-center justify-center text-[10px] text-gray-400">
                                    +
                                </div>
                            </div>
                            
                            <div className="flex items-center gap-4 text-gray-500 text-xs">
                                <div className="flex items-center gap-1"><Paperclip size={12} /> 4</div>
                                <div className="flex items-center gap-1"><Calendar size={12} /> {project.date}</div>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            ))}
        </div>
    </div>
  );
};

export default DashboardProjects;