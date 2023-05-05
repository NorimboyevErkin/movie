"use client"
import React, { useState, useContext } from "react";
import Fab from "@mui/material/Fab";
import { BiChevronUp } from "react-icons/bi";
import classes from "./FixedButton.module.scss";
// import { SectionContext } from "../../context";
function FixedButton() {
  const [upButton, setupButton] = useState<boolean>(false);
//   const { sectionRefs } = useContext(SectionContext);
//   SectionContext
  const scrollSection = (section:any) => {
    section?.scrollIntoView({ behavior: "smooth" });
  };
  const func = () => {
    if (typeof window !== "undefined") {
      window.scrollY > 100 ? setupButton(true) : setupButton(false);
    }
  };
  globalThis.window?.addEventListener("scroll", func);
  return (
    <div
      className={classes.UpButtonBox}
      style={upButton ? {} : { display: "none" }}
    //   onClick={() => {
    //     scrollSection(sectionRefs?.home);
    //   }}
    >
      <Fab color="primary" aria-label="add" className={classes.UpButtonfab}>
        <BiChevronUp style={{ fontSize: "2rem" }} />
      </Fab>
    </div>
  );
}

export default FixedButton;
