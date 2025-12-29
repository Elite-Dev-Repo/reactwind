function Services() {
  const services = [
    {
      icon: <i class="fa-solid fa-laptop-code"></i>,
      title: "Web Development",
      content:
        "Custom websites built with modern technologies and responsive design.",
    },
    {
      icon: <i class="fa-solid fa-mobile-alt"></i>,
      title: "Mobile App Development",
      content:
        "Native and cross-platform mobile applications for iOS and Android.",
    },
    {
      icon: <i class="fa-solid fa-paint-brush"></i>,
      title: "UI/UX Design",
      content: "User-centered design solutions that enhance user experience.",
    },
  ];

  let serviceCards = services.map((service) => (
    <div
      key={service.title}
      className=" h-[300px] bg-secondary p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 flex flex-col items-center"
    >
      <div className="text-4xl mb-4 text-secondary bg-primary p-4 rounded-full">
        {service.icon}
      </div>
      <h4 className="text-xl font-bold text-primary mt-[1.5em] mb-[.8em]">
        {service.title}
      </h4>
      <p className="text-primary text-center">{service.content}</p>
    </div>
  ));

  const structure = [
    {
      icon: <i class="fa-regular fa-calendar-check"></i>,
      title: "Plan",
      content: "Strategize your project from start to finish.",
    },
    {
      icon: <i class="fa-solid fa-computer"></i>,
      title: "Build",
      content: "Design and develop with precision.",
    },
    {
      icon: <i class="fa-solid fa-flag-checkered"></i>,
      title: "Execute",
      content: "Bring your vision to life.",
    },
  ];

  let structureSteps = structure.map((step) => (
    <div key={step.title} className="flex items-center h-[250px] w-[250px]">
      <div className="text-4xl text-secondary bg-primary p-4 rounded-full">
        {step.icon}
      </div>
      <div className="flex flex-col items-start gap-1">
        <h4 className="text-xl font-bold text-secondary">{step.title}</h4>
        <p className="text-secondary">{step.content}</p>
      </div>
    </div>
  ));

  return (
    <section id="services">
      <div className="cont mt-18">
        <h3 className="mb-12 px-12 py-2 bg-secondary text-primary text-[1.2em] font-bold rounded-full border-5 border-primary outline-2 outline-secondary">
          What We Offer
        </h3>
        <p className="w-[800px] text-center font-[500] text-secondary">
          We provide a wide range of services to meet your needs, including web
          development, mobile app development, UI/UX design, digital marketing,
          and cloud solutions. Our team of experts is dedicated to delivering
          high-quality solutions that drive results and help your business grow.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 ">
          {serviceCards}
        </div>

        <div className="">
          <div className="flex gap-6 mt-7 justify-center">{structureSteps}</div>
        </div>
      </div>
    </section>
  );
}

export default Services;
