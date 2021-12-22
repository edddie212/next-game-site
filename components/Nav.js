import NavMenu from './NavMenu';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from "react";


const Nav = ()=>{
  const [open, setMobileState] = useState(false);

    const mobileMenuToggle = (e) => {
      setMobileState(!open);
    };

 return (
    <header className="header">
    <div className="container">
        <div className="row">
            <div className="col-lg-2">
                <div className="header__logo">
                    <Link href='/' passHref>
                        <a>
                        <Image src="/logo.png"
                          width={97}
                          height={30}
                          alt=""/>
                      </a>
                    </Link>
                </div>
            </div>
            <div className="col-lg-10 float-right">
                <div className="header__nav">
                  <NavMenu/>
                </div>
            </div>

        </div>
        <div id="mobile-menu-wrap">
        <div className="slicknav_menu">
          <a onClick={mobileMenuToggle} className="slicknav_btn slicknav_open">
            <span className="slicknav_menutxt">MENU</span>
            <span className="slicknav_icon">
              <span className="slicknav_icon-bar"></span>
              <span className="slicknav_icon-bar"></span>
              <span className="slicknav_icon-bar"></span>
            </span>
          </a>
        </div>
      </div>
      <nav
        className="slicknav_nav"
        id="mobile-menu"
        style={{ display: open ? "block" : "none" }}
      >
        <ul>
           
          <li className="">
          <Link href='/' passHref> 
            <a className="slicknav_item slicknav_row">
              Homepage
            </a>
           </Link>
          </li>
          <li className="">
          <Link href='/categories' passHref> 
            <a className="slicknav_item slicknav_row">
              Categories
            </a>
           </Link>
          </li>
          <li className="">
          <Link href='/blog' passHref> 
            <a className="slicknav_item slicknav_row">
              Blog
            </a>
           </Link>
          </li>
          <li className="">
          <Link href='/contacts' passHref> 
            <a className="slicknav_item slicknav_row">
              Contacts
            </a>
           </Link>
          </li>
        </ul>
      </nav>
    </div>
</header>
 );
}


export default Nav;