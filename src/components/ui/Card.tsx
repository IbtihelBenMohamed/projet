import React from 'react';

interface CardProps {
    title: string;
    subtitle: string;
    icon: string;
    color: string; // 'blue' | 'indigo' | 'red' | 'green' | 'purple' | 'yellow' | 'teal' | 'gray'
    isImportant?: boolean;
    isNew?: boolean;
    badgeText?: string;
    onClick?: () => void;
    className?: string; // Allow external layout classes (like col-span-2)
}

const colorMap: Record<string, { bg: string; text: string; iconBg: string }> = {
    blue: { bg: 'bg-white', text: 'text-blue-600', iconBg: 'bg-blue-100' },
    indigo: { bg: 'bg-white', text: 'text-indigo-600', iconBg: 'bg-indigo-100' },
    red: { bg: 'bg-red-50 border-red-100', text: 'text-red-600', iconBg: 'bg-red-100' }, // Special styling for red/important
    green: { bg: 'bg-white', text: 'text-green-600', iconBg: 'bg-green-100' },
    purple: { bg: 'bg-white', text: 'text-purple-600', iconBg: 'bg-purple-100' },
    yellow: { bg: 'bg-white', text: 'text-yellow-600', iconBg: 'bg-yellow-100' },
    teal: { bg: 'bg-white', text: 'text-teal-600', iconBg: 'bg-teal-100' },
    gray: { bg: 'bg-white', text: 'text-gray-600', iconBg: 'bg-gray-100' },
};

export const Card: React.FC<CardProps> = ({
    title,
    subtitle,
    icon,
    color,
    isImportant,
    isNew,
    badgeText,
    onClick,
    className = '',
}) => {
    const styles = colorMap[color] || colorMap.blue;
    const containerBase = "group p-5 rounded-2xl shadow-card hover:shadow-soft transition-all duration-300 border border-slate-100 dark:border-slate-700 cursor-pointer relative overflow-hidden";
    // Override background for non-red cards to ensure consistent dark mode support if needed, 
    // but following the extracted HTML logic where 'red' has specific bg classes.
    const containerBg = isImportant ? "bg-red-50 dark:bg-red-900/20 border-red-100 dark:border-red-900/30" : "bg-white dark:bg-slate-800";

    return (
        <div
            className={`${containerBase} ${containerBg} ${className}`}
            onClick={onClick}
        >
            {/* Badges */}
            {isImportant && badgeText && (
                <div className="absolute top-4 left-4 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-full animate-pulse shadow-sm">
                    {badgeText}
                </div>
            )}
            {isNew && badgeText && (
                <div className="absolute top-3 left-3 bg-primary text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                    {badgeText}
                </div>
            )}

            {/* Content Layout */}
            <div className={`flex ${isImportant ? 'items-start gap-4' : 'flex-col'}`}>
                <div className={`${isImportant ? 'w-12 h-12 text-2xl' : 'w-10 h-10 mb-3'} rounded-full ${styles.iconBg} dark:bg-opacity-20 ${styles.text} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                    <span className={`material-icons-round ${isImportant ? 'text-2xl' : ''}`}>{icon}</span>
                </div>

                <div>
                    <h3 className={`font-bold text-slate-800 dark:text-white mb-1 ${isImportant ? 'text-lg' : ''}`}>
                        {title}
                    </h3>
                    <p className={`text-xs ${isImportant ? 'text-sm text-slate-600 dark:text-slate-300' : 'text-slate-500'}`}>
                        {subtitle}
                    </p>
                </div>
            </div>
        </div>
    );
};
