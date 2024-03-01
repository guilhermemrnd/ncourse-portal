import { Button } from "@/components/ui/button";
import { BellDot, SearchIcon } from "lucide-react";
import React from "react";

export default function Header() {
  return (
    <div className="flex justify-between bg-white p-5">
      {/* Search bar */}
      <div className="flex gap-2 rounded-md border p-2">
        <SearchIcon className="h-5 w-5" />
        <input className="outline-none" type="text" placeholder="Search..." />
      </div>

      {/* "Get Stated" Button & bell Icon */}
      <div className="flex items-center gap-4">
        <BellDot className="text-gray-500" />
        <Button>Get Started</Button>
      </div>
    </div>
  );
}
