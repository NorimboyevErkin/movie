"use client";
import React, { useState } from "react";
import { socialShare } from "@/utils/constants";
import Link from 'next/link';
import Logo from "@/components/Logo";
import Socials from "@/components/Socials";
import classes from "./Header.module.scss";
import SearchInput from "../SearchInput";

function Header() {
  const [bgNav, setbgNav] = useState<boolean>(false);
  const func = () => {
    if (typeof window !== "undefined") {
      window.scrollY > 50 ? setbgNav(true) : setbgNav(false);
    }
  };
  globalThis.window?.addEventListener("scroll", func);
  return (
    <div
      className={
        bgNav ? classes.HeaderBox + " " + classes.stickyNav : classes.HeaderBox
      }
    >
      <div className="container">
        <div className={classes.HeaderContainer}>
          <div className={classes.HeaderLeftBox}>
            <Logo />
          </div>
          <SearchInput/>
          {/* <DropNav /> */}
        </div>
      </div>
    </div>
  );
}

export default Header;
