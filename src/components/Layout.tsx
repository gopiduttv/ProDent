import Header from './common/Header';
import Footer from './common/Footer';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header /> 
      <main className="flex-grow pt-20 overflow-y-scroll">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;