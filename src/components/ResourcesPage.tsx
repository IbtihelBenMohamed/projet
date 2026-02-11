import React from 'react';

import { RESOURCES_DATA } from '../data/mockData';

const ResourcesPage: React.FC = () => {
    const { emergency, centers, groups, downloads } = RESOURCES_DATA;

    return (
        <div className="bg-background-light dark:bg-background-dark text-slate-800 dark:text-white font-display min-h-screen relative overflow-x-hidden selection:bg-primary/30" dir="rtl">
            <main className="relative z-10 flex flex-col pb-24 pt-12">

                {/* Emergency Hero - Desktop Friendly */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mb-16">
                    <div className="bg-gradient-to-br from-primary via-purple-600 to-purple-800 rounded-[2.5rem] p-10 md:p-16 text-white shadow-2xl shadow-primary/30 relative overflow-hidden group">
                        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full -translate-x-20 -translate-y-20 blur-[100px] group-hover:scale-110 transition-transform duration-700"></div>
                        <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-400/20 rounded-full translate-x-10 translate-y-10 blur-[80px]"></div>

                        <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center gap-12 text-center lg:text-right">
                            <div className="max-w-2xl">
                                <h2 className="text-3xl md:text-4xl font-bold mb-4">{emergency.title}</h2>
                                <p className="text-xl opacity-90 leading-relaxed mb-4">{emergency.subtitle}</p>
                                <p className="text-lg opacity-75">نحن هنا لمساعدتك في أي وقت، لا تتردد في الاتصال بنا في حالات الطوارئ.</p>
                            </div>

                            <div className="flex flex-col items-center gap-6">
                                <div className="text-6xl md:text-8xl font-black tracking-tighter drop-shadow-lg ring-4 ring-white/20 px-8 py-4 rounded-[2rem] bg-white/10 backdrop-blur-sm">
                                    {emergency.number}
                                </div>
                                <button className="bg-white text-primary hover:bg-gray-50 active:scale-95 transition-all px-12 py-5 rounded-2xl font-black text-2xl flex items-center gap-4 shadow-xl group/btn">
                                    <span className="material-icons-round text-3xl group-hover/btn:rotate-12 transition-transform">call</span>
                                    <span>{emergency.action}</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
                    {/* Medical Centers */}
                    <section>
                        <h2 className="text-2xl font-bold flex items-center gap-3 mb-8">
                            <span className="w-2 h-8 bg-primary rounded-full"></span>
                            {centers.title}
                        </h2>
                        <div className="grid grid-cols-1 gap-6">
                            {centers.list.map((center: any, idx: number) => (
                                <div key={idx} className="bg-white dark:bg-slate-800 rounded-3xl p-6 md:p-8 shadow-xl border border-slate-100 dark:border-slate-700 group hover:border-primary/20 transition-all">
                                    <div className="flex items-center gap-6">
                                        <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                                            <span className="material-icons-round text-primary text-3xl">local_hospital</span>
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">{center.name}</h3>
                                            <p className="text-slate-500 dark:text-slate-400 flex items-center gap-2">
                                                <span className="material-icons-round text-lg text-primary/60">location_on</span>
                                                {center.location}
                                            </p>
                                        </div>
                                        <button className="w-14 h-14 rounded-2xl bg-slate-50 dark:bg-slate-700 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all shadow-sm">
                                            <span className="material-icons-round text-2xl">phone</span>
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Groups & Help */}
                    <section>
                        <h2 className="text-2xl font-bold flex items-center gap-3 mb-8">
                            <span className="w-2 h-8 bg-purple-500 rounded-full"></span>
                            {groups.title}
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {groups.list.map((group: any, idx: number) => (
                                <div key={idx} className="bg-white dark:bg-slate-800 rounded-3xl p-8 border border-slate-100 dark:border-slate-700 text-center shadow-xl flex flex-col group hover:translate-y-[-8px] transition-all">
                                    <div className="w-20 h-20 rounded-full bg-primary/5 p-1 mb-6 mx-auto flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                                        <span className="material-icons-round text-4xl">volunteer_activism</span>
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 text-slate-800 dark:text-white">{group.name}</h3>
                                    <p className="text-slate-500 dark:text-slate-400 mb-8 leading-relaxed flex-grow">{group.desc}</p>
                                    <button className="w-full py-4 bg-primary/10 text-primary hover:bg-primary hover:text-white rounded-2xl font-bold transition-all">
                                        {group.action}
                                    </button>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                {/* Downloads Section */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-20">
                    <h2 className="text-2xl font-bold flex items-center gap-3 mb-10">
                        <span className="w-2 h-8 bg-emerald-500 rounded-full"></span>
                        {downloads.title}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {downloads.list.map((item: any, idx: number) => (
                            <div key={idx} className="bg-white dark:bg-slate-800 rounded-3xl p-8 border border-slate-100 dark:border-slate-700 shadow-xl flex flex-col group hover:shadow-2xl transition-all">
                                <div className="w-16 h-16 bg-primary/5 dark:bg-slate-700/50 rounded-2xl flex items-center justify-center text-primary shadow-sm mb-6 group-hover:scale-110 transition-transform">
                                    <span className="material-icons-round text-3xl">{item.icon}</span>
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-slate-800 dark:text-white">{item.title}</h3>
                                <p className="text-slate-500 dark:text-slate-400 mb-8 leading-relaxed text-sm flex-grow">{item.desc}</p>
                                <a
                                    href={item.url}
                                    download
                                    className="flex items-center justify-center gap-2 bg-primary/10 text-primary py-4 rounded-xl font-bold hover:bg-primary hover:text-white transition-all"
                                >
                                    <span className="material-icons-round">download</span>
                                    <span>تحميل PDF ({item.size})</span>
                                </a>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
};

export default ResourcesPage;
