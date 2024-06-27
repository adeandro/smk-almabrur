import { useState, useEffect } from "react";
import logo from "./assets/smk-almabrur.svg";
import Hero from "./pages/Hero.jsx";
import Profile from "./pages/Profile.jsx";
import { DarkThemeToggle, Flowbite, Navbar } from "flowbite-react";

function App() {
  // scroll efect navbar
  const [isFixed, setIsFixed] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector("#navbar");
      const fixedNav = header.offsetTop;

      setIsFixed(window.scrollY > fixedNav);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <Flowbite>
      <Navbar id="navbar" className={`${isFixed ? "navbar-fixed" : ""}`}>
        <Navbar.Brand href="#home">
          <img src={logo} alt="logo-smk-almabrur" className="mr-3 h-6 sm:h-9" />
          <span className="self-center whitespace-nowrap text-xl text-primary dark:text-primary uppercase font-semibold">
            smk al-mabrur
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <DarkThemeToggle></DarkThemeToggle>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link href="#profile">Profil</Navbar.Link>
          <Navbar.Link href="#profile">Guru</Navbar.Link>
          <Navbar.Link href="#profile">Program</Navbar.Link>
          <Navbar.Link href="#profile">Fasilitas</Navbar.Link>
          <Navbar.Link href="#profile">Informasi</Navbar.Link>
          <Navbar.Link href="#profile">Lainya</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>

      <Hero />
      <Profile />
    </Flowbite>
  );
}

export default App;
