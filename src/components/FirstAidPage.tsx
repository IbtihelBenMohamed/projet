import React from 'react';
import { FIRST_AID_DATA } from '../data/mockData';

const FirstAidPage: React.FC = () => {
    const { hero, steps } = FIRST_AID_DATA;

    return (
        <div className="bg-background-light dark:bg-background-dark text-slate-800 dark:text-white font-display min-h-screen relative overflow-x-hidden selection:bg-red-500/30" dir="rtl">
            {/* Decorative Background - Red Alert Theme */}
            <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute top-0 right-0 w-full h-96 bg-gradient-to-b from-red-500/10 to-transparent"></div>
                <div className="absolute bottom-0 right-0 w-80 h-80 bg-red-500/5 rounded-full blur-[100px]"></div>
            </div>

            <main className="relative z-10 flex flex-col pb-24 pt-12">

                {/* App Hero / Section Intro */}
                <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center w-full">
                    <div className="w-24 h-24 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 flex items-center justify-center mb-6 mx-auto animate-pulse shadow-lg">
                        <span className="material-icons-round text-5xl">medical_services</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-6 leading-tight">{hero.title}</h2>
                    <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto">
                        {hero.description}
                    </p>
                </section>

                {/* Steps Responsive Grid */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full pb-20">
                    {steps.map((step: any) => (
                        <div
                            key={step.order}
                            className={`rounded-[2rem] p-8 shadow-xl border relative overflow-hidden flex flex-col h-full hover:shadow-2xl transition-all duration-300 ${step.isWarning
                                ? 'bg-red-50 dark:bg-red-900/10 border-red-100 dark:border-red-900/20'
                                : step.isEmergency
                                    ? 'bg-slate-800 text-white border-slate-700'
                                    : 'bg-white dark:bg-slate-800 border-slate-100 dark:border-slate-700'
                                }`}
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 shadow-sm ${step.isWarning ? 'bg-red-200 text-red-700' :
                                    step.isEmergency ? 'bg-white/20 text-white' :
                                        'bg-emerald-100 text-emerald-600'
                                    }`}>
                                    {step.isWarning ? (
                                        <span className="material-icons-round text-3xl">priority_high</span>
                                    ) : (
                                        <span className="font-extrabold text-2xl">{step.order}</span>
                                    )}
                                </div>
                                <h3 className={`font-bold text-xl leading-tight ${step.isEmergency ? 'text-white' : 'text-slate-800 dark:text-white'}`}>
                                    {step.title}
                                </h3>
                            </div>

                            <p className={`text-lg leading-relaxed mt-auto ${step.isEmergency ? 'text-slate-300' : 'text-slate-500 dark:text-slate-400'}`}>
                                {step.description}
                            </p>
                        </div>
                    ))}
                </section>

            </main>
        </div>
    );
};

export default FirstAidPage;
