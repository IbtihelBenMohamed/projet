import React from 'react';
import { Button } from './ui/Button';
import { Card } from './ui/Card';
import { LANDING_PAGE_DATA } from '../data/mockData';
import { useNavigate } from 'react-router-dom';

const LandingPage: React.FC = () => {
    const { hero, sectionTitle, cards, footer } = LANDING_PAGE_DATA;
    const navigate = useNavigate();

    const handleCardClick = (id: string) => {
        switch (id) {
            case 'definition': navigate('/definition'); break;
            case 'types': navigate('/types'); break;
            case 'first-aid': navigate('/first-aid'); break;
            case 'living': navigate('/living'); break;
            case 'quiz': navigate('/quiz'); break;
            case 'stats': navigate('/stats'); break;
            case 'resources': navigate('/resources'); break;
            case 'video': navigate('/video'); break;
            // Add other cases as pages are implemented
            default: console.log(`Clicked ${id} `);
        }
    };

    return (
        <div className="bg-background-light dark:bg-background-dark text-slate-800 dark:text-white font-display min-h-screen relative overflow-x-hidden selection:bg-primary/30" dir="rtl">
            {/* Decorative Top Gradient */}
            <div className="absolute top-0 w-full h-[500px] bg-gradient-to-b from-primary/10 to-transparent pointer-events-none z-0"></div>

            {/* Main Container */}
            <main className="relative z-10 flex flex-col pb-16">

                {/* Hero Section */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 md:pt-24 md:pb-32 w-full">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="text-right order-2 md:order-1">
                            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight">
                                {hero.title.line1}<br />
                                <span className="text-primary">{hero.title.line2}</span>
                            </h1>

                            <p className="text-xl text-slate-500 dark:text-slate-400 mb-10 leading-relaxed max-w-xl">
                                {hero.description}
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button
                                    variant="primary"
                                    icon="arrow_right_alt"
                                    className="px-8 py-4 text-lg"
                                    onClick={() => {
                                        document.getElementById('explore-section')?.scrollIntoView({ behavior: 'smooth' });
                                    }}
                                >
                                    {hero.primaryButton}
                                </Button>
                                <Button
                                    variant="secondary"
                                    icon="play_circle_filled"
                                    className="px-8 py-4 text-lg"
                                    onClick={() => {
                                        window.open(hero.videoUrl, '_blank');
                                    }}
                                >
                                    {hero.secondaryButton}
                                </Button>
                            </div>
                        </div>

                        {/* Hero Illustration/Icon */}
                        <div className="flex justify-center relative order-1 md:order-2">
                            <div className="absolute inset-0 bg-primary/20 rounded-full blur-[60px] md:blur-[100px] animate-pulse"></div>
                            <span className="material-icons-round text-primary text-9xl md:text-[200px] relative z-10 drop-shadow-2xl transform rotate-12 hover:rotate-0 transition-transform duration-700">
                                volunteer_activism
                            </span>
                        </div>
                    </div>
                </section>

                {/* Wave Divider (Simplified for React) */}
                <div className="w-full overflow-hidden leading-[0] mb-6">
                    {/* SVG path omitted for brevity, but would go here */}
                    <div className="h-10 bg-gradient-to-b from-transparent to-white/0"></div>
                </div>

                {/* Grid Section */}
                <section id="explore-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                        <div>
                            <h2 className="text-3xl font-bold text-slate-800 dark:text-white pr-4 border-r-8 border-primary">
                                {sectionTitle}
                            </h2>
                            <p className="text-slate-500 mt-2 pr-4 italic">اكتشف المعلومات اللي تهمك</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {cards.map((card) => (
                            <Card
                                key={card.id}
                                title={card.title}
                                subtitle={card.subtitle}
                                icon={card.icon}
                                color={card.color}
                                isImportant={card.isImportant}
                                isNew={card.isNew}
                                badgeText={card.badgeText}
                                onClick={() => handleCardClick(card.id)}
                            />
                        ))}
                    </div>
                </section>

                {/* Stats Section (Moved from old footer) */}
                <section className="bg-slate-50 dark:bg-slate-900 overflow-hidden relative py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                            {footer.stats.map((stat, i) => (
                                <div key={i} className="text-center p-8 bg-white dark:bg-slate-800 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-700">
                                    <h4 className="text-5xl font-bold text-primary mb-2 font-display">{stat.value}</h4>
                                    <span className="text-slate-500 font-medium">{stat.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default LandingPage;
