import { GoogleAnalytics } from "@next/third-parties/google";
import "../src/styles/reset.css";

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
        <div id="root">{children}</div>
      </body>
      <GoogleAnalytics gaId="G-DTLMH53VRC" />
    </html>
  );
}
