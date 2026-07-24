import { GoogleAnalytics } from "@next/third-parties/google";
import { Lato } from "next/font/google";
import "../src/styles/reset.css";
import "../src/styles/App.sass";

const lato = Lato({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "easyASCII - A Simple ASCII List",
  description: "A simple, easy-to-use list of ASCII codes to copy and paste.",
  openGraph: {
    title: "easyASCII - A Simple ASCII List",
    description: "A simple, easy-to-use list of ASCII codes to copy and paste.",
    url: "https://easyascii.com",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div id="root" className={lato.className}>
          {children}
        </div>
      </body>
      <GoogleAnalytics gaId="G-DTLMH53VRC" />
    </html>
  );
}
