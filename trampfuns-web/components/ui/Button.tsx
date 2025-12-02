import React from 'react';
import { cn } from '@/lib/utils/cn';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, asChild = false, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2';

    const variants = {
      primary: 'bg-gradient-to-r from-[#00B8D4] to-[#2196F3] text-white hover:shadow-lg hover:scale-105 focus:ring-[#00B8D4]',
      secondary: 'bg-gradient-to-r from-[#E91E63] to-[#9C27B0] text-white hover:shadow-lg hover:scale-105 focus:ring-[#E91E63]',
      outline: 'border-2 border-[#00B8D4] text-[#00B8D4] hover:bg-[#00B8D4] hover:text-white focus:ring-[#00B8D4]',
      ghost: 'text-[#00B8D4] hover:bg-[#00B8D4]/10 focus:ring-[#00B8D4]',
    };

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    };

    const classes = cn(baseStyles, variants[variant], sizes[size], className);

    if (asChild) {
      return React.cloneElement(children as React.ReactElement, {
        className: classes,
      });
    }

    return (
      <button
        ref={ref}
        className={classes}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
