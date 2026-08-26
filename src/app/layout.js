import React from 'react';
import "./globals.css"

const RootLayout = ({children}) => {
  return (
    <html lang='en'>
      <body cz-shortcut-listen="true">
        ROot
        {children}
      </body>
    </html>
  )
}

export default RootLayout