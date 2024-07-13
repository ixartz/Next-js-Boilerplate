import { AppConfig } from '@/utils/AppConfig'

const BaseTemplate = (props: {
  leftNav: React.ReactNode
  rightNav?: React.ReactNode
  siteNav?: React.ReactNode
  children: React.ReactNode
}) => {
  return (
    <div className="w-full antialiased h-full">
      <div className="mx-auto">
        <header>
          <div className="flex justify-between items-center bg-yellow px-4 sm:px-8">
            <div className="flex justify-between items-center gap-x-3 py-3">
              <a href="/">
                <img
                  className="mx-auto"
                  src="/assets/images/logo/casa-dourada.webp"
                  alt={AppConfig.name}
                  loading="eager"
                  width={90}
                  // height={40}
                />
              </a>
              <nav>
                <ul className="list-none flex flex-wrap text-xl">
                  {props.leftNav}
                </ul>
              </nav>
            </div>
            <nav>
              <ul className="flex flex-wrap gap-x-5 text-xl">
                {props.rightNav}
              </ul>
            </nav>
          </div>
          <nav>
            <ul className="temp-css hidden lg:flex list-none justify-center gap-x-5 pt-2.5 items-center">
              {props.siteNav}
            </ul>
          </nav>
        </header>

        <main className="mx-auto lg:mt-2.5 w-full">
          <div className="flex w-full">
            <div className="w-full">{props.children}</div>
          </div>
        </main>

        {/* border-t border-gray-300  */}
        <footer className="py-8 text-center text-sm">
          © Direitos Autorais {new Date().getFullYear()} {AppConfig.name}
        </footer>
      </div>
    </div>
  )
}

export { BaseTemplate }
