import "./globals.css";
import ClientLayout from "./components/ClientLayout";

export const metadata = {
  title:
    "NEKO SOFTWARE ENGINEERING CO.,LTD. | บริษัท เนโก๊ะ ซอฟแวร์ เอนจิเนียริ่ง",
  description:
    "บริการพัฒนาซอฟต์แวร์และรับทำเว็บไซต์ที่มีคุณภาพสูง เพื่อตอบโจทย์ความต้องการของลูกค้า",
  author: "NEGO Software Engineering | บริษัท เนโก๊ะ ซอฟแวร์ เอนจิเนียริ่ง",
  keywords: [
    "software",
    "web development",
    "consulting",
    "custom software",
    "technology",
    "ซอฟต์แวร์",
    "การพัฒนาเว็บไซต์",
    "การให้คำปรึกษา",
  ],
  robots: {
    content: "index,follow",
  },
  googlebot: {
    content: "index,follow",
  },
  openGraph: {
    title: "NEKO SOFTWARE ENGINEERING CO.,LTD.",
    description:
      "บริการพัฒนาซอฟต์แวร์และรับทำเว็บไซต์ที่ตอบโจทย์ความต้องการของลูกค้า",
    image: "https://example.com/og-image.jpg",
    url: "https://example.com",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NEKO SOFTWARE ENGINEERING CO.,LTD.",
    description:
      "บริการพัฒนาซอฟต์แวร์และรับทำเว็บไซต์ที่ตอบโจทย์ความต้องการของลูกค้า",
    image: "https://example.com/twitter-image.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="th">
      <head>
        {/* SEO meta tags */}
        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />
        <meta name="description" content={metadata.description} />
        <meta name="author" content={metadata.author} />
        <meta name="keywords" content={metadata.keywords.join(", ")} />
        <link rel="icon" type="image/icon" href="logo/neko.png" size="48x48" />

        {/* Open Graph meta tags (for social media sharing) */}
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta
          property="og:description"
          content={metadata.openGraph.description}
        />
        <meta property="og:image" content={metadata.openGraph.image} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:type" content={metadata.openGraph.type} />

        {/* Twitter meta tags */}
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta
          name="twitter:description"
          content={metadata.twitter.description}
        />
        <meta name="twitter:image" content={metadata.twitter.image} />

        {/* Apple touch icon */}
        <link rel="apple-touch-icon" href="/apple-icon.png" />

        {/* For mobile devices */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Charset meta tag */}
        <meta charSet="UTF-8" />

        {/* Canonical link to avoid duplicate content */}
        <link rel="canonical" href="https://example.com" />
      </head>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
