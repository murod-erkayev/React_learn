// import Header from '../components/Header';
// import Footer from '../components/Footer';
// import Sidebar from '../components/Sidebar';

import {lazy} from "react"
const Header = lazy(()=> import("../components/Header"))
const Footer = lazy(()=> import("../components/Footer"))
const Sidebar = lazy(()=> import("../components/Sidebar"))
const MainLayout = ({ children }) => {
  return (
    <div className="app">
      <Header />
      <div className="main-content">
        <Sidebar />
        <main className="content">{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;