// components/Layout.js
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => (
  <>
    <Navbar />
    <main className="pt-20">{children}</main>
    <Footer />
  </>
);

export default Layout;
