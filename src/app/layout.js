import React from 'react';
import "./globals.css"

const RootLayout = ({children}) => {
  return (
    <html lang='en'>
      <body>
        ROot
        {children}
      </body>
    </html>
  )
}

export default RootLayout