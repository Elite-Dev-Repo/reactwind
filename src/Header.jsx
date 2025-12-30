function Header() {
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
        className="flex flex-col items-center gap-5 px-3.5 border-l-2 border-l-secondary"
      >
        <h3 className="text-3xl font-bold text-white">{proof.amount}</h3>
        <p className="text-[14px] font-extrabold text-secondary">
          {proof.value}
        </p>
      </div>
    );
  });
  const navs = ["HOME", "ABOUT", "SERVICES", "PRICING", "CONTACT"];
  let navItems = navs.map((nav) => {
    return (
      <li key={nav}>
        <a
          href={`#${nav.toLowerCase()}`}
          className="text-[#ffffffad] hover:text-white nav-itm"
        >
          {nav}
        </a>
      </li>
    );
  });

  return (
    <div
      className="h-screen w-full justify-center items-center bg-primary relative mb-10"
      id="home"
    >
      <nav className="nav">
        <div className="container mx-auto flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-secondary">
            Logo
          </a>

          <ul className="flex gap-6">{navItems}</ul>

          <button className="px-8 py-2 bg-secondary text-primary text-[15px] font-semibold hover:bg-[transparent] hover:text-secondary border-2 border-secondary transition cursor-pointer">
            Get Started
          </button>
        </div>
      </nav>

      <i className="fa-solid fa-rocket text-secondary absolute top-[55%] right-[15%] text-[4em]"></i>

      <header className="cont flex flex-col gap-3 items-center justify-center">
        <h1 className="underline text-4xl text-center text-7xl font-bold text-white">
          Futuristic Digital Solutions <br /> Designed For Efficiency.
        </h1>

        <p className="text-center text-secondary mt-[1em]">
          Helping businesses thrive with authentic ideas and goal driven digital
          solutions.
        </p>

        <div className="flex gap-6 mt-[2em]">
          <button className="px-12 py-2 bg-secondary text-primary text-[15px] font-semibold hover:bg-amber-400 border-2 rounded-full border-secondary cursor-pointer">
            Inspect
          </button>
          <button className="px-8 py-2 bg-[transparent] text-primary text-[15px] font-semibold text-secondary border-2 border-secondary cursor-pointer">
            Get Started
          </button>
        </div>

        <div className="flex gap-14 mt-10">{proofitem}</div>
      </header>
    </div>
  );
}

export default Header;
