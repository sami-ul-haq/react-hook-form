"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const ThankYou = () => {
  const router = useRouter();
  console.log("router",router);
  return (
    <div className="p-5">
      <h1 className="text-bold text-center text-3xl mb-3"> ThankYou </h1>

      <Link className="text-center block" href={"/"}>
        <button className="border border-black px-4 py-2 hover:bg-black hover:text-white">
          Back to HomePage
        </button>
      </Link>
    </div>
  );
};

export default ThankYou;