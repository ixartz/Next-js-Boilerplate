import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { Config } from "../utils/Config";

const menu = [
  { title: "Work", path: "/" },
  { title: "Blog", path: "/blog" },
  { title: "Reading", path: "/bookmarks" },
  { title: "Meanwhile", path: "/meanwhile" },
  { title: "About", path: "/about" },
];

export default function Navigation() {
  const router = useRouter();
  const queryId = () => {
    if (typeof router.query.id === "string") {
      return router.query.id;
    }
    return router.query.id[0];
  };

  const isOnVideo = !!router.query.video;

  const colors = {
    primary: isOnVideo ? "text-white mix-blend-difference" : "text-primary",
    secondary: isOnVideo
      ? "text-white/60 mix-blend-difference"
      : "text-secondary",
    tertiary: isOnVideo
      ? "text-white/30 mix-blend-difference"
      : "text-tertiary",
  };

  return (
    <ul className="flex flex-wrap justify-between md:justify-start gap-x-3">
      <Link href="/">
        <a className={`inline-block ${colors.primary}`}>{Config.title}</a>
      </Link>
      <div className="flex flex-col text-right md:flex-row gap-x-3 gap-y-2">
        <p className={`hidden md:inline ${colors.tertiary}`}>/</p>
        {menu.map((item) => (
          <Link href={item.path}>
            <a
              className={`cursor-pointer ${
                router.pathname === item.path ||
                item.path.includes(router.query.id ? queryId() : "xxxxx") ||
                (router.pathname.includes(item.path) && item.path !== "/")
                  ? colors.primary
                  : colors.secondary
              }`}
            >
              {item.title}
            </a>
          </Link>
        ))}
      </div>
    </ul>
  );
}
