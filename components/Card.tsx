import React from 'react';
import clsx from 'clsx';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  value: React.ReactNode;
  bgColor?: string;
  textColor?: string;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ title, value, bgColor = 'bg-white', textColor = 'text-gray-700', className, ...props }, ref) => {
    return (
      <div ref={ref} className={clsx(bgColor, 'shadow rounded-lg p-6', className)} {...props}>
        <h2 className={clsx('text-lg font-medium mb-2', textColor)}>{title}</h2>
        <p className={clsx('text-3xl font-bold', textColor)}>{value}</p>
      </div>
    );
  }
);

Card.displayName = 'Card';

export default Card;
