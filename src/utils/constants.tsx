import {
    FaLinkedinIn,
    FaGithub,
    FaTelegram,
    FaPhoneAlt,
  } from "react-icons/fa";
  import { MdEmail } from "react-icons/md";

import { SocialsListType } from "@/types/general";
  

export const socialShare :SocialsListType[] = [
    {
      icon: <FaGithub />,
      link: "https://github.com/NorimboyevErkin",
      name: "Github",
    },
    {
      icon: <FaTelegram />,
      link: "https://t.me/Erkin_norimboyev",
      name: "Telegram",
    },
    {
      icon: <FaLinkedinIn />,
      link: "#",
      name: "Linkedin",
    },
    {
      icon: <MdEmail />,
      link: "emailto:enorimboyev@gmail.com",
      name: "Email",
    },
    {
      icon: <FaPhoneAlt />,
      link: "tel:+998949242319",
      name: "Phone",
    },
  ];