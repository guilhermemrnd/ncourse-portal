import React from "react";
import { BadgeIcon, BookOpen, FilmIcon, GraduationCap } from "lucide-react";

export default function SideNav() {
  const menu = [
    {
      id: 0,
      name: "All Courses",
      icon: BookOpen,
    },
    {
      id: 1,
      name: "Membership",
      icon: BadgeIcon,
    },
    {
      id: 3,
      name: "Be Instructor",
      icon: GraduationCap,
    },
  ];

  return (
    <div className="h-screen border bg-white p-5 shadow-sm">
      <div className="mb-6 flex cursor-default select-none items-center gap-1 p-2 pb-0 text-[26px] text-[#3E3BC9]">
        <FilmIcon className="-skew-y-12" />
        <h1 className="font-bold underline">LogoIpsum</h1>
      </div>
      <hr className="mb-8" />
      {/* Menu List */}
      {menu.map((item, index) => (
        <div
          className="flex cursor-pointer items-center gap-3 rounded-md p-2 text-[18px] text-gray-500 transition-all ease-in-out hover:bg-primary hover:text-white"
          key={index}
        >
          <item.icon />
          <h2>{item.name}</h2>
        </div>
      ))}
    </div>
  );
}
