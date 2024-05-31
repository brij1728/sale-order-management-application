import React, { ReactNode, useEffect, useRef } from 'react';

import classNames from 'classnames';

interface DropdownMenuContentProps {
  align?: 'start' | 'end';
  children: ReactNode;
  className?: string;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export const DropdownMenuContent: React.FC<DropdownMenuContentProps> = ({
  align = 'start',
  children,
  className,
  open,
  onOpenChange,
}) => {
  const alignment = align === 'end' ? 'right-0' : 'left-0';
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        contentRef.current &&
        !contentRef.current.contains(event.target as Node)
      ) {
        if (onOpenChange) {
          onOpenChange(false);
        }
      }
    };

    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open, onOpenChange]);

  if (!open) return null;

  return (
    <div
      ref={contentRef}
      className={classNames(
        `absolute ${alignment} mt-2 w-36 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg outline-none`,
        className,
        { hidden: !open },
      )}
    >
      {children}
    </div>
  );
};
