import "./ui/global.css";
import Script from "next/script";
import { Footer } from "./components/Footer";

export const metadata = {
  title: "Studio Sunne",
  description: "Creative studio specialising in web design.",
  themeColor: "#395fff",
};

export default async function RootLayout({ children }) {
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
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
