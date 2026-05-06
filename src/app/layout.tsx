import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SO-SO | YouTubeサムネイルデザイナー",
  description:
    "YouTubeサムネイルを中心に、視認性・インパクト・世界観を設計するクリエイター SO-SO のポートフォリオサイトです。ゲームコンテンツ特化のデザインが得意です。",
  keywords: ["SO-SO", "YouTubeサムネイル", "サムネイル制作", "ゲーム実況", "デザイナー", "ポートフォリオ"],
  authors: [{ name: "SO-SO" }],
  openGraph: {
    title: "SO-SO | YouTubeサムネイルデザイナー",
    description: "クリックされる理由を、デザインする。YouTubeサムネイル制作のクリエイター SO-SO のポートフォリオ。",
    type: "website",
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
    title: "SO-SO | YouTubeサムネイルデザイナー",
    description: "クリックされる理由を、デザインする。",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
