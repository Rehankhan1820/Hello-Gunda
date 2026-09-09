
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://hello-gunda.vercel.app"),

  title: {
    default: "HELLO GUNDA | Free Fire Gaming & Guild",
    template: "%s | HELLO GUNDA",
  },

  description:
    "HELLO GUNDA is a Free Fire gaming community and guild from India featuring gameplay videos, ranked matches, custom rooms, funny moments, giveaways and competitive gaming content.",

  keywords: [
    "HELLO GUNDA",
    "Hello Gunda",
    "Gunda Gang",
    "Free Fire",
    "Free Fire India",
    "Free Fire gaming",
    "Free Fire guild",
    "Free Fire gameplay",
    "Free Fire YouTuber",
    "Free Fire community",
    "Free Fire custom room",
    "Free Fire ranked gameplay",
  ],

  authors: [
    {
      name: "HELLO GUNDA",
    },
  ],

  creator: "HELLO GUNDA",

  alternates: {
    canonical: "https://hello-gunda.vercel.app/",
  },

  openGraph: {
    title: "HELLO GUNDA | Free Fire Gaming & Guild",
    description:
      "Free Fire gameplay, custom rooms, ranked matches, funny moments, giveaways and the HELLO GUNDA gaming community.",
    url: "https://hello-gunda.vercel.app/",
    siteName: "HELLO GUNDA",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
        alt: "HELLO GUNDA Free Fire Gaming",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "HELLO GUNDA | Free Fire Gaming & Guild",
    description:
      "HELLO GUNDA Free Fire gaming community featuring gameplay, custom rooms, ranked matches and gaming content.",
    images: ["/logo.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

