function about() {
  const Tech = [
    { name: "Cursor", icon: "" },
    { name: "React", icon: <i className="fa-brands fa-react"></i> },
    { name: "Django", icon: <i className="fa-brands fa-python"></i> },
    { name: "Node", icon: <i className="fa-brands fa-node-js"></i> },
    { name: "JavaScript", icon: <i className="fa-brands fa-js"></i> },
  ];

  let Items = Tech.map((item) => {
    return (
      <p
        key={item.name}
        className="inline px-6 md:px-10 py-3 md:py-4 bg-primary text-secondary text-[0.9em] md:text-[1em] font-light rounded border-5 border-secondary outline-2 outline-primary"
      >
        <span className="mr-2 text-[16px] md:text-[18px]">{item.icon}</span>
        {item.name}
      </p>
    );
  });

  return (
    <section className="px-4" id="about">
      <div className="cont bg-secondary" style={{ borderRadius: "70px 20px" }}>
        <h3 className="px-8 md:px-12 py-2 bg-primary text-secondary text-[1em] md:text-[1.2em] font-bold rounded-full border-5 border-secondary outline-2 outline-primary">
          About Us
        </h3>

        <p className="w-full max-w-[800px] text-center font-[500] text-sm md:text-base px-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non tenetur
          enim nihil aspernatur nisi neque, quod voluptates molestiae accusamus
          autem sint nobis, ab et inventore possimus eum at dolor repudiandae ut
          sit fuga ipsum doloribus perspiciatis? Sapiente laboriosam quibusdam
          eveniet illo nemo laudantium cupiditate nostrum tempore! Omnis facilis
          magni illo numquam sapiente. Magnam sapiente aliquam ipsa architecto,
          natus minima porro assumenda obcaecati enim eum dignissimos laudantium
          aliquid eveniet est, pariatur delectus dolores ipsam sequi
          exercitationem quam ad. Similique veritatis animi quibusdam possimus?
          Placeat sed vel consequatur, nemo optio sit necessitatibus
          voluptatibus quod itaque voluptatum aperiam laborum, omnis aliquid
          fugiat expedita.
        </p>

        <div className="w-full px-4">
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-7">
            {Items}
          </div>
        </div>
      </div>
    </section>
  );
}

export default about;
