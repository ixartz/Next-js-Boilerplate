"use client";
import { useTranslations } from "next-intl";
import { AppConfig } from "@/utils/AppConfig";
import NavMain from "/src/components/tailwind-ui/application-ui/navigation/navbars/dark_with_quick_action";
import SideNavWithExpandableSections from "/src/components/tailwind-ui/application-ui/navigation/sidebar-navigation/with_expandable_sections";
import TabsBarWithUnderline from "/src/components/tailwind-ui/application-ui/navigation/tabs/bar_with_underline_header";

const BaseTemplate = (props: {
  // leftNav: React.ReactNode;
  // rightNav?: React.ReactNode;
  children: React.ReactNode;
}) => {
  const t = useTranslations("BaseTemplate");

  return (
    <div className="w-full text-gray-700 antialiased">
      <div className="mx-auto">
        <header className=" bg-green-800 px-3 sm:px-6">
          {/* <div className="pb-8 pt-16">
            <h1 className="text-3xl font-bold text-gray-900">
             
            </h1>
            <h2 className="text-xl">{t("description")}</h2>
          </div> */}

          <div>
            <nav className="w-full">
              <ul className="flex flex-wrap gap-x-5 text-xl w-full">
                {/* {props.leftNav} */}
                <NavMain />
              </ul>
            </nav>

            <nav className="w-full bg-green-800">
              <div className="mx-auto max-w-screen-xl">
                <TabsBarWithUnderline />
              </div>
            </nav>
            {/* <nav>
              <ul className="flex flex-wrap gap-x-5 text-xl">
                {props.rightNav}
              </ul>
            </nav> */}
          </div>
        </header>

        <main className="mx-auto max-w-screen-xl pt-4 px-3 sm:px-6">
          <div className="flex w-full">
            <div className="w-64 mr-4 hidden sm:block">
              <SideNavWithExpandableSections />
            </div>
            <div className="w-full">{props.children}</div>
          </div>
        </main>

        <footer className="border-t border-gray-300 py-8 text-center text-sm">
          © Copyright {new Date().getFullYear()} {AppConfig.name}.
          {` ${t("made_with")} `}
          <a
            href="https://moltoseo.co.uk"
            className="text-blue-700 hover:border-b-2 hover:border-blue-700"
          >
            Molto SEO
          </a>
          .
        </footer>
      </div>
    </div>
  );
};

export { BaseTemplate };
