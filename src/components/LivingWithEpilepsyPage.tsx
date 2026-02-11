import React, { useState, useEffect } from 'react';
import { LIVING_DATA } from '../data/mockData';
import { StorageService, SeizureLogEntry } from '../utils/storage';
const LivingWithEpilepsyPage: React.FC = () => {
    const { hero, triggers, grid } = LIVING_DATA;

    // State for storage and modal
    const [recentLogs, setRecentLogs] = useState<SeizureLogEntry[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [streakDays, setStreakDays] = useState(0);

    // Form State
    const [logDate, setLogDate] = useState(new Date().toISOString().split('T')[0]);
    const [logTime, setLogTime] = useState(new Date().toTimeString().slice(0, 5));
    const [logDuration, setLogDuration] = useState('');
    const [logNotes, setLogNotes] = useState('');
    const [selectedTriggers, setSelectedTriggers] = useState<string[]>([]);

    useEffect(() => {
        const logs = StorageService.getLogs();
        setRecentLogs(logs.slice(0, 3)); // Show last 3
        setStreakDays(StorageService.getStreakDays());
    }, []);

    const handleSaveLog = (e: React.FormEvent) => {
        e.preventDefault();
        StorageService.addLog({
            date: logDate,
            time: logTime,
            duration: logDuration,
            triggers: selectedTriggers,
            notes: logNotes
        });

        setRecentLogs(StorageService.getLogs().slice(0, 3));
        setStreakDays(0); // Reset streak on new log
        setIsModalOpen(false);
        // Reset form
        setLogNotes('');
        setLogDuration('');
        setSelectedTriggers([]);
    };

    const toggleTrigger = (label: string) => {
        setSelectedTriggers(prev =>
            prev.includes(label) ? prev.filter(t => t !== label) : [...prev, label]
        );
    };

    return (
        <div className="bg-background-light dark:bg-background-dark text-slate-800 dark:text-white font-display min-h-screen relative overflow-x-hidden selection:bg-purple-500/30" dir="rtl">
            {/* Decorative Background */}
            <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute -top-20 -right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-[100px]"></div>
                <div className="absolute top-[40%] -left-20 w-60 h-60 bg-pink-500/10 rounded-full blur-[80px]"></div>
            </div>

            <main className="relative z-10 flex flex-col pb-24 pt-12">

                {/* App Hero / Section Intro */}
                <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center w-full">
                    <div className="w-24 h-24 rounded-3xl bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-6 mx-auto shadow-lg rotate-3">
                        <span className="material-icons-round text-5xl">auto_stories</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-6 leading-tight">{hero.title}</h2>
                    <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto">
                        {hero.description}
                    </p>
                </section>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
                    {/* Right Column: Diary Form & Stats */}
                    <div className="flex flex-col gap-8">
                        <section className="bg-white dark:bg-slate-800 rounded-[2.5rem] p-8 md:p-10 shadow-xl border border-slate-100 dark:border-slate-700 relative overflow-hidden">
                            <div className="flex justify-between items-start mb-8">
                                <h3 className="text-2xl font-bold text-slate-800 dark:text-white flex items-center gap-3">
                                    <span className="material-icons-round text-primary">edit_note</span>
                                    مفكرة الصرع
                                </h3>
                                <div className="text-center bg-purple-50 dark:bg-purple-900/20 px-4 py-2 rounded-2xl border border-purple-100 dark:border-purple-900/30">
                                    <span className="text-[10px] text-purple-500 font-bold block">أيام بلا نوبات</span>
                                    <span className="text-2xl font-black text-purple-700 dark:text-purple-400">{streakDays}</span>
                                </div>
                            </div>

                            <p className="text-slate-500 mb-8 font-medium">سجل النوبات باش تعاون روحك وتعاون طبيبك يلقى الحل المناسب.</p>

                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="w-full bg-primary text-white font-bold text-xl py-6 rounded-3xl shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-4 group"
                            >
                                <span className="material-icons-round text-3xl group-hover:rotate-12 transition-transform">{hero.icon}</span>
                                {hero.action}
                            </button>
                        </section>

                        {/* Recent Logs Section */}
                        {recentLogs.length > 0 && (
                            <section className="bg-white/50 dark:bg-slate-800/20 rounded-[2.5rem] p-8 md:p-10 border border-slate-100 dark:border-slate-700">
                                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-8">آخر التسجيلات</h3>
                                <div className="space-y-4">
                                    {recentLogs.map(log => (
                                        <div key={log.id} className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-50 dark:border-slate-800 flex justify-between items-center gap-4 group hover:border-red-100 transition-colors">
                                            <div className="flex items-center gap-5">
                                                <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-500 flex items-center justify-center shrink-0">
                                                    <span className="material-icons-round text-2xl">flash_on</span>
                                                </div>
                                                <div>
                                                    <p className="text-lg font-bold text-slate-800 dark:text-white">نوبة صرع</p>
                                                    <p className="text-slate-400 font-medium">{log.date} - {log.time}</p>
                                                </div>
                                            </div>
                                            {log.duration && <span className="text-sm font-bold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-4 py-2 rounded-xl">{log.duration} دق</span>}
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}
                    </div>

                    {/* Left Column: Triggers & Advice */}
                    <div className="flex flex-col gap-8">
                        <section className="bg-white dark:bg-slate-800 rounded-[2.5rem] p-8 md:p-10 shadow-xl border border-slate-100 dark:border-slate-700">
                            <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-10 flex items-center gap-3">
                                <span className="material-icons-round text-orange-500">warning</span>
                                {triggers.title}
                            </h3>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                                {triggers.tags.map((tag: any, idx: number) => (
                                    <div key={idx} className="flex flex-col p-6 rounded-3xl bg-orange-50/50 dark:bg-orange-950/10 border border-orange-100 dark:border-orange-900/20 group hover:bg-orange-500 transition-all duration-300">
                                        <span className="material-icons-round text-orange-500 group-hover:text-white text-3xl mb-3 transition-colors">{tag.icon}</span>
                                        <span className="text-lg font-bold text-slate-700 dark:text-slate-200 group-hover:text-white transition-colors">{tag.label}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Additional Info / Grid Content integrated here */}
                            <div className="grid grid-cols-1 gap-4">
                                {grid.cards.map((card: any, idx: number) => (
                                    <div key={idx} className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 flex items-center gap-6 group hover:translate-x-[-4px] transition-transform cursor-pointer">
                                        <div className={`w-14 h-14 rounded-2xl bg-${card.color}-100 dark:bg-${card.color}-900/20 text-${card.color}-600 dark:text-${card.color}-400 flex items-center justify-center shrink-0`}>
                                            <span className="material-icons-round text-3xl">{card.icon}</span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-800 dark:text-white text-lg">{card.title}</h4>
                                            <p className="text-sm text-slate-500 dark:text-slate-400">{card.subtitle}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>
                </div>

                {/* Modal */}
                {isModalOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
                        <div className="bg-white dark:bg-slate-900 w-full max-w-lg rounded-[2.5rem] p-8 md:p-10 shadow-2xl relative border border-slate-100 dark:border-slate-800">
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="absolute top-6 left-6 text-slate-400 hover:text-slate-600 dark:hover:text-white transition-colors"
                            >
                                <span className="material-icons-round text-3xl">close</span>
                            </button>

                            <h3 className="text-3xl font-bold mb-8 text-slate-800 dark:text-white flex items-center gap-3">
                                <span className="material-icons-round text-primary text-4xl">edit_calendar</span>
                                تسجيل نوبة جديدة
                            </h3>

                            <form onSubmit={handleSaveLog} className="space-y-6">
                                <div className="grid grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="block text-sm font-bold text-slate-500 dark:text-slate-400 mr-1">التاريخ</label>
                                        <input
                                            type="date"
                                            value={logDate}
                                            onChange={e => setLogDate(e.target.value)}
                                            className="w-full p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border-none text-slate-800 dark:text-white focus:ring-2 focus:ring-primary/20 outline-none"
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="block text-sm font-bold text-slate-500 dark:text-slate-400 mr-1">وقت البدء</label>
                                        <input
                                            type="time"
                                            value={logTime}
                                            onChange={e => setLogTime(e.target.value)}
                                            className="w-full p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border-none text-slate-800 dark:text-white focus:ring-2 focus:ring-primary/20 outline-none"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="block text-sm font-bold text-slate-500 dark:text-slate-400 mr-1">المدة (بالدقائق)</label>
                                    <input
                                        type="number"
                                        placeholder="مثلاً: 2"
                                        value={logDuration}
                                        onChange={e => setLogDuration(e.target.value)}
                                        className="w-full p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border-none text-slate-800 dark:text-white focus:ring-2 focus:ring-primary/20 outline-none"
                                    />
                                </div>

                                <div className="space-y-3">
                                    <label className="block text-sm font-bold text-slate-500 dark:text-slate-400 mr-1">المحفزات المحتملة</label>
                                    <div className="flex flex-wrap gap-3">
                                        {triggers.tags.map((tag: any, idx: number) => (
                                            <button
                                                key={idx}
                                                type="button"
                                                onClick={() => toggleTrigger(tag.label)}
                                                className={`text-sm px-4 py-2 rounded-xl border-2 transition-all flex items-center gap-2 ${selectedTriggers.includes(tag.label)
                                                    ? 'bg-primary border-primary text-white font-bold shadow-lg shadow-primary/20'
                                                    : 'bg-white dark:bg-slate-800 border-slate-100 dark:border-slate-700 text-slate-600 dark:text-slate-400'
                                                    }`}
                                            >
                                                <span>{tag.icon}</span>
                                                {tag.label}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="block text-sm font-bold text-slate-500 dark:text-slate-400 mr-1">ملاحظات إضافية</label>
                                    <textarea
                                        rows={3}
                                        value={logNotes}
                                        onChange={e => setLogNotes(e.target.value)}
                                        className="w-full p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border-none text-slate-800 dark:text-white focus:ring-2 focus:ring-primary/20 outline-none min-h-[100px]"
                                        placeholder="كيف شعرت بعد النوبة؟"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-primary text-white font-bold py-5 rounded-2xl hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-primary/20 text-xl"
                                >
                                    حفظ السجل
                                </button>
                            </form>
                        </div>
                    </div>
                )}

            </main>
        </div>
    );
};

export default LivingWithEpilepsyPage;
