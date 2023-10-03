import { Link as LinkScroll } from "react-scroll";

const NavLink = ({ children, to, prefetch }) => {
  if (to === to) {
    return (
      <LinkScroll
        to={to}
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
        prefetch={prefetch}
        className="w-4/12 text-mongoose font-caveatbrush text-2xl"
      >
        {children}
      </LinkScroll>
    );
  }

  return (
    <LinkScroll
      to={url}
      spy={true}
      smooth={true}
      offset={50}
      duration={500}
      prefetch={prefetch}
      className="relative group hover:text-mongoose transition-colors hover:delay-100 text-2xl font-caveatbrush"
    >
      {children}
    </LinkScroll>
  );
};

export default NavLink;
