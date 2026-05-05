import { AppConfig } from '@/utils/AppConfig';

export const BaseTemplate = (props: {
  leftNav: React.ReactNode;
  rightNav?: React.ReactNode;
  children: React.ReactNode;
}) => (
  <div className="w-full px-1 text-gray-700 antialiased">
    <div className="mx-auto max-w-4xl">
      <header className="border-b border-gray-300">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-8">
            <h1 className="text-xl font-bold text-gray-900">{AppConfig.name}</h1>
            <nav>
              <ul className="flex flex-wrap gap-x-5 text-base">{props.leftNav}</ul>
            </nav>
          </div>
          <nav>
            <ul className="flex flex-wrap gap-x-5 text-base">{props.rightNav}</ul>
          </nav>
        </div>
      </header>

      <main>{props.children}</main>
    </div>
  </div>
);
