import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "What's Your Coffee Personality?",
  description: "Answer 5 questions to discover your coffee personality type.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ margin: 0, background: '#fff' }}>{children}</body>
    </html>
  );
}
