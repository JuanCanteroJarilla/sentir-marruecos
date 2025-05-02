import "./globals.css";
import Header from "./components/navigation/header";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        <Header alwaysVisible={true}/>
        {children}
      </body>
    </html>
  );
}
