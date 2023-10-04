import Link from "next/link";

const NavLink = ({ children, href, prefetch }) => {
  if (href === href) {
    return (
      <Link
        href={href}
        prefetch={prefetch}
        className="w-4/12 text-mongoose font-caveatbrush text-2xl"
      >
        {children}
      </Link>
    );
  }

  return (
    <Link
      href={url}
      prefetch={prefetch}
      className="relative group hover:text-mongoose transition-colors hover:delay-100 text-2xl font-caveatbrush"
    >
      {children}
    </Link>
  );
};

export default NavLink;
