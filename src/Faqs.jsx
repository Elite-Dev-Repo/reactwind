import { useState } from "react";

function Faqs() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const theFaq = [
    { question: "How does it work", answer: "Lorem ipsum dolor sit amet..." },
    { question: "Is it secure?", answer: "Yes, we use industry standards..." },
    {
      question: "How does it work",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ullam animi officia eum accusamus at",
    },
    { question: "Can I cancel?", answer: "You can cancel anytime..." },
  ];

  return (
    <section className="px-4">
      <div className="flex flex-col items-center justify-center gap-6 mt-12">
        <h2 className="text-white text-2xl md:text-3xl font-bold text-center px-4">
          Frequently Asked Questions
        </h2>
        <p className="text-secondary text-[14px] md:text-[16px] font-light w-full max-w-[700px] text-center px-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>

        <div className="faqs flex flex-col gap-5 w-full max-w-[500px]">
          {theFaq.map((faq, index) => (
            <div
              key={index}
              onClick={() => toggleFaq(index)}
              className="bg-secondary px-6 md:px-8 py-3 w-full cursor-pointer transition-all"
            >
              <div className="question p-2 flex w-full justify-between items-center gap-4">
                <h4 className="text-primary text-[1em] md:text-[1.2em] font-bold">
                  {faq.question}
                </h4>
                <span
                  className={`w-[35px] h-[35px] md:w-[40px] md:h-[40px] rounded-full flex justify-center items-center bg-primary transition-transform flex-shrink-0 ${
                    activeIndex === index ? "rotate-90" : ""
                  }`}
                >
                  <i className="fa-solid fa-arrow-right text-secondary text-sm md:text-base"></i>
                </span>
              </div>

              <div
                className={`answer p-3 ${
                  activeIndex === index ? "block" : "hidden"
                }`}
              >
                <p className="text-primary text-[0.9em] md:text-[1em] font-semibold">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faqs;
