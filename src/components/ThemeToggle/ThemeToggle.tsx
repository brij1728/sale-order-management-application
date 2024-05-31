import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/';
import { Monitor, Moon, Sun } from 'lucide-react';
import React, { useEffect, useState } from 'react';

export const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<string>(
    () => localStorage.getItem('theme') || 'system',
  );
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    const isDark =
      theme === 'dark' ||
      (theme === 'system' &&
        window.matchMedia('(prefers-color-scheme: dark)').matches);

    root.classList.remove('light', 'dark');
    root.classList.add(isDark ? 'dark' : 'light');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme);
    setIsOpen(false); // Close the dropdown menu
  };

  const renderThemeIcon = (currentTheme: string) => {
    switch (currentTheme) {
      case 'light':
        return <Sun className='h-5 w-5' />;
      case 'dark':
        return <Moon className='h-5 w-5' />;
      default:
        return <Monitor className='h-5 w-5' />;
    }
  };

  return (
    <div className='fixed top-4 left-4'>
      <DropdownMenu>
        <DropdownMenuTrigger asChild onClick={() => setIsOpen(!isOpen)}>
          <button
            type='button'
            className='inline-flex justify-center items-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white dark:bg-gray-800 text-sm font-medium text-gray-700 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-1  focus:ring-gray-500 dark:focus:ring-gray-400'
          >
            {renderThemeIcon(theme)}
            <span className='ml-2'>Theme</span>
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align='start'
          open={isOpen}
          onOpenChange={setIsOpen}
        >
          <DropdownMenuItem
            onClick={() => handleThemeChange('system')}
            selected={theme === 'system'}
          >
            <Monitor className='mr-2 h-4 w-4' />
            <span>System</span>
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => handleThemeChange('light')}
            selected={theme === 'light'}
          >
            <Sun className='mr-2 h-4 w-4' />
            <span>Light</span>
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => handleThemeChange('dark')}
            selected={theme === 'dark'}
          >
            <Moon className='mr-2 h-4 w-4' />
            <span>Dark</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
