import { useTheme } from 'next-themes';
import React from 'react';
import { ContactSpiel } from './ContactSpiel';

export default function Footer() {
  const { theme, setTheme } = useTheme();

  const darkModeIcon = () => {
    if (theme === 'dark') {
      return 'M8 2V0H7v2h1zm-4.793.498L1.5.792.793 1.5 2.5 3.206l.707-.708zm9.293.708L14.207 1.5 13.5.792l-1.707 1.706.707.708zm-5 .791a3.499 3.499 0 100 6.996 3.499 3.499 0 100-6.996zM2 6.995H0v1h2v-1zm13 0h-2v1h2v-1zM1.5 14.199l1.707-1.707-.707-.707-1.707 1.706.707.708zm12.707-.708L12.5 11.785l-.707.707L13.5 14.2l.707-.708zM8 14.99v-1.998H7v1.999h1z';
    }
    return 'M7.707.003a.5.5 0 00-.375.846 6 6 0 01-5.569 10.024.5.5 0 00-.519.765A7.5 7.5 0 107.707.003z';
  };

  return (
    <footer className="pt-12">
      <hr />
      <ContactSpiel footer />
      <p>
        Subscribe to my email newsletter at{' '}
        <a
          href="https://world.hey.com/sam.stephenson"
          title="Sam Stephenson's email newsletter"
        >
          world.hey.com/sam.stephenson
        </a>
      </p>
      <div className="flex space-x-6 text-secondary mt-12">
        <div>©{new Date().getFullYear()}</div>
        <a
          href="https://plausible.io/samstephenson.com"
          title="analytics"
          className="text-gray-500 dark:text-gray-400"
        >
          Stats
        </a>
        <button
          aria-label="Toggle Dark Mode"
          type="button"
          className="ml-4"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          <svg
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
          >
            <path d={darkModeIcon()} fill="currentColor" />
          </svg>
        </button>
      </div>
    </footer>
  );
}
