import { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Eliyahu Cohen | Personal Portfolio",
  description:
    "Welcome to the personal portfolio of Eliyahu Cohen, a Full-Stack Developer proficient in React, Next.js, Typescript, Node.js, MongoDB, Express, and more. Explore innovative web development projects and software engineering solutions.",
  verification: {
    google: "etLGIi0IZrGFwJHWbjMxL-jpyNsO2rnnZftDlQTH8nA",
  },
  keywords: [
    "Eliyahu Cohen",
    "Eliyahu Cohen Tarab",
    "אליהו כהן",
    "אליהו כהן Fullstack",
    "אליהו כהן Developer",
    "Eli Cohen",
    "Web Developer",
    "Full-Stack Developer",
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "MongoDB",
    "Express",
    "JavaScript",
    "Software Engineer",
    "Technology Solutions",
    "Innovative Development",
  ],
  authors: [
    {
      name: "Eliyahu Cohen",
      url: "https://eliyahu-cohen-portfolio.vercel.app",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} pt-28 sm:pt-26 bg-gray-50 text-gray-950 relative`}
      >
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#ff6263]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#67ff94]"></div>
        <Header />
        {children}
        <Footer />
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
