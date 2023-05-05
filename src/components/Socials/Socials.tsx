import Tooltip from "@mui/material/Tooltip";
import { SocialsListType } from "@/types/general";
import classes from "./Socials.module.scss";

type SocialsProps = {
    socialShare:SocialsListType[];
}

function Socials({socialShare}: SocialsProps) {
  return (
    <div className={classes.socials}>
      <ul className={classes.socials__wrapper}>
        {socialShare.map((value:SocialsListType, key:number) => (
          <Tooltip title={value?.name} key={key}>
            <li>
              <a href={`${value?.link}`}>{value?.icon}</a>
            </li>
          </Tooltip>
        ))}
      </ul>
    </div>
  );
}

export default Socials;