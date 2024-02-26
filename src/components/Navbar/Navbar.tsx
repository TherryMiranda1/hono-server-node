import { links } from "../../paths/paths";




export const Navbar = () => {

  return (
    <nav>
      {links.map(({ link, title, icon }: any) => <a href={link}>{title}</a>)}
    </nav>
  );
};

