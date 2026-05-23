import type { Metadata } from "next";
import "./globals.css";
import { MotionProvider } from "@/components/providers/MotionProvider";

export const metadata: Metadata = {
  title: "Yash Bhalerao | SWE",
  description:
    "Portfolio of Yash Bhalerao — Software Engineer based in New York City.",
  openGraph: {
    title: "Yash Bhalerao | SWE",
    description:
      "Portfolio of Yash Bhalerao — Software Engineer based in New York City.",
    url: "https://bhaleraoyash.github.io",
    siteName: "Yash Bhalerao",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yash Bhalerao | SWE",
    description:
      "Portfolio of Yash Bhalerao — Software Engineer based in New York City.",
  },
  icons: {
    icon: "/icons/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full antialiased">
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
