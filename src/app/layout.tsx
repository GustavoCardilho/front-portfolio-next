import { RepositoriesGithubProvider } from "@/contexts/repositoriesccontext";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gustavo Cardilho | Portfolio",
  description: "Portfolio de Gustavo Rafael Cardilho",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <RepositoriesGithubProvider>{children}</RepositoriesGithubProvider>
      </body>
    </html>
  );
}
