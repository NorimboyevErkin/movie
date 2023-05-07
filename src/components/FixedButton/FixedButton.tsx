"use client"
import React, { useState, useContext } from "react";
import Fab from "@mui/material/Fab";
import { BiChevronUp } from "react-icons/bi";
import classes from "./FixedButton.module.scss";
import Link from "next/link";

function FixedButton() {
  const [upButton, setupButton] = useState<boolean>(false);

  const func = () => {
    if (typeof window !== "undefined") {
      window.scrollY > 100 ? setupButton(true) : setupButton(false);
    }
  };
  const onClick = ()=>{
    window.scrollTo(0, 0);
  }
  globalThis.window?.addEventListener("scroll", func);
  return (
    <div
      className={classes.UpButtonBox}
      style={upButton ? {} : { display: "none" }}
    >
      <Fab color="primary" aria-label="add" className={classes.UpButtonfab} onClick={onClick}>
        <BiChevronUp style={{ fontSize: "2rem" }} />
      </Fab>
    </div>
  );
}

export default FixedButton;
