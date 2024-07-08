'use client';

import { Disclosure } from '@headlessui/react';
import { ChevronRightIcon } from '@heroicons/react/20/solid';

// const popular = [
//   { name: "Euro 2024", href: "#", current: false },
//   { name: "Wimbledon", href: "#", current: false },
//   { name: "Tour de France", href: "#", current: false },
// ];
const navigation = [
  { name: 'American Football', bets: 100, href: '#', current: false },
  { name: 'Australian Rules', bets: 100, href: '#', current: false },
  { name: 'Badminton', bets: 100, href: '#', current: false },
  {
    name: 'Basketbal',
    bets: 100,
    href: '#',
    current: false,
    children: [
      { name: 'NBA', href: '#', current: false },
      { name: 'EuroLeague', href: '#', current: false },
    ],
  },
  { name: 'Beachvolleybal', bets: 100, href: '#', current: false },
  { name: 'Boksen', bets: 100, href: '#', current: false },
  { name: 'Bowlen', bets: 100, href: '#', current: false },
  { name: 'Cricket', bets: 100, href: '#', current: false },
  { name: 'Darts', bets: 100, href: '#', current: false },
  { name: 'Formule 1', bets: 100, href: '#', current: false },
  { name: 'Golf', bets: 100, href: '#', current: false },
  { name: 'Handbal', bets: 100, href: '#', current: false },
  { name: 'Honkbal', bets: 100, href: '#', current: false },
  { name: 'IJshockey', bets: 100, href: '#', current: false },
  { name: 'Lacrosse', bets: 100, href: '#', current: false },
  { name: 'Motorsport', bets: 100, href: '#', current: false },
  { name: 'Netbal', bets: 100, href: '#', current: false },
  { name: 'Olympische Spelen', bets: 100, href: '#', current: false },
  { name: 'Paardenraces', bets: 100, href: '#', current: false },
  { name: 'Rugby League', bets: 100, href: '#', current: false },
  { name: 'Rugby Union', bets: 100, href: '#', current: false },
  { name: 'Snooker', bets: 100, href: '#', current: false },
  { name: 'Tafeltennis', bets: 100, href: '#', current: false },
  { name: 'Tennis', bets: 100, href: '#', current: false },
  { name: 'Trotting', bets: 100, href: '#', current: false },
  { name: 'UFC/MMA', bets: 100, href: '#', current: false },
  { name: 'Uniboosts', bets: 100, href: '#', current: false },
  { name: 'Virtual Sports', bets: 100, href: '#', current: false },
  { name: 'Voetbal', bets: 100, href: '#', current: false },
  { name: 'Volleybal', bets: 100, href: '#', current: false },
  { name: 'Wielrennen', bets: 100, href: '#', current: false },
  { name: 'Wintersport', bets: 100, href: '#', current: false },
  // {
  //   name: 'Teams',
  //   current: false,
  //   children: [
  //     { name: 'Engineering', href: '#' },
  //     { name: 'Human Resources', href: '#' },
  //     { name: 'Customer Success', href: '#' },
  //   ],
  // },
  // {
  //   name: 'Projects',
  //   current: false,
  //   children: [
  //     { name: 'GraphQL API', href: '#' },
  //     { name: 'iOS App', href: '#' },
  //     { name: 'Android App', href: '#' },
  //     { name: 'New Customer Portal', href: '#' },
  //   ],
  // },
  // { name: 'Calendar', href: '#', current: false },
  // { name: 'Documents', href: '#', current: false },
  // { name: 'Reports', href: '#', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function SideNavWithExpandableSections() {
  return (
    <div className="flex grow flex-col overflow-y-auto bg-white">
      <div className="flex shrink-0 items-center">
        {/* <img
          className="h-8 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        /> */}
      </div>
      <nav className="flex flex-1 flex-col bg-gray-800">
        <ul role="list" className="flex flex-1 flex-col gap-y-7">
          <li>
            <ul role="list" className="space-y-1 py-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  {!item.children ? (
                    <a
                      href={item.href}
                      className={classNames(
                        item.current ? 'bg-gray-700' : 'hover:bg-gray-900',
                        'block px-4 pr-2 text-sm leading-6 font-semibold text-white'
                      )}
                    >
                      <div className="flex justify-between text-xxs">
                        <div>{item.name}</div>
                        <div className="ml-2">{item.bets}</div>
                      </div>
                    </a>
                  ) : (
                    <Disclosure as="div">
                      {({ open }) => (
                        <div className={classNames(open ? 'bg-gray-700' : '')}>
                          <Disclosure.Button
                            className={classNames(
                              item.current
                                ? 'bg-gray-700'
                                : 'hover:bg-gray-700',
                              'flex items-center w-full text-left py-1 px-2 gap-x-1 text-xxs leading-6 font-semibold text-white',
                              open ? 'bg-gray-700' : ''
                            )}
                          >
                            <ChevronRightIcon
                              className={classNames(
                                open
                                  ? 'rotate-90 text-gray-500'
                                  : 'text-gray-400',
                                'h-4 w-4 ml-1 shrink-0 text-xxs'
                              )}
                              aria-hidden="true"
                            />
                            {item.name}
                          </Disclosure.Button>
                          <Disclosure.Panel as="ul">
                            {item.children.map((subItem) => (
                              <li key={subItem.name}>
                                <Disclosure.Button
                                  as="a"
                                  href={subItem.href}
                                  className={classNames(
                                    subItem.current
                                      ? 'bg-gray-600'
                                      : 'hover:bg-gray-600',
                                    'block py-1 pr-2 pl-8 text-xxs leading-6 text-white'
                                  )}
                                >
                                  {subItem.name}
                                </Disclosure.Button>
                              </li>
                            ))}
                          </Disclosure.Panel>
                        </div>
                      )}
                    </Disclosure>
                  )}
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
}
