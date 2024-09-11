import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "../../components/Navbar";
import "./globals.css";
import AdminSideBar from "@/components/Admin/AdminSideBar";
import UploadImageModal from "@/components/Admin/UploadImageModal";
import ImageModal from "@/components/Admin/ImageModal";
import { Suspense } from "react";

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
    <html lang="en">
      <body className={inter.className}>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <Suspense fallback={<div>Loading...</div>}>
            <div className="relative flex w-full h-screen bg-gray-100">
              <AdminSideBar />
              <UploadImageModal />
              <ImageModal />
              <div className="w-full flex-1 p-4 overflow-auto">{children}</div>
            </div>
          </Suspense>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
