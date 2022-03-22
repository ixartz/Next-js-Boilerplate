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

  return (
    <ul className="flex space-x-3">
      <Link href="/">
        <a className="inline-block text-primary">{Config.title}</a>
      </Link>
      <p className="text-tertiary">/</p>
      {menu.map((item) => (
        <Link href={item.path}>
          <a
            className={`cursor-pointer ${
              router.pathname === item.path ||
              item.path.includes(router.query.id ? queryId() : "xxxxx") ||
              (router.pathname.includes(item.path) && item.path !== "/")
                ? "text-primary"
                : "text-secondary"
            }`}
          >
            {item.title}
          </a>
        </Link>
      ))}
    </ul>
  );
}
