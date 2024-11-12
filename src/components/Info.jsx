import React from "react";

const Info = () => {
  return (
    <div id="contact" className="w-full px-5 flex flex-col items-center justify-center">
      <h1 className="text-white px-2 my-4 text-center w-full font-semibold">
        <span>
          <i className="fa-solid fa-dumbbell text-purple-600"></i>
        </span>{" "}
        Our Pricing Plan
      </h1>

      <div className="w-full flex flex-col">
        <div className="flex md:flex-row flex-col items-center justify-between gap-5">
          <input
            required
            type="text"
            placeholder="Enter your fullname"
            className="bg-transparent outline-none border px-5 py-2 rounded-md w-full border-gray-400 text-white focus:border-violet-600"
          />
          <input
            required
            type="email"
            placeholder="Enter your Email"
            className="bg-transparent outline-none border px-5 py-2 rounded-md w-full border-gray-400 text-white focus:border-violet-600"
          />
          <input
            required
            type="text"
            placeholder="Enter your subject"
            className="bg-transparent outline-none border px-5 py-2 rounded-md w-full border-gray-400 text-white focus:border-violet-600"
          />
        </div>
        
        {/* Updated Textarea with Focus Border */}
        <textarea
          required
          name=""
          id=""
          className="w-full mt-5 h-[30vh] bg-transparent border px-5 py-4 rounded-md outline-none border-gray-400 text-white focus:border-violet-600"
          placeholder="Enter your message"
        ></textarea>
        
        {/* Centered Button */}
        <div className="flex justify-center mt-5">
          <button className="px-5 py-2 bg-violet-600 w-auto sm:w-fit rounded-lg active:scale-90">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default Info;
