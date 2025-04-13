"use client";
import React from "react";
import { useState, useEffect } from "react";
import css from "../ui/home.module.css";
import StudioSunneLogo from "../ui/studio-sunne-logo";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Footer() {
  const pathname = usePathname();
  const [footerTextColor, updateFooterTextColor] = useState("#d4d0be");

  useEffect(() => {
    switch (pathname) {
      case "/":
        updateFooterTextColor("#d4d0be");
        break;
      case "/work":
        updateFooterTextColor("#a09f3b");
        break;
      case "/info":
        updateFooterTextColor("#ECEAE8");
        break;
      default:
        break;
    }

    return () => {};
  }, [pathname]);

  return (
    <>
      <div className={css.menu}>
        <div className={css.menuLeftContents}>
          <div className={css.menuLeftContentsLogo}>
            <Link href={"/"}>
              <StudioSunneLogo />
            </Link>
          </div>
          <div className={css.menuLeftContentsInfo}>
            <p
              className={css.menuLeftContentsInfoText}
              style={{
                color: footerTextColor,
              }}
            >
              © Studio Sunne 2025
            </p>
          </div>
        </div>
        <div className={css.menuRightContent}>
          <div className={css.menuRightNav}>
            <Link
              className={css.menuRightNavText}
              href={"/work"}
              style={{
                color: footerTextColor,
              }}
            >
              <p className={css.menuRightNavWork}>Work</p>
            </Link>
            <Link
              className={css.menuRightNavText}
              href={"/info"}
              style={{
                color: footerTextColor,
              }}
            >
              <p>Info</p>
            </Link>
          </div>
          <a
            style={{
              color: footerTextColor,
            }}
            className={css.menuRightContentsInfoText}
            target="_blank"
            rel="noreferrer"
            href="mailto:hello.studio.sunne@gmail.com"
          >
            <p className={css.menuRightContentsInfoText}>
              hello.studio.sunne@gmail.com
            </p>
          </a>

          <a
            className={css.menuRightContentsInfoText}
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/studiosunne/"
          >
            <p
              className={css.menuRightContentsInfoText}
              style={{
                color: footerTextColor,
              }}
            >
              @studiosunne
            </p>
          </a>
        </div>
      </div>
    </>
  );
}
