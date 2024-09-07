import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "../../components/Navbar";
import "./globals.css";
import AdminSideBar from "@/components/Admin/AdminSideBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Admin Panel",
  description: "Admin Panel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <div className='relative flex w-full h-screen bg-gray-100'>
            <AdminSideBar />
            <div className="w-full flex-1 p-4">
            {children}
            </div>
          </div>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
