import Link from "next/link";
import React from "react";


const Navbar = () => {
  return (
    <>
      <nav className="max-w-3xl mx-auto py-4 flex gap-x-4 ">
        <Link href="/">Home</Link>
        <Link href="/counter">Counter</Link>
        <Link href="/tour">Tour</Link>
        <Link href="/actions">Actions</Link>
      </nav>
    </>
  );
};

export default Navbar;
