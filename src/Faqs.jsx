import { useState } from "react";

function Faqs() {
  // Track which FAQ index is open (null means all are closed)
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    // If clicking the same one, close it. Otherwise, open the new one.
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
    <section>
      <div className="flex flex-col items-center justify-center gap-6 mt-12">
        <h2 className="text-white text-3xl font-bold">
          Frequently Asked Questions
        </h2>
        <p className="text-secondary text-[16px] font-light w-[700px] text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>

        <div className="faqs flex flex-col gap-5">
          {theFaq.map((faq, index) => (
            <div
              key={index}
              onClick={() => toggleFaq(index)}
              className="bg-secondary px-8 py-3 w-[500px] cursor-pointer transition-all"
            >
              <div className="question p-2 flex w-full justify-between items-center">
                <h4 className="text-primary text-[1.2em] font-bold">
                  {faq.question}
                </h4>
                <span
                  className={`w-[40px] h-[40px] rounded-full flex justify-center items-center bg-primary transition-transform ${
                    activeIndex === index ? "rotate-90" : ""
                  }`}
                >
                  <i className="fa-solid fa-arrow-right text-secondary"></i>
                </span>
              </div>

              {/* Conditional rendering: Only show if activeIndex matches */}
              <div
                className={`answer p-3 ${
                  activeIndex === index ? "block" : "hidden"
                }`}
              >
                <p className="text-primary text-[1em] font-semibold">
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
