import React from "react";

const contact = () => {
  return (
    <section className="px-4 mt-18">
      <div className="cont">
        <div className="w-[100%] min-h-[45vh] bg-transparent rounded-4xl flex flex-col md:flex-row justify-around items-stretch gap-0">
          <div className="h-[300px] min-h-[200px] flex flex-col gap-3 justify-center items-center bg-secondary grow border-2 border-secondary px-4 py-8">
            <h4 className="text-primary text-xl md:text-2xl font-bold text-center">
              Ready to Elevate Your <br /> Digital Presence?
            </h4>
            <p className="text-[14px] md:text-[16px] font-semibold text-primary border-dashed border-primary border-4 px-4 md:px-6 py-2">
              give us a mail
            </p>
          </div>

          <div className="grow flex items-center justify-center py-8 md:py-0">
            <form
              action=""
              className="w-full md:w-[80%] h-full flex flex-col gap-3 md:gap-1.5 flex-1 items-center justify-around border-2 border-secondary px-4 py-6"
            >
              <input
                type="email"
                name=""
                id=""
                className="bg-primary w-full md:w-[80%] text-[14px] md:text-[15px] border-2 font-semibold text-secondary border-secondary px-4 md:px-5 py-3"
                placeholder="johndoe@gmail.com"
              />
              <textarea
                className="bg-primary w-full md:w-[80%] text-[14px] md:text-[15px] border-2 font-semibold text-secondary border-secondary px-4 md:px-5 py-3"
                name=""
                id=""
                cols="30"
                rows="5"
                placeholder="Message body --- name, reason for mail"
              ></textarea>
              <button
                type="submit"
                className="w-full md:w-fit px-6 md:px-8 py-2 bg-primary text-secondary text-[14px] md:text-[15px] font-semibold text-secondary border-2 border-secondary cursor-pointer"
              >
                Send Mail
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default contact;
