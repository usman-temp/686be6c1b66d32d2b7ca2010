'use client';

import { useTheme } from '../providers';

export default function Footer() {
  const { theme, toggleTheme } = useTheme();

  return (
    <footer className="py-8 border-t border-gray-200 dark:border-gray-800 mt-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            {theme === 'dark' ? '🌞' : '🌙'}
          </button>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
              Facebook
            </a>
            <a href="#" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
              Twitter
            </a>
            <a href="#" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
              Instagram
            </a>
          </div>
        </div>
        <div className="text-sm text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} Culinary Canvas. All rights reserved.
        </div>
        <form className="flex gap-2">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>
    </footer>
  );
}