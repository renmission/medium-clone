import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="hidden lg:inline-flex items-center">
      
      <div className="w-3/4 flex flex-wrap px-4 gap-4 text-gray-400 text-sm">
        <Link href={"/"}>
          <p>Help</p>
        </Link>
        <Link href={"/"}>
          <p>Status</p>
        </Link>
        <Link href={"/"}>
          <p>Writer</p>
        </Link>
        <Link href={"/"}>
          <p>Blog</p>
        </Link>
        <Link href={"/"}>
          <p>Careers</p>
        </Link>
        <Link href={"/"}>
          <p>Privacy</p>
        </Link>
        <Link href={"/"}>
          <p>Terms</p>
        </Link>
        <Link href={"/"}>
          <p>About</p>
        </Link>
        <Link href={"/"}>
          <p>Text to speech</p>
        </Link>
      </div>
    </div>
  );
}

export default Footer;
