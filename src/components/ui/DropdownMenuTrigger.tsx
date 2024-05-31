import React, { ReactNode } from 'react';

interface DropdownMenuTriggerProps
  extends React.HTMLAttributes<HTMLDivElement> {
  asChild?: boolean;
  children: ReactNode;
  onClick: () => void;
}

export const DropdownMenuTrigger: React.FC<DropdownMenuTriggerProps> = ({
  asChild,
  children,
  onClick,
  ...props
}) => {
  if (asChild) {
    return (
      <div {...props} onClick={onClick}>
        {children}
      </div>
    );
  }

  const buttonProps = props as React.ButtonHTMLAttributes<HTMLButtonElement>;

  return (
    <button
      className='inline-flex justify-center items-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
      {...buttonProps}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
