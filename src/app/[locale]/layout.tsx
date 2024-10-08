import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navBar";
import Footer from "@/components/footer";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bethesda recipes",
  description: "Recipe website",
};

export default async function RootLayout({
  children,
  params: { locale },
}: {
  // Readonly<{
  children: React.ReactNode;
  // }>
  params: { locale: string };
}) {
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <NextIntlClientProvider messages={messages}>
        <body className={inter.className}>
          <NavBar lang={locale} />
          <main className="flex flex-col min-h-[calc(100vh-3.5rem-1px)] ">
            <div className="flex-1 flex flex-col h-full">{children}</div>
            <Footer lang={locale} />
          </main>
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
