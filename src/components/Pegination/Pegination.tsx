import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/svg/logo.svg";

function Pegination({...props}:any) {
  return (
    <Link href="/" style={{display:'flex' , alignItems:'center',cursor:"pointer"}} {...props}>
        <Image
          src={logo}
          alt="logo"
        //   layout="intrinsic"
          width={150}
          height={25}
        />
    </Link>
  );
}

export default Pegination;