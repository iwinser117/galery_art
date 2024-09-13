import localFont from "next/font/local";
import "./globals.css";

export const metadata = {
  title: "Galery Art",
  description: "Galeria de arte, by Dylan Sanchez",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body      >
        {children}
      </body>
    </html>
  );
}
