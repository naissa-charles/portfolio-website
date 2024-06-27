import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Toaster } from "react-hot-toast"
import Head from "next/head";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Naïssa Charles | Portfolio',
  description: 'Porfolio Website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="!scroll-smooth">
      <Head>
        <link rel='icon' href='/favivon.ico'></link>
      </Head>
      <body className={ `${inter.className}`}>
        <Navbar></Navbar>
        {children}
        <Footer/>
        <Toaster position="top-right"/>
      </body>
    </html>
  )
}
