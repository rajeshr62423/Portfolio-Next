import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const spaceGroteskBody = Space_Grotesk({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_NAME,
  description: SITE_DESCRIPTION,
  keywords: [
    "Rajesh R",
    "Full Stack Developer",
    "Full Stack Developer Chennai",
    "React.js Developer Chennai",
    "Node.js Developer Chennai",
    "NestJS Developer",
    "MERN Stack Developer Chennai",
    "React Native Developer",
    "Next.js Developer",
    "ERP Developer",
  ],
  authors: [{ name: "Rajesh R" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Rajesh R",
  url: SITE_URL,
  jobTitle: "Full Stack Developer",
  email: "mailto:rajeshravichandrans2001@gmail.com",
  telephone: "+91-63820-22243",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Chennai",
    addressRegion: "Tamil Nadu",
    addressCountry: "IN",
  },
  sameAs: [
    "https://www.linkedin.com/in/rajesh-ravichandran-290185244",
    "https://github.com/rajeshr62423",
  ],
  knowsAbout: [
    "React.js",
    "React Native",
    "Next.js",
    "Node.js",
    "NestJS",
    "Prisma ORM",
    "PostgreSQL",
    "MongoDB",
    "TypeScript",
  ],
};

const themeInitScript = `
  document.documentElement.classList.add('js');
  (function(){
    var t;
    try{ t = localStorage.getItem('theme'); }catch(e){}
    if(!t){ t = (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) ? 'light' : 'dark'; }
    document.documentElement.setAttribute('data-theme', t);
    var fav = document.getElementById('theme-favicon');
    if(fav) fav.setAttribute('href', t === 'light' ? '/fav-light.png' : '/fav-dark.png');
  })();
`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${spaceGroteskBody.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <link
          id="theme-favicon"
          rel="icon"
          type="image/png"
          href="/fav-dark.png"
        />
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
