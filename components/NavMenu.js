import Link from "next/link";

const NavMenu = () => {

  return (
    <nav className="header__menu mobile-menu">
      <ul>
        <li>
          <Link href="/" passHref>
            <a>Homepage</a>
          </Link>
        </li>
        <li>
          <Link href="/categories" passHref>
            <a>
              Categories 
            </a>
          </Link>
        </li>
        <li>
          <Link href="/blog" passHref>
            <a>Our Blog</a>
          </Link>
        </li>
        <li>
          <Link href="/contacts" passHref>
            <a>Contacts</a>
          </Link>
        </li>

      </ul>
    </nav>
  );
};

export default NavMenu;
