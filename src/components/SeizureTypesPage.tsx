import React from 'react';
import { TYPES_DATA } from '../data/mockData';

const SeizureTypesPage: React.FC = () => {
    const { hero, types } = TYPES_DATA;

    return (
        <div className="bg-background-light dark:bg-background-dark text-slate-800 dark:text-white font-display min-h-screen relative overflow-x-hidden selection:bg-primary/30" dir="rtl">
            {/* Decorative Background */}
            <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute top-0 right-0 w-full h-96 bg-gradient-to-b from-indigo-500/10 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-[100px]"></div>
            </div>

            <main className="relative z-10 flex flex-col pb-20 pt-12">

                {/* Hero - Centered for Desktop */}
                <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center w-full">
                    <div className="w-24 h-24 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-6 mx-auto shadow-lg">
                        <span className="material-icons-round text-5xl">category</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-6 leading-tight">{hero.title}</h2>
                    <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto">
                        {hero.description}
                    </p>
                </section>

                {/* Types List */}
                <section className="px-6 flex flex-col gap-6">
                    {types.map((type) => (
                        <div key={type.id} className="bg-white dark:bg-slate-800 rounded-3xl p-6 shadow-card border border-slate-100 dark:border-slate-700 overflow-hidden relative">
                            {/* Decorative side bar */}
                            <div className={`absolute top-0 right-0 w-2 h-full bg-${type.color}-500`}></div>

                            <div className="flex items-center gap-3 mb-4">
                                <h3 className={`text-xl font-bold text-${type.color}-600 dark:text-${type.color}-400`}>{type.title}</h3>
                            </div>

                            <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 font-medium">
                                {type.description}
                            </p>

                            <div className="space-y-3">
                                {type.subtypes.map((subtype, idx) => (
                                    <div key={idx} className="bg-slate-50 dark:bg-slate-900/50 rounded-xl p-4">
                                        <h4 className="font-bold text-slate-800 dark:text-white mb-1">{subtype.name}</h4>
                                        <p className="text-xs text-slate-500 dark:text-slate-400">{subtype.details}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </section>

            </main>
        </div>
    );
};

export default SeizureTypesPage;
