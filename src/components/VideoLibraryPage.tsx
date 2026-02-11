import React, { useState } from 'react';
import { VIDEO_DATA } from '../data/mockData';

const VideoLibraryPage: React.FC = () => {
    const { hero, categories } = VIDEO_DATA;

    // State to track the active video. Defaults to the featured video.
    const [activeVideo, setActiveVideo] = useState<any>(hero.featured);
    const [isPlaying, setIsPlaying] = useState(false);

    const handleVideoClick = (video: any) => {
        setActiveVideo(video);
        setIsPlaying(true); // Auto-play when selected from list
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="bg-background-light dark:bg-background-dark text-slate-800 dark:text-white font-display min-h-screen relative overflow-x-hidden selection:bg-primary/30" dir="rtl">
            <main className="relative z-10 flex flex-col pb-24 pt-12">

                {/* Hero Section - Desktop Friendly */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mb-16">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Video Player Column */}
                        <div className="lg:col-span-2">
                            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl bg-black group w-full aspect-video border border-slate-100 dark:border-slate-800">
                                {isPlaying ? (
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        src={`https://www.youtube.com/embed/${activeVideo.youtubeId}?autoplay=1&rel=0`}
                                        title={activeVideo.title}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        className="absolute inset-0"
                                    ></iframe>
                                ) : (
                                    <div
                                        className="absolute inset-0 cursor-pointer"
                                        onClick={() => setIsPlaying(true)}
                                    >
                                        <img
                                            src={activeVideo.thumbnail || `https://img.youtube.com/vi/${activeVideo.youtubeId}/maxresdefault.jpg`}
                                            alt={activeVideo.title}
                                            className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity"
                                        />
                                        <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
                                            <span className="material-icons-round text-8xl text-white/90 group-hover:scale-110 transition-transform drop-shadow-2xl">play_circle_filled</span>
                                        </div>
                                        <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/90 to-transparent text-white">
                                            <span className="text-sm font-bold bg-primary px-3 py-1 rounded-lg mb-4 inline-block">
                                                {activeVideo === hero.featured ? 'فيديو مميز' : 'فيديو مختار'}
                                            </span>
                                            <h2 className="text-3xl font-bold leading-tight mb-2">{activeVideo.title}</h2>
                                            <span className="text-lg text-slate-300 block">{activeVideo.duration}</span>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className="mt-8 px-2">
                                <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">{activeVideo.title}</h3>
                                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl">
                                    {activeVideo === hero.featured ? hero.description : "شاهد هذا الفيديو لمعرفة المزيد حول هذا الموضوع وكيفية التعامل مع حالات الصرع."}
                                </p>
                            </div>
                        </div>

                        {/* Recent/Suggested Column */}
                        <div className="hidden lg:flex flex-col gap-6">
                            <h3 className="text-xl font-bold text-slate-800 dark:text-white flex items-center gap-2 mb-2">
                                <span className="material-icons-round text-primary">auto_awesome</span>
                                فيديوهات مقترحة
                            </h3>
                            <div className="flex flex-col gap-4 overflow-y-auto max-h-[600px] pr-2 custom-scrollbar">
                                {categories[0].videos.slice(0, 5).map((v: any, idx: number) => (
                                    <div
                                        key={idx}
                                        className={`flex gap-4 p-3 rounded-2xl transition-all cursor-pointer hover:bg-white dark:hover:bg-slate-800 border border-transparent hover:border-slate-100 dark:hover:border-slate-700 ${activeVideo.youtubeId === v.youtubeId ? 'bg-primary/5 border-primary/10' : ''}`}
                                        onClick={() => handleVideoClick(v)}
                                    >
                                        <div className="w-32 aspect-video shrink-0 rounded-xl overflow-hidden relative">
                                            <img src={`https://img.youtube.com/vi/${v.youtubeId}/mqdefault.jpg`} className="w-full h-full object-cover" />
                                            <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40">
                                                <span className="material-icons-round text-white text-xl">play_circle</span>
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className={`font-bold text-sm leading-tight mb-1 line-clamp-2 ${activeVideo.youtubeId === v.youtubeId ? 'text-primary' : 'text-slate-800 dark:text-white'}`}>
                                                {v.title}
                                            </h4>
                                            <span className="text-[10px] text-slate-400 font-medium">{v.duration}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* All Categories - Responsive Grids */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-20 pb-20">
                    {categories.map((category: any, idx: number) => (
                        <section key={idx}>
                            <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-8 flex items-center gap-3">
                                <span className="w-2 h-8 bg-primary rounded-full"></span>
                                {category.title}
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                                {category.videos.map((video: any, vIdx: number) => {
                                    const isActive = activeVideo.youtubeId === video.youtubeId;
                                    return (
                                        <div
                                            key={vIdx}
                                            className={`group cursor-pointer flex flex-col ${isActive ? 'opacity-50 pointer-events-none' : ''}`}
                                            onClick={() => handleVideoClick(video)}
                                        >
                                            <div className="aspect-video rounded-3xl bg-slate-100 dark:bg-slate-800 mb-4 relative overflow-hidden shadow-md border border-slate-100 dark:border-slate-700">
                                                <img
                                                    src={`https://img.youtube.com/vi/${video.youtubeId}/mqdefault.jpg`}
                                                    alt={video.title}
                                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                />
                                                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors flex items-center justify-center">
                                                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-300">
                                                        <span className="material-icons-round text-4xl text-white">play_arrow</span>
                                                    </div>
                                                </div>
                                                <span className="absolute bottom-4 right-4 text-xs font-bold bg-black/70 text-white px-3 py-1.5 rounded-lg backdrop-blur-md">{video.duration}</span>
                                            </div>
                                            <h4 className={`text-lg font-bold leading-snug mb-2 transition-colors duration-300 ${isActive ? 'text-primary' : 'text-slate-800 dark:text-white group-hover:text-primary'}`}>
                                                {video.title}
                                            </h4>
                                            <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2">تعرف أكثر على كيفية التعامل مع هذا النوع من الحالات بصفة علمية وعملية.</p>
                                        </div>
                                    );
                                })}
                            </div>
                        </section>
                    ))}
                </div>
            </main>
        </div >
    );
};

export default VideoLibraryPage;
