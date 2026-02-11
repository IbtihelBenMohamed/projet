import React from 'react';
import { DEFINITION_DATA } from '../data/mockData';

const DefinitionPage: React.FC = () => {
    const { hero, mythsTitle, myths } = DEFINITION_DATA;

    return (
        <div className="bg-background-light dark:bg-background-dark text-slate-800 dark:text-white font-display min-h-screen relative overflow-x-hidden selection:bg-primary/30" dir="rtl">
            {/* Decorative Background */}
            <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute -top-20 -right-20 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px]"></div>
                <div className="absolute top-[40%] -left-20 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px]"></div>
            </div>

            <main className="relative z-10 flex flex-col pb-20 pt-12">

                {/* Hero Section - Centered */}
                <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center w-full">
                    <div className="bg-white dark:bg-slate-800 rounded-[3rem] p-10 md:p-16 shadow-2xl border border-slate-100 dark:border-slate-700 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 dark:bg-blue-900/20 rounded-bl-full -mr-20 -mt-20 opacity-50 group-hover:scale-110 transition-transform duration-700"></div>

                        <div className="w-24 h-24 rounded-3xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-8 mx-auto relative z-10 shadow-lg">
                            <span className="material-icons-round text-5xl">psychology</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-8 leading-tight">{hero.title}</h2>
                        <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl mx-auto">
                            {hero.description}
                        </p>
                    </div>
                </section>


                {/* Myths vs Facts - Grid Layout */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className="mb-12 text-center md:text-right">
                        <h3 className="text-3xl font-bold text-slate-800 dark:text-white pr-4 border-r-8 border-red-400 inline-block">
                            {mythsTitle}
                        </h3>
                        <p className="text-slate-500 mt-2 pr-4 italic">تصحيح المفاهيم الخاطئة المنتشرة</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {myths.map((item, index) => (
                            <div key={index} className="bg-white dark:bg-slate-800 rounded-[2rem] p-8 shadow-xl border border-slate-100 dark:border-slate-700 flex flex-col h-full hover:translate-y-[-8px] transition-transform duration-300">
                                <div className="flex items-start gap-4 mb-6">
                                    <span className="bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-sm font-bold px-4 py-1.5 rounded-full whitespace-nowrap">
                                        خرافة
                                    </span>
                                    <p className="font-bold text-lg text-slate-700 dark:text-slate-200 leading-snug">{item.myth}</p>
                                </div>

                                <div className="mt-auto pt-6 border-t border-slate-100 dark:border-slate-700 flex items-start gap-4">
                                    <span className="bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-sm font-bold px-4 py-1.5 rounded-full whitespace-nowrap">
                                        حقيقة
                                    </span>
                                    <p className="text-slate-500 dark:text-slate-400 leading-relaxed">{item.fact}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

            </main>
        </div>
    );
};

export default DefinitionPage;
