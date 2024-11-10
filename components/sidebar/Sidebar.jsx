"use client";
import Image from "next/image";
import Link from "next/link";
import sidebarData from "../../data/sidebarData";
import CopyRight from "../CopyRight";
import { isActiveLink } from "../../utilis/linkActiveChecker";

import { useState } from "react";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const router = usePathname();
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      <div className="header">
        <div className="header-inner">
          <div className="logo">
            <Link className="navbar-brand" href="/">
              <Image
                width={40}
                height={40}
                src="/img/logo/dark.png"
                alt="brand"
              />
            </Link>
          </div>

          <div className="my_trigger" onClick={handleClick}>
            <div
              className={
                click
                  ? "hamburger hamburger--collapse-r is-active"
                  : "hamburger"
              }
            >
              <div className="hamburger-box">
                <div className="hamburger-inner"></div>
              </div>
            </div>
            {/* End hamburger menu */}
          </div>
        </div>
      </div>

      {/* START LEFT MENU CONTENT */}
      <div className={click ? "leftpart active" : "leftpart"}>
        <div className="leftpart_inner">
          <div className="logo">
            <Link className="navbar-brand" href="/">
              <Image
                width={55}
                height={55}
                src="/img/logo/dark.png"
                alt="brand"
              />
            </Link>
          </div>
          {/* END LOGO */}

          <div className="menu">
            <ul>
              {sidebarData.map((item) => (
                <li key={item.id} onClick={handleClick}>
                  <Link
                    className={`${
                      isActiveLink(item.routePath, router) ? "active " : ""
                    }`}
                    href={item.routePath}
                  >
                    <Image
                      width={15}
                      height={15}
                      className="svg"
                      src={item.icon}
                      alt="homerun"
                    />
                    <span className="menu_content">{item.menuName}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* END MENU */}

          <CopyRight />
          {/* END COPYRIGHT */}
        </div>
      </div>
      {/* END LEFT MENU CONTENT */}
    </>
  );
};

export default Sidebar;
