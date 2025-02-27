import NavBar from "../NavBar/NavBar.jsx";

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>{children}</main>
    </>
  );
};

export default Layout;
