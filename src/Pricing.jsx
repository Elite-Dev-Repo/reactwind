import { compile } from "tailwindcss";

function Pricing() {
  const prices = [
    {
      plans: "Starter Pack",
      price: <p>$1,500.00</p>,
      covers: ["1 projects", "Branding and Logo", "Landing Page", "UI/UX"],
    },
    {
      plans: "Pro Pack",
      price: <p>$4,200.00</p>,
      covers: ["3 projects", "Branding and Logo", "Landing Page", "UI/UX"],
    },
    {
      plans: "Premium Pack",
      price: <p>$7,000.00</p>,
      covers: ["5 projects", "Branding and Logo", "Landing Page", "UI/UX"],
    },
  ];

  const priceplans = prices.map((price) => {
    return (
      <div
        key={price}
        className=" price-item flex flex-col gap-7 w-fit px-15 py-7 bg-primary text-center border-5 border-secondary outline-2 outline-primary hover:scale-105 hover:translate-y-[-1em] transition"
      >
        <h4 className="text-[1.2em] flex flex-col justify-center items-center gap-4 font-extrabold text-secondary">
          <i class="fa-solid fa-cube"></i>
          {price.plans}
        </h4>
        <p className=" text-2xl font-bold text-white">{price.price}</p>
        <ul className="flex items-start flex-col">
          {price.covers.map((co) => {
            return (
              <li className="text-[#ffcc00d5] font-light text-[15px]" key={co}>
                <i className="fa-solid fa-check mr-2 opacity-65"></i>
                {co}
              </li>
            );
          })}
        </ul>

        <button className="px-8 py-1.5  text-[13px] rounded-full font-semibold bg-[transparent] text-secondary border-1 border-secondary cursor-pointer">
          Get Started
        </button>
      </div>
    );
  });
  return (
    <section className="cont">
      <div
        className="cont flex items-center w-full h-full justify-around bg-secondary"
        style={{ borderRadius: "20px" }}
      >
        <h3
          style={{ borderRadius: "70px 2px 2px 0px" }}
          className="px-7 py-2 bg-primary text-secondary text-[.7em] font-bold rounded-full border-5 border-secondary outline-2 outline-primary"
        >
          Pricing
        </h3>

        <div>
          <h2 className="text-2xl font-extrabold text-primary">
            Choose the plan that gets the work done.
          </h2>
          <p className="text-[13px] text-center font-bold text-[#2a0c629f]">
            No hidden fees pay only what you need to.
          </p>
        </div>

        <div className="prices flex w-full h-500px justify-center gap-5 items-center ">
          {priceplans}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
