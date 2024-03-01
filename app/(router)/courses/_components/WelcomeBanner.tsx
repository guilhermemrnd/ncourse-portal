import Image from "next/image";
import React from "react";

export default function WelcomeBanner() {
  return (
    <div className="flex items-center gap-5 rounded-xl bg-white p-5">
      <Image src="/panda.png" alt="panda" width={100} height={100} />
      <div>
        <h2 className="text-[29px] font-bold">
          Welcome to <span className="text-primary">TubeGuruju</span> Academy
        </h2>
        <h2 className="text-gray-500">Explore, Learn and Build All Real Life Projects</h2>
      </div>
    </div>
  );
}
