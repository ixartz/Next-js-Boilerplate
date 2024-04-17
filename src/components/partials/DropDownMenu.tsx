import React from 'react';

export interface DropDownMenuProps {
  menus?: {
    render: React.ReactNode;
    link: string;
  }[];
  render: React.ReactNode;
}

export default function DropDownMenu({ menus, render }: DropDownMenuProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex w-full justify-center gap-x-1.5 rounded-xl bg-primary-50 px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-primary-200"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
          onClick={() => setOpen(!open)}
        >
          {render}
        </button>
      </div>
      {open && (
        <div
          className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-primary-50 shadow-lg ring-1 ring-black focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
        >
          <div className="py-1" role="none">
            {menus?.map((menu, index) => (
              <a
                key={menu.link}
                href={menu.link}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-200"
                role="menuitem"
                id={`menu-item-${index + 1}`}
              >
                {menu.render}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
