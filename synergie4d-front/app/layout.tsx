import type { Metadata } from "next";
import { Montserrat, Montserrat_Alternates } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-sans" });
const montserratAlternates = Montserrat_Alternates({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "WeatherWear",
  description:
    "Trouvez des inspirations pour vour habiller en fonction de la météo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${(montserrat.variable, montserratAlternates.variable)} `}
      >
        {children}
      </body>
    </html>
  );
}
