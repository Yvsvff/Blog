
import Header from '@components/Header'
import './globals.css'
import type { Metadata } from 'next'
import Banner from '@components/Banner'






export const metadata: Metadata = {
  
  title: 'Yvsvff Blog',
  description: 'Created by Yusuff Atanda',
 
}



export default async function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className='max-w-7xl mx-auto'>
        <Header />
        <Banner />
        {children}
       
        </body>
    </html>
  )
}