import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SMA An-Nuriyyah Bumiayu | Membentuk Generasi Ulil Albab",
  description:
    "Sekolah Islami berbasis Al-Qur'an & karakter. Lingkungan pesantren yang aman dan terarah dengan fasilitas lengkap & pembelajaran modern.",
  keywords: [
    "SMA An-Nuriyyah",
    "Bumiayu",
    "Sekolah Islam",
    "Pesantren",
    "PPDB",
    "Pendaftaran",
  ],
  openGraph: {
    title: "SMA An-Nuriyyah Bumiayu",
    description: "Membentuk Generasi Ulil Albab",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={`${poppins.className} antialiased`}>{children}</body>
    </html>
  );
}
