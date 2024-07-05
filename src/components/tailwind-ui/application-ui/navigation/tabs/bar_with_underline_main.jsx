import React from 'react';

const tabs = [
  { name: 'home', href: '#', current: true },
  { name: 'in-play', href: '#', current: false },
  { name: 'upcoming', href: '#', current: false },
  { name: 'streaming', href: '#', current: false },
  { name: 'free bets', href: '#', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function TabsBarWithUnderlineMain() {
  // Find the default tab name, fallback to the first tab if none are marked as current
  const defaultTabName = tabs.find((tab) => tab.current)?.name || 'home'; //** this should be dynamic like tabs[0].name */

  return (
    <div className="w-full">
      <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">
          Select a tab
        </label>
        <select
          id="tabs"
          name="tabs"
          className="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
          defaultValue={defaultTabName}
        >
          {tabs.map((tab) => (
            <option key={tab.name}>{tab.name}</option>
          ))}
        </select>
      </div>
      <div className="hidden sm:block w-full bg-gray-800">
        <nav className="isolate flex max-w-[600px]" aria-label="Tabs">
          {tabs.map((tab) => (
            <a
              key={tab.name}
              href={tab.href}
              className={classNames(
                tab.current ? 'bg-green-900' : 'bg-gray-800 hover:bg-green-900',
                'uppercase group relative min-w-0 flex-1 overflow-hidden py-2 px-2 bg-black text-center text-xs font-medium text-white hover:bg-gray-50 focus:z-10',
              )}
              aria-current={tab.current ? 'page' : undefined}
            >
              <span>{tab.name}</span>
              <span
                aria-hidden="true"
                className={classNames(
                  tab.current ? 'bg-indigo-500' : 'bg-transparent',
                  'absolute inset-x-0 bottom-0 h-0.5',
                )}
              />
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
