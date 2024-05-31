import React, { ReactNode } from 'react';

interface DropdownMenuProps {
  children: ReactNode;
}

export const DropdownMenu: React.FC<DropdownMenuProps> = ({ children }) => {
  return <div className='relative inline-block text-left'>{children}</div>;
};
