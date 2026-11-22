import { IBM_Plex_Sans_Arabic } from "next/font/google";
import "./globals.css";

const sans = IBM_Plex_Sans_Arabic({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-sans",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0d1117",
  colorScheme: "dark", // dark canvas immediately: no white flash while CSS loads
};

export const metadata = { formatDetection: { telephone: false, email: false, address: false } };

// dir/lang are set here for the default locale.
// When English is added, derive them from card.locale (see roadmap).
export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl" className={sans.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
