import "./ui/global.css";
import Script from "next/script";
import css from "./ui/home.module.css";
import StudioSunneLogo from "./ui/studio-sunne-logo";
import Link from "next/link";
import { headers } from "next/headers";

export const metadata = {
  title: "Studio Sunne",
  description: "Creative studio specialising in web design.",
};

export default async function RootLayout({ children }) {
  const headersList = headers();
  const pathname = headersList.get("x-invoke-path") || "";
  console.log("pathname", pathname);

  return (
    <html lang="en">
      <head>
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />

        <Script id="google-analytics">
          {`    
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', "${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}");
          `}
        </Script>
      </head>
      <body
        style={{
          backgroundColor: pathname.includes("work") ? "#e9e7e5" : "#395fff",
        }}
      >
        {children}
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
                  color: pathname.includes("work") ? "#a09f3b" : "#d4d0be",
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
                  color: pathname.includes("work") ? "#a09f3b" : "#d4d0be",
                }}
              >
                <p className={css.menuRightNavWork}>Work</p>
              </Link>
              <Link
                className={css.menuRightNavText}
                href={"/info"}
                style={{
                  color: pathname.includes("work") ? "#a09f3b" : "#d4d0be",
                }}
              >
                <p>Info</p>
              </Link>
            </div>
            <a
              style={{
                color: pathname.includes("work") ? "#a09f3b" : "#d4d0be",
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
                  color: pathname.includes("work") ? "#a09f3b" : "#d4d0be",
                }}
              >
                @studiosunne
              </p>
            </a>
          </div>
        </div>
      </body>
    </html>
  );
}
