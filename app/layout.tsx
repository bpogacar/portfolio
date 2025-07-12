import SplashCursor from "./components/SplashCursor"
import "./globals.css"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <SplashCursor />
        {children}
      </body>
    </html>
  )
}