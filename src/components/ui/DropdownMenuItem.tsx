import React, { ReactNode } from 'react';

import classNames from 'classnames';

interface DropdownMenuItemProps {
  children: ReactNode;
  onClick: () => void;
  selected?: boolean;
}

export const DropdownMenuItem: React.FC<DropdownMenuItemProps> = ({
  children,
  onClick,
  selected,
}) => {
  return (
    <div
      className={classNames(
        'cursor-pointer flex items-center px-4 py-2 text-sm',
        {
          'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-100':
            selected,
          'hover:bg-gray-100 dark:hover:bg-gray-700 hover:border hover:border-gray-400 dark:hover:border-gray-500 rounded-md':
            !selected,
          'text-gray-700 dark:text-gray-100': true,
        },
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
