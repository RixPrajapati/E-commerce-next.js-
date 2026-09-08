import React from 'react';
import "./globals.css"
import Header from '@/components/Header';
import { ToastContainer } from 'react-toastify';
import MainLayout from '@/layout/MainLayout';

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
        <MainLayout>
          {children}
        </MainLayout>
        <ToastContainer position='top-center' autoClose={1500} />
      </body>
    </html>
  )
}

export default RootLayout