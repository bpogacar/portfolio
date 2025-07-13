import SplashCursor from "./components/SplashCursor"
import Squares from "./components/Sqaures"
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
        <Squares 
          speed={0.5}
          squareSize={40}
          direction="diagonal"
          borderColor='#222'
          hoverFillColor="#222"
        />
      </body>
    </html>
  )
}