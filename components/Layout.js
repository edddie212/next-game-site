import Meta from "./Meta";
import Nav from "./Nav";
import Footer from "./Footer";


const Layout = ({ children }) => {
  return (
    <>
      <Meta />
         <Nav />
      <div className="container">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
