import Script from "next/script";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="page-up">
          <a href="#" id="scrollToTopButton">
            <span className="arrow_carrot-up"></span>
          </a>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="footer__logo">
                <a href="./index.html"></a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="footer__nav">
                <ul>
                  <li className="active">
                    <Link href="/" passHref>
                      <a>Homepage</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/categories" passHref>
                      <a>Categories</a>
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
              </div>
            </div>
            <div className="col-lg-3">
              <p>
                Copyright All rights reserved | This template is made with{" "}
                <i className="fa fa-heart" aria-hidden="true"></i> by
              </p>
            </div>
          </div>
        </div>
      </footer>

      <div className="search-model">
        <div className="h-100 d-flex align-items-center justify-content-center">
          <div className="search-close-switch">
            <i className="icon_close"></i>
          </div>
          <form className="search-model-form">
            <input
              type="text"
              id="search-input"
              placeholder="Search here....."
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default Footer;
