/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/

const tabs = [
  { name: "sport", href: "#", current: true },
  { name: "casino", href: "#", current: false },
  { name: "live casino", href: "#", current: false },
  { name: "bingo", href: "#", current: false },
  { name: "poker", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function TabsBarWithUnderline() {
  return (
    <div>
      <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">
          Select a tab
        </label>
        {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
        <select
          id="tabs"
          name="tabs"
          className="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
          defaultValue={tabs.find((tab) => tab.current).name}
        >
          {tabs.map((tab) => (
            <option key={tab.name}>{tab.name}</option>
          ))}
        </select>
      </div>
      <div className="hidden sm:block w-1/2">
        <nav
          className="isolate flex"
          aria-label="Tabs"
        >
          {tabs.map((tab, tabIdx) => (
            <a
              key={tab.name}
              href={tab.href}
              className={classNames(
                tab.current
                  ? "bg-green-900"
                  : "bg-green-800 hover:bg-green-900",
                // tabIdx === 0 ? "rounded-l-lg" : "",
                // tabIdx === tabs.length - 1 ? "rounded-r-lg" : "",
                "uppercase group relative min-w-0 flex-1 overflow-hidden py-2 px-2 text-center text-sm font-medium text-white hover:bg-gray-50 focus:z-10"
              )}
              aria-current={tab.current ? "page" : undefined}
            >
              <span>{tab.name}</span>
              <span
                aria-hidden="true"
                className={classNames(
                  tab.current ? "bg-indigo-500" : "bg-transparent",
                  "absolute inset-x-0 bottom-0 h-0.5"
                )}
              />
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
