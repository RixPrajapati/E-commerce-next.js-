import React from 'react';
import "./globals.css"
import Header from '@/components/Header';

const RootLayout = ({children}) => {
  return (
    <html lang='en'>
      <body cz-shortcut-listen="true">
        <Header/>
        {children}
      </body>
    </html>
  )
}

export default RootLayout