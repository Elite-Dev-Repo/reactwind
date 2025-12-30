function Services() {
  const services = [
    {
      icon: <i className="fa-solid fa-laptop-code"></i>,
      title: "Web Development",
      content:
        "Custom websites built with modern technologies and responsive design.",
    },
    {
      icon: <i className="fa-solid fa-mobile-alt"></i>,
      title: "Mobile App Development",
      content:
        "Native and cross-platform mobile applications for iOS and Android.",
    },
    {
      icon: <i className="fa-solid fa-paint-brush"></i>,
      title: "UI/UX Design",
      content: "User-centered design solutions that enhance user experience.",
    },
  ];

  let serviceCards = services.map((service) => (
    <div
      key={service.title}
      className="h-[280px] md:h-[300px] bg-secondary p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 flex flex-col items-center"
    >
      <div className="text-3xl md:text-4xl mb-4 text-secondary bg-primary p-4 rounded-full">
        {service.icon}
      </div>
      <h4 className="text-lg md:text-xl font-bold text-primary mt-[1.5em] mb-[.8em]">
        {service.title}
      </h4>
      <p className="text-primary text-center text-sm md:text-base">
        {service.content}
      </p>
    </div>
  ));

  const structure = [
    {
      icon: <i className="fa-regular fa-calendar-check"></i>,
      title: "Plan",
      content: "Strategize your project from start to finish.",
    },
    {
      icon: <i className="fa-solid fa-computer"></i>,
      title: "Build",
      content: "Design and develop with precision.",
    },
    {
      icon: <i className="fa-solid fa-flag-checkered"></i>,
      title: "Execute",
      content: "Bring your vision to life.",
    },
  ];

  let structureSteps = structure.map((step) => (
    <div
      key={step.title}
      className="flex items-center h-auto md:h-[250px] w-full md:w-[250px] gap-4"
    >
      <div className="text-3xl md:text-4xl text-secondary bg-primary p-3 md:p-4 rounded-full flex-shrink-0">
        {step.icon}
      </div>
      <div className="flex flex-col items-start gap-1">
        <h4 className="text-lg md:text-xl font-bold text-secondary">
          {step.title}
        </h4>
        <p className="text-secondary text-sm md:text-base">{step.content}</p>
      </div>
    </div>
  ));

  return (
    <section id="services" className="px-4">
      <div className="cont mt-18">
        <h3 className="mb-12 px-8 md:px-12 py-2 bg-secondary text-primary text-[1em] md:text-[1.2em] font-bold rounded-full border-5 border-primary outline-2 outline-secondary">
          What We Offer
        </h3>
        <p className="w-full max-w-[800px] text-center font-[500] text-secondary text-sm md:text-base px-4">
          We provide a wide range of services to meet your needs, including web
          development, mobile app development, UI/UX design, digital marketing,
          and cloud solutions. Our team of experts is dedicated to delivering
          high-quality solutions that drive results and help your business grow.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-12 w-full">
          {serviceCards}
        </div>

        <div className="w-full mt-12">
          <div className="flex flex-col md:flex-row gap-6 md:gap-6 justify-center items-start md:items-center">
            {structureSteps}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
