import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { QUIZ_DATA } from '../data/mockData';

const QuizResultPage: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { result, stats, radar, demographics } = QUIZ_DATA;

    // Get score from location state (undefined if accessed directly)
    const userScore = location.state?.score;

    return (
        <div className="bg-background-light dark:bg-background-dark text-slate-800 dark:text-white font-display min-h-screen relative overflow-x-hidden selection:bg-primary/30" dir="rtl">
            <main className="relative z-10 flex flex-col pb-24 pt-12">

                {/* Desktop Header Intro */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mb-16 text-center">
                    <h2 className="text-4xl md:text-5xl font-black text-slate-800 dark:text-white mb-4">تحليل النتائج والوعي العام</h2>
                    <p className="text-xl text-slate-500 dark:text-slate-400 max-w-3xl mx-auto">نظرة شاملة على مستوى الوعي بالصرع في تونس ومقارنة نتائجك مع المجتمع.</p>
                </section>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">

                        {/* Result Panel (Left) */}
                        <div className="lg:col-span-5 flex flex-col gap-8">
                            {userScore !== undefined ? (
                                <section className="relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-primary via-purple-600 to-purple-800 shadow-2xl shadow-primary/30 p-10 md:p-12 text-white text-center group">
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl group-hover:scale-110 transition-transform duration-700"></div>
                                    <div className="relative z-10">
                                        <h2 className="text-2xl font-bold opacity-90 mb-4">{result.title}</h2>
                                        <p className="text-lg opacity-80 mb-10 leading-relaxed">{result.description}</p>

                                        <div className="relative w-64 h-64 mx-auto mb-10 flex items-center justify-center">
                                            <svg className="w-full h-full transform -rotate-90 filter drop-shadow-xl" viewBox="0 0 36 36">
                                                <path className="text-white/10" strokeWidth="3" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                                                <path className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]" strokeDasharray={`${userScore}, 100`} strokeWidth="3" strokeLinecap="round" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                                            </svg>
                                            <div className="absolute flex flex-col items-center">
                                                <span className="text-6xl font-black">{userScore}%</span>
                                                <span className="text-sm font-bold opacity-75">نتيجة الاختبار</span>
                                            </div>
                                        </div>

                                        {userScore > 70 ? (
                                            <a
                                                href="/downloads/certificate.pdf"
                                                download
                                                className="inline-flex items-center justify-center gap-4 bg-white text-primary font-black py-5 px-10 rounded-2xl w-full hover:scale-[1.02] active:scale-95 transition-all shadow-xl group/btn"
                                            >
                                                <span className="material-icons-round text-2xl group-hover/btn:bounce">workspace_premium</span>
                                                <span>تحميل شهادة الوعي بالصرع</span>
                                            </a>
                                        ) : (
                                            <div className="bg-white/10 border border-white/20 text-white p-6 rounded-2xl w-full font-bold">
                                                يجب الحصول على أكثر من 70% لتحميل الشهادة. جرب مرة أخرى!
                                            </div>
                                        )}
                                    </div>
                                </section>
                            ) : (
                                <section className="relative overflow-hidden rounded-[3rem] bg-white dark:bg-slate-800 shadow-2xl border-4 border-dashed border-primary/20 p-12 text-center group">
                                    <div className="w-24 h-24 rounded-3xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-8 shadow-inner group-hover:rotate-12 transition-transform">
                                        <span className="material-icons-round text-5xl">quiz</span>
                                    </div>
                                    <h2 className="text-3xl font-black text-slate-800 dark:text-white mb-4">لم تقم بالاختبار بعد</h2>
                                    <p className="text-lg text-slate-500 dark:text-slate-400 mb-10 leading-relaxed">قم بإجراء الاختبار لمعرفة مستوى معلوماتك حول الصرع والحصول على شهادة رسمية من الموقع.</p>
                                    <button
                                        onClick={() => navigate('/quiz')}
                                        className="inline-flex items-center justify-center gap-4 bg-primary text-white font-black py-6 px-12 rounded-2xl w-full hover:scale-[1.02] active:scale-95 transition-all shadow-2xl shadow-primary/30"
                                    >
                                        <span>ابدأ التحدي الآن</span>
                                        <span className="material-icons-round text-2xl transform rotate-180">arrow_forward</span>
                                    </button>
                                </section>
                            )}

                            {/* Awareness Statistics Integrated */}
                            <div className="bg-white dark:bg-slate-800 rounded-[2.5rem] p-10 shadow-xl border border-slate-100 dark:border-slate-700">
                                <div className="flex items-center gap-4 mb-10">
                                    <div className="w-14 h-14 bg-emerald-100 dark:bg-emerald-900/30 rounded-2xl flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                                        <span className="material-icons-round text-3xl">public</span>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-slate-800 dark:text-white">{(QUIZ_DATA as any).awarenessStats.title}</h4>
                                        <p className="text-slate-500 dark:text-slate-400">{(QUIZ_DATA as any).awarenessStats.subtitle}</p>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-6">
                                    {(QUIZ_DATA as any).awarenessStats.stats.map((stat: any, idx: number) => (
                                        <div key={idx} className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-3xl flex flex-col items-center text-center gap-4 border border-slate-100 dark:border-slate-800 hover:border-emerald-100 transition-colors">
                                            <span className={`material-icons-round text-${stat.color}-500 text-4xl`}>{stat.icon}</span>
                                            <span className="text-3xl font-black text-slate-800 dark:text-white">{stat.value}</span>
                                            <span className="text-sm font-bold text-slate-500">{stat.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Stats Panel (Right) */}
                        <div className="lg:col-span-7 flex flex-col gap-8">
                            {/* Global Stats Distribution */}
                            <div className="bg-white dark:bg-slate-800 rounded-[2.5rem] p-10 md:p-12 shadow-xl border border-slate-100 dark:border-slate-700">
                                <div className="flex items-center justify-between mb-12">
                                    <div className="flex items-center gap-4">
                                        <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                                            <span className="material-icons-round text-3xl">bar_chart</span>
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-slate-800 dark:text-white">{stats.title}</h4>
                                            <p className="text-slate-500 dark:text-slate-400">توزيع نتائج المستخدمين في تونس</p>
                                        </div>
                                    </div>
                                    {userScore !== undefined && (
                                        <div className="px-6 py-2 bg-primary text-white font-bold rounded-full text-lg shadow-lg">نتيجة حالية: {userScore}%</div>
                                    )}
                                </div>

                                <div className="flex items-end justify-between h-64 gap-6 px-4">
                                    {stats.distribution.map((bar: any, idx: number) => (
                                        <div key={idx} className="flex flex-col items-center gap-4 w-full group">
                                            <div className={`w-full bg-slate-50 dark:bg-slate-900/50 rounded-2xl relative h-full flex items-end justify-center overflow-hidden border border-slate-100 dark:border-slate-800 ${bar.active ? 'ring-4 ring-primary/20 scale-105' : ''}`}>
                                                <div className={`w-full ${bar.active ? 'bg-primary' : 'bg-primary/30'} rounded-t-xl transition-all duration-1000 ease-out`} style={{ height: bar.height }}></div>
                                                {bar.active && (
                                                    <div className="absolute top-4 bg-white text-primary text-[10px] font-black py-1 px-2 rounded-lg shadow-xl animate-bounce">أنت</div>
                                                )}
                                            </div>
                                            <span className="text-sm font-bold text-slate-500 dark:text-slate-400 group-hover:text-primary transition-colors">{bar.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Skills Radar & Demographics Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {/* Simplified Radar Visual */}
                                <div className="bg-white dark:bg-slate-800 rounded-[2.5rem] p-10 shadow-xl border border-slate-100 dark:border-slate-700 flex flex-col items-center">
                                    <h4 className="text-xl font-bold text-slate-800 dark:text-white mb-8 self-start flex items-center gap-3">
                                        <span className="material-icons-round text-primary">radar</span>
                                        {radar.title}
                                    </h4>
                                    <div className="relative h-56 w-56 flex items-center justify-center border-2 border-slate-100 dark:border-slate-700 rounded-full bg-slate-50 dark:bg-slate-900/20">
                                        <div className="absolute w-full h-px bg-slate-200 dark:bg-slate-700 rotate-0"></div>
                                        <div className="absolute w-full h-px bg-slate-200 dark:bg-slate-700 rotate-45"></div>
                                        <div className="absolute w-full h-px bg-slate-200 dark:bg-slate-700 rotate-90"></div>
                                        <div className="absolute w-full h-px bg-slate-200 dark:bg-slate-700 rotate-[135deg]"></div>
                                        {/* Stylized polygon shape */}
                                        <div className="absolute w-40 h-40 bg-primary/40" style={{ clipPath: 'polygon(50% 10%, 90% 35%, 80% 80%, 20% 80%, 10% 35%)', filter: 'blur(2px)' }}></div>
                                        <div className="absolute w-40 h-40 border-4 border-primary" style={{ clipPath: 'polygon(50% 10%, 90% 35%, 80% 80%, 20% 80%, 10% 35%)' }}></div>

                                        <span className="absolute top-[-30px] text-xs font-black text-primary">الأعراض</span>
                                        <span className="absolute right-[-40px] text-xs font-black text-slate-400">الإسعافات</span>
                                        <span className="absolute bottom-[-30px] text-xs font-black text-slate-400">العلاج</span>
                                        <span className="absolute left-[-40px] text-xs font-black text-slate-400">التوعية</span>
                                    </div>
                                    <p className="mt-12 text-sm text-slate-500 text-center font-medium">مهاراتك متوازنة بصفة عامة، مع تميز واضح في معرفة الأعراض.</p>
                                </div>

                                {/* Demographics (Pie Chart Style) */}
                                <div className="bg-white dark:bg-slate-800 rounded-[2.5rem] p-10 shadow-xl border border-slate-100 dark:border-slate-700">
                                    <h4 className="text-xl font-bold text-slate-800 dark:text-white mb-8 flex items-center gap-3">
                                        <span className="material-icons-round text-primary">pie_chart</span>
                                        {demographics.title}
                                    </h4>
                                    <div className="space-y-6">
                                        {demographics.data.map((item: any, idx: number) => (
                                            <div key={idx} className="space-y-2">
                                                <div className="flex justify-between items-end">
                                                    <span className="font-bold text-slate-700 dark:text-slate-300">{item.label}</span>
                                                    <span className="text-primary font-black">{item.value}</span>
                                                </div>
                                                <div className="w-full h-3 bg-slate-100 dark:bg-slate-900 rounded-full overflow-hidden">
                                                    <div
                                                        className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
                                                        style={{
                                                            width: item.value,
                                                            backgroundColor: item.color === 'primary' ? '#7c3bed' : item.color
                                                        }}
                                                    ></div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default QuizResultPage;
