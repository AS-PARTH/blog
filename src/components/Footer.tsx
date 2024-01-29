import React from "react";
import Container from "./Container";
import Logo from "./Logo";
import Link from "next/link";
import { BsInstagram, BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="p-10 bg-black text-gray-100 flex items-center justify-between">
      <Logo title="Bloggers" className="text-white" />
      <div className="text-gray-300 hidden md:inline-flex items-center gap-7">
        <Link href={"https://github.com/AS-PARTH"} target="blank">
          <BsGithub className="text-2xl hover:text-orange-500 duration-200 cursor-pointer" />
        </Link>

        <Link href={"https://www.instagram.com/parthkhatri_23"} target="blank">
          <BsInstagram className="text-2xl hover:text-orange-500 duration-200 cursor-pointer" />
        </Link>
      </div>
      <p className="text-sm text-gray-300">© All rights reserved </p>
    </div>
  );
};

export default Footer;

