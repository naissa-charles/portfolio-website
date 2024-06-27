import React from "react";

export default function SectionHeading({ children }) {
  return (
    <>
      {/* //passing a prop through children */}
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-3xl  uppercase font-semibold text-center">
          {children}
        </h2>
        <div className="bg-rose-500 my-14 w-20 h-1 rounded-full "></div>
      </div>
    </>
  );
}
