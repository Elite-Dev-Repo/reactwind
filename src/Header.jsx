import { useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const proof = [
    {
      amount: "2,500+",
      value: "Completed Projects.",
    },
    {
      amount: "500+",
      value: "Satisfied Clients.",
    },
    {
      amount: "7+ years",
      value: " Building Scalable Solutions.",
    },
  ];

  const proofitem = proof.map((proof) => {
    return (
      <div
        key={proof.value}
        className="flex flex-col items-center gap-3 md:gap-5 px-2 md:px-3.5 border-l-2 border-l-secondary"
      >
        <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white">
          {proof.amount}
        </h3>
        <p className="text-[12px] md:text-[14px] font-extrabold text-secondary text-center">
          {proof.value}
        </p>
      </div>
    );
  });

  const navs = ["HOME", "ABOUT", "SERVICES", "PRICING", "CONTACT"];
  let navItems = navs.map((nav) => {
    return (
      <li key={nav} className="lg:inline-block">
        <a
          href={`#${nav.toLowerCase()}`}
          onClick={() => setIsMenuOpen(false)}
          className="text-[#ffffffad] hover:text-white nav-itm block py-2 lg:py-0"
        >
          {nav}
        </a>
      </li>
    );
  });

  return (
    <div
      className="min-h-screen w-full justify-center items-center bg-primary relative mb-10 px-4"
      id="home"
    >
      <nav className="nav">
        <div className="container mx-auto flex justify-between items-center relative">
          <a href="#" className="text-xl md:text-2xl font-bold text-secondary">
            Logo
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex gap-6">{navItems}</ul>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-secondary text-2xl z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i
              className={`fa-solid ${isMenuOpen ? "fa-times" : "fa-bars"}`}
            ></i>
          </button>

          {/* Mobile Navigation */}
          <div
            className={`absolute top-full left-0 w-full bg-primary border-t-2 border-secondary transition-all duration-300 z-30 lg:hidden ${
              isMenuOpen ? "block" : "hidden"
            }`}
          >
            <ul className="flex flex-col items-center py-4 gap-2">
              {navItems}
            </ul>
          </div>

          <button className="hidden lg:block px-4 md:px-8 py-2 bg-secondary text-primary text-[13px] md:text-[15px] font-semibold hover:bg-[transparent] hover:text-secondary border-2 border-secondary transition cursor-pointer">
            Get Started
          </button>
        </div>
      </nav>

      <i className="fa-solid fa-rocket text-secondary absolute top-[55%] right-[5%] md:right-[15%] text-[2em] md:text-[4em] opacity-50 md:opacity-100"></i>

      <header className="cont flex flex-col gap-3 items-center justify-center px-4">
        <h1 className="underline text-3xl md:text-5xl lg:text-7xl text-center font-bold text-white leading-tight">
          Futuristic Digital Solutions <br className="hidden md:block" />{" "}
          Designed For Efficiency.
        </h1>

        <p className="text-center text-secondary mt-[1em] text-sm md:text-base max-w-2xl px-4">
          Helping businesses thrive with authentic ideas and goal driven digital
          solutions.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 mt-[2em] w-full sm:w-auto px-4">
          <button className="px-8 md:px-12 py-2 bg-secondary text-primary text-[14px] md:text-[15px] font-semibold hover:bg-amber-400 border-2 rounded-full border-secondary cursor-pointer w-full sm:w-auto">
            Inspect
          </button>
          <button className="px-6 md:px-8 py-2 bg-[transparent] text-primary text-[14px] md:text-[15px] font-semibold text-secondary border-2 border-secondary cursor-pointer w-full sm:w-auto">
            Get Started
          </button>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 md:gap-14 mt-10 w-full justify-center">
          {proofitem}
        </div>
      </header>
    </div>
  );
}

export default Header;
