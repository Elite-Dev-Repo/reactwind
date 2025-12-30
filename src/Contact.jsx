import React from "react";

const contact = () => {
  return (
    <section>
      <div className="cont">
        <div className="w-[100%] h-[45vh] bg-transparent rounded-4xl flex justify-around items-stretch">
          <div className=" h-full flex flex-col gap-3 justify-center items-center bg-secondary grow border-2 border-secondary ">
            <h4 className="text-primary text-2xl font-bold text-center">
              Ready to Elevate Your <br /> Digital Presence?
            </h4>
            <p className="text-[16px] font-semibold text-primary border-dashed border-primary border-4 px-6 py-2">
              give us a mail
            </p>
          </div>

          <div className="grow flex items-center justify-center">
            <form
              action=""
              className="w-[80%] h-full flex flex-col gap-1.5 flex-1 items-center justify-around border-2 border-secondary "
            >
              <input
                type="email"
                name=""
                id=""
                className="bg-primary w-[80%] text-[15px] border-2 font-semibold text-secondary border-secondary px-5 py-3"
                placeholder="johndoe@gmail.com"
              />
              <textarea
                className="bg-primary w-[80%] text-[15px] border-2 font-semibold text-secondary border-secondary px-5 py-3"
                name=""
                id=""
                cols="30"
                rows="5"
                placeholder="Message body --- name, reason for mail"
              ></textarea>
              <button
                type="submit"
                className="w-fit px-8 py-2 bg-primary text-secondary text-[15px] font-semibold text-secondary border-2 border-secondary cursor-pointer"
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
