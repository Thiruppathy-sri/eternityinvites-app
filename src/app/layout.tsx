import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Eternity Invites - offering a unique and memorable way to invite your guests. From weddings to milestone celebrations",
  description:
    "EternityInvites specializes in creating stunning personalized websites for all major events, offering a unique and memorable way to invite your guests. From weddings to milestone celebrations, our expert team combines creativity and technology to craft visually enchanting online invitations. Elevate your event experience with custom-designed websites that capture the essence of your special moments. Embrace the future of invitations, where each event becomes an unforgettable digital experience. Choose EternityInvites for a touch of elegance and innovation in every celebration!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
