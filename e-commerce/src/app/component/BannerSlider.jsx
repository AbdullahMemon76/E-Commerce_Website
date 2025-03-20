"use client";

import Image from "next/image";
import ThreeDText from "./ThreeDText"

export default function BannerImage() {
  return (
    <>
    <div className="relative w-full h-screen">
      <Image
        src="https://plus.unsplash.com/premium_photo-1681488262364-8aeb1b6aac56?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWNvbW1lcmNlfGVufDB8fDB8fHww"
        layout="fill"
        objectFit="cover"
        quality={100} 
        priority 
        alt="Ecommerce Banner"
        />
      <div className="">
        <ThreeDText/>
      </div>
    </div>
        </>
  );
}
