import localFont from "next/font/local";
import "./globals.css";

export const metadata = {
  title: "Galery Art",
  description: "Galeria de arte, by Dylan Sanchez",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Italianno&display=swap" rel="stylesheet" />
      </head>
      <body      >
        {children}
      </body>
    </html>
  );
}
