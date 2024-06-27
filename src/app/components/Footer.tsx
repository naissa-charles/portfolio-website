import React from 'react'

function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center text-center bg-black h-[10rem] w-full">
        <small className="text-white text-xs mb-2"> &copy; 2024 Naïssa Charles </small>
        <p className="text-white text-xs">This website was built with React & Next.js. Vercel is used for hosting</p>
    </footer>
  )
}

export default Footer