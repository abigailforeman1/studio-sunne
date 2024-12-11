import "./ui/global.css";

export const metadata = {
  title: "Studio Sunne",
  description: "Creative studio specialising in web design.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
