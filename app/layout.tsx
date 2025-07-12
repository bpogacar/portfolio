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
        <SplashCursor 
          SPLAT_RADIUS = {0.01}
          SPLAT_FORCE = {8000}
        />
        {children}
      </body>
    </html>
  )
}