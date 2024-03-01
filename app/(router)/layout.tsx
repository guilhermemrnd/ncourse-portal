import React from "react";
import SideNav from "./_components/SideNav";
import Header from "./_components/Header";

export default function Layout({ children }) {
  return (
    <>
      <div className="fixed hidden sm:block sm:w-64">
        <SideNav />
      </div>
      <div className="sm:ml-64">
        <Header />
        {children}
      </div>
    </>
  );
}
