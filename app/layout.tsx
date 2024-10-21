import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

import { Josefin_Sans } from 'next/font/google';
const josefin = Josefin_Sans({
	subsets: ['latin'],
	display: 'swap'
});

export const metadata: Metadata = {
  title: {
		template: '%s - Insights Hub',
		default: 'Welcome - Insights Hub'
	},
  description: "A dashboard to visualized customer data",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} antialiased flex h-screen`}
      >
        <aside className='h-full flex-1'>
        <Sidebar />
      </aside>
      <main className='h-full p-6 w-full'>
        {children}
      </main>
      </body>
    </html>
  );
}
