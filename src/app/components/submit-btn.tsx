"use client";
import React from "react";
import { useFormStatus } from "react-dom";
import { FaPaperPlane } from "react-icons/fa";

export default function SubmitBtn() {
  const { pending } = useFormStatus();
  return (
    <button
      className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all disabled:scale-100 disabled:bg-opacity-65 font-semibold hover:bg-gray-700"
      disabled={pending}
      type="submit"
    >
        {/* <p className="h-5 w-5 animate-spin rounded-full border-b-2 border-white mx-14 my-4"></p> */}
      {pending ? <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white mx-14 my-4"></div> : <> Submit <FaPaperPlane className="group-hover:translate-x-1 transition"/> </>}
    </button>
  );
}
