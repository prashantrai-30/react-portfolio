import Navbar from "./Navbar/";
import Footer from "./Footer/";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-primary-dark relative">
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-accent/10 via-primary-dark to-primary-dark pointer-events-none" />
      <div 
        className="fixed inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at center, rgb(139 92 246 / 0.2) 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />
      <div className="relative z-10">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;