import "./globals.css";
import { Pangolin } from "next/font/google";

const pangolin = Pangolin({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "QuizMaster",
  description: "A Quiz Website made for NEA project.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={pangolin.className}>{children}</body>
    </html>
  );
}
