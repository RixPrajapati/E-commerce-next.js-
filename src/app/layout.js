import React from 'react';
import "./globals.css"
import Header from '@/components/Header';

export const metadata={
  title:{
    default:"E-Fashion",
    template:"%s | E-Fashion"
  },
  description:"Online ecommerce platform for watch and clothes",
  keywords:"Online shopping in Nepal"
}

const RootLayout = ({children}) => {
  return (
    <html lang='en'>
      <body className='light'>
        <Header/>
        {children}
      </body>
    </html>
  )
}

export default RootLayout