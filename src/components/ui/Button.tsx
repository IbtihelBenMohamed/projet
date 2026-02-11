import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary';
    icon?: string;
    className?: string;
}

export const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    icon,
    className = '',
    ...props
}) => {
    const baseStyles = "w-full font-medium py-4 px-6 rounded-xl flex items-center justify-center gap-2 transition-all transform active:scale-[0.98]";

    const variants = {
        primary: "bg-primary hover:bg-primary-dark text-white shadow-lg shadow-primary/30 hover:scale-[1.02]",
        secondary: "bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700",
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${className}`}
            {...props}
        >
            <span>{children}</span>
            {icon && (
                <span className={`material-icons-round text-xl ${variant === 'secondary' ? 'text-primary' : ''} ${icon === 'arrow_right_alt' ? 'transform rotate-180' : ''}`}>
                    {icon}
                </span>
            )}
        </button>
    );
};
