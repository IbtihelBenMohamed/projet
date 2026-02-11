import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { QUIZ_QUESTIONS } from '../data/mockData';

const QuizPage: React.FC = () => {
    const navigate = useNavigate();
    const { questions } = QUIZ_QUESTIONS;

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const [score, setScore] = useState(0);
    const [showExplanation, setShowExplanation] = useState(false);

    const currentQuestion = questions[currentQuestionIndex];
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

    const handleOptionSelect = (optionId: string) => {
        if (showExplanation) return;
        setSelectedAnswer(optionId);
    };

    const handleNext = () => {
        if (!selectedAnswer) return;

        if (!showExplanation) {
            if (selectedAnswer === currentQuestion.correctAnswer) {
                setScore(prev => prev + 1);
            }
            setShowExplanation(true);
        } else {
            if (currentQuestionIndex < questions.length - 1) {
                setCurrentQuestionIndex(prev => prev + 1);
                setSelectedAnswer(null);
                setShowExplanation(false);
            } else {
                const finalScore = selectedAnswer === currentQuestion.correctAnswer ? score + 1 : score;
                const percentage = Math.round((finalScore / questions.length) * 100);

                import('../utils/storage').then(({ StorageService }) => {
                    StorageService.saveQuizScore(1, percentage);
                    navigate('/stats', { state: { score: percentage } });
                });
            }
        }
    };

    return (
        <div className="bg-background-light dark:bg-background-dark text-slate-800 dark:text-white font-display min-h-screen relative overflow-x-hidden selection:bg-primary/30" dir="rtl">
            <main className="relative z-10 flex flex-col pb-24 pt-12 items-center">

                {/* Progress Bar Container - Wider for Desktop */}
                <div className="max-w-4xl w-full px-4 sm:px-6 lg:px-8 mb-12">
                    <div className="flex justify-between items-end mb-4">
                        <span className="text-xl font-bold text-primary">سؤال {currentQuestion.id} من {questions.length}</span>
                        <span className="text-sm font-bold text-slate-400">{Math.round(progress)}% مكتمل</span>
                    </div>
                    <div className="w-full bg-slate-100 dark:bg-slate-800 h-4 rounded-full overflow-hidden shadow-inner">
                        <div className="bg-gradient-to-r from-primary to-purple-600 h-full transition-all duration-700 ease-out rounded-full" style={{ width: `${progress}%` }}></div>
                    </div>
                </div>

                <div className="max-w-4xl w-full px-4 sm:px-6 lg:px-8">
                    <section className="bg-white dark:bg-slate-800 rounded-[3rem] p-10 md:p-16 shadow-2xl border border-slate-100 dark:border-slate-700 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-4 h-full bg-primary/20"></div>

                        <h2 className="text-3xl md:text-4xl font-black mb-12 leading-tight text-slate-800 dark:text-white">
                            {currentQuestion.question}
                        </h2>

                        <div className="grid grid-cols-1 gap-6 mb-12">
                            {currentQuestion.options.map((option) => {
                                const isSelected = selectedAnswer === option.id;
                                const isCorrect = option.id === currentQuestion.correctAnswer;
                                const showCorrectness = showExplanation;

                                let buttonClass = "w-full p-8 rounded-[2rem] border-4 text-right transition-all duration-300 flex items-center justify-between group relative overflow-hidden ";

                                if (showCorrectness) {
                                    if (isCorrect) {
                                        buttonClass += "bg-green-50/50 border-green-500 text-green-700 dark:bg-green-900/10 dark:text-green-400";
                                    } else if (isSelected && !isCorrect) {
                                        buttonClass += "bg-red-50/50 border-red-500 text-red-700 dark:bg-red-900/10 dark:text-red-400";
                                    } else {
                                        buttonClass += "bg-white dark:bg-slate-800 border-slate-100 dark:border-slate-700 opacity-40 scale-95";
                                    }
                                } else {
                                    if (isSelected) {
                                        buttonClass += "bg-primary/5 border-primary text-primary shadow-xl scale-[1.02] z-10";
                                    } else {
                                        buttonClass += "bg-white dark:bg-slate-800 border-slate-100 dark:border-slate-700 hover:border-primary/40 hover:translate-x-[-8px]";
                                    }
                                }

                                return (
                                    <button
                                        key={option.id}
                                        onClick={() => handleOptionSelect(option.id)}
                                        disabled={showExplanation}
                                        className={buttonClass}
                                    >
                                        <span className="font-bold text-xl md:text-2xl">{option.text}</span>
                                        <div className="flex items-center gap-4">
                                            {showCorrectness && isCorrect && <span className="material-icons-round text-4xl text-green-500">check_circle</span>}
                                            {showCorrectness && isSelected && !isCorrect && <span className="material-icons-round text-4xl text-red-500">cancel</span>}
                                            {!showCorrectness && (
                                                <div className={`w-8 h-8 rounded-full border-4 transition-colors ${isSelected ? 'bg-primary border-primary ring-4 ring-primary/20' : 'border-slate-200 dark:border-slate-700 group-hover:border-primary/40'}`}></div>
                                            )}
                                        </div>
                                    </button>
                                );
                            })}
                        </div>

                        {showExplanation && (
                            <div className="mb-12 p-8 bg-blue-50 dark:bg-blue-900/20 rounded-3xl border-2 border-blue-100 dark:border-blue-800 animate-fade-in flex gap-6 items-start">
                                <div className="w-12 h-12 rounded-2xl bg-blue-500 text-white flex items-center justify-center shrink-0 shadow-lg">
                                    <span className="material-icons-round text-3xl">lightbulb</span>
                                </div>
                                <div className="flex-1 text-right">
                                    <h4 className="font-black text-blue-800 dark:text-blue-300 text-xl mb-2">هل تعلم؟</h4>
                                    <p className="text-lg text-blue-700 dark:text-blue-200 leading-relaxed">
                                        {currentQuestion.explanation}
                                    </p>
                                </div>
                            </div>
                        )}

                        <div className="flex justify-end">
                            <button
                                onClick={handleNext}
                                disabled={!selectedAnswer}
                                className={`min-w-[280px] py-6 px-10 rounded-2xl font-black text-2xl flex items-center justify-center gap-4 transition-all duration-300 shadow-2xl ${!selectedAnswer
                                    ? 'bg-slate-100 text-slate-400 cursor-not-allowed dark:bg-slate-700'
                                    : 'bg-primary text-white hover:scale-[1.05] hover:shadow-primary/40 active:scale-95'
                                    }`}
                            >
                                <span>{showExplanation ? (currentQuestionIndex < questions.length - 1 ? 'السؤال التالي' : 'عرض النتيجة') : 'تحقق من الإجابة'}</span>
                                <span className="material-icons-round text-3xl transform rotate-180">
                                    {showExplanation ? 'arrow_forward' : 'verified'}
                                </span>
                            </button>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
};

export default QuizPage;
