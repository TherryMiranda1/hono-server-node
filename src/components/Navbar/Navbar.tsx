import { LiaAddressCardSolid } from "react-icons/lia";
import { PiCardsFill } from "react-icons/pi";
import { BiHomeAlt, BiMessageDetail } from "react-icons/bi";
import { links } from "../../paths";




export const Navbar = () => {

  return (
    <nav>
      {links.map(({ link, title, icon }: any) => <a href={link}>{title}</a>)}
    </nav>
  );
};

