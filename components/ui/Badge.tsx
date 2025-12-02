import React from 'react';
import { cn } from '@/lib/utils/cn';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'cyan' | 'magenta' | 'purple' | 'blue' | 'gray';
  children: React.ReactNode;
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = 'cyan', children, ...props }, ref) => {
    const variants = {
      cyan: 'bg-[#00B8D4]/10 text-[#00B8D4] border-[#00B8D4]/20',
      magenta: 'bg-[#E91E63]/10 text-[#E91E63] border-[#E91E63]/20',
      purple: 'bg-[#9C27B0]/10 text-[#9C27B0] border-[#9C27B0]/20',
      blue: 'bg-[#2196F3]/10 text-[#2196F3] border-[#2196F3]/20',
      gray: 'bg-gray-100 text-gray-700 border-gray-200',
    };

    return (
      <span
        ref={ref}
        className={cn(
          'inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border',
          variants[variant],
          className
        )}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';
