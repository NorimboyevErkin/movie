"use client"
import Container from "@/components/Container";
import Logo from "@/components/Logo";
import Socials from "@/components/Socials";
import { socialShare } from "@/utils/constants";
import classes from "./Footer.module.scss";

function Footer() {
  return (
    <div className={classes.footer}>
        <Container>
        <div className={classes.footer__wrapper}>
          <div className={classes.footer_item}>
            <Logo className={classes.FooterLogo} />
          </div>
          <div className={classes.footer_item}>
            <Socials socialShare={socialShare} />
          </div>
          <div className={classes.footer_item}>
            <p className={classes.footer_by}>Copyright © 2022 Erkin.</p>
          </div>
        </div>
        </Container>
    </div>
  );
}

export default Footer;
