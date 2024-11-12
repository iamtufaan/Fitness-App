import React from "react";

const Price = () => {
  return (
    <div id="price" className=" px-5 py-20">
      <h1 className="text-white px-2 my-4 text-center w-full font-semibold">
        <span>
          <i className="fa-solid fa-dumbbell text-purple-600"></i>
        </span>{" "}
        Our Pricing Plan
      </h1>
      <div className=" grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 py-3 ">
        <div className=" flex flex-col items-center border-[3px] border-gray-400 rounded-lg justify-between p-5 h-[65vh] hover:border-violet-400">
          <div className="">
            <div className=" border-b">
              <h1 className=" text-5xl font-semibold">Basic Plan</h1>
              <h2>
                <span className=" text-6xl font-semibold text-violet-400">
                  ₹450.00
                </span>
                /month
              </h2>
            </div>
            <div className="  w-full mt-5 space-y-2">
              <h1 className=" flex gap-2 items-center text-xl">
                <i class="fa-solid fa-square-check text-violet-400 text-xl "></i>{" "}
                Get access to all gym classes
              </h1>
              <h1 className=" flex gap-2 items-center text-xl">
                <i class="fa-solid fa-square-check text-violet-400 text-xl "></i>{" "}
                Unlimited Yog classes
              </h1>
              <h1 className=" flex gap-2 items-center text-xl">
                <i class="fa-solid fa-square-check text-violet-400 text-xl "></i>{" "}
                Use of lockers
              </h1>
            </div>
          </div>

          <button className=" bg-violet-600 w-full text-xl font-semibold py-2 rounded-md active:scale-90  ">
            {" "}
            Select Plan
          </button>
        </div>
        <div className=" flex flex-col items-center border-[3px] border-gray-400 rounded-lg justify-between p-5 h-[65vh] hover:border-violet-700 group relative">
          <div className="">
            <div className=" border-b">
              <h1 className=" text-5xl font-semibold decoration-0">Premium Plan</h1>
              <h2>
                <span className=" text-6xl font-semibold text-violet-400">
                  ₹2500.00
                </span>
                /month
              </h2>
            </div>
            <div className="  w-full mt-5 space-y-2">
              <h1 className=" flex gap-2 items-center text-xl">
                <i class="fa-solid fa-square-check text-violet-400 text-xl "></i>{" "}
                Get access to all gym classes
              </h1>
              <h1 className=" flex gap-2 items-center text-xl">
                <i class="fa-solid fa-square-check text-violet-400 text-xl "></i>{" "}
                Unlimited Yog classes
              </h1>
              <h1 className=" flex gap-2 items-center text-xl">
                <i class="fa-solid fa-square-check text-violet-400 text-xl "></i>{" "}
                Use of lockers
              </h1>
              <h1 className=" flex gap-2 items-center text-xl">
                <i class="fa-solid fa-square-check text-violet-400 text-xl "></i>{" "}
                Weekday pool access
              </h1>
              <h1 className=" flex gap-2 items-center text-xl">
                <i class="fa-solid fa-square-check text-violet-400 text-xl "></i>{" "}
                Free gym t-shirt
              </h1>
              <h1 className=" flex gap-2 items-center text-xl">
                <i class="fa-solid fa-square-check text-violet-400 text-xl "></i>{" "}
                20% discount on all gym products
              </h1>
            </div>
          </div>

          <button className=" bg-violet-600 w-full text-xl font-semibold py-2 rounded-md active:scale-90 ">
            {" "}
            Select Plan
          </button>
          <p className=" rounded-full bg-violet-500 px-5 py-1 absolute top-[-16px] group-hover:bg-violet-700 ">
            Recommended
          </p>
        </div>
        <div className=" flex flex-col items-center border-[3px] border-gray-400 rounded-lg justify-between p-5 h-[65vh] hover:border-violet-400">
          <div className="">
            <div className=" border-b">
              <h1 className=" text-5xl font-semibold">VIP Plan</h1>
              <h2>
                <span className=" text-6xl font-semibold text-violet-400">
                  ₹4000.00
                </span>
                /month
              </h2>
            </div>
            <div className="  w-full mt-5 space-y-2">
              <h1 className=" flex gap-2 items-center text-xl">
                <i class="fa-solid fa-square-check text-violet-400 text-xl "></i>{" "}
                Get access to all gym classes
              </h1>
              <h1 className=" flex gap-2 items-center text-xl">
                <i class="fa-solid fa-square-check text-violet-400 text-xl "></i>{" "}
                Unlimited Yog classes
              </h1>
              <h1 className=" flex gap-2 items-center text-xl">
                <i class="fa-solid fa-square-check text-violet-400 text-xl "></i>{" "}
                Use of lockers
              </h1>
              <h1 className=" flex gap-2 items-center text-xl">
                <i class="fa-solid fa-square-check text-violet-400 text-xl "></i>{" "}
                Access to pool 6 days a week
              </h1>
              <h1 className=" flex gap-2 items-center text-xl">
                <i class="fa-solid fa-square-check text-violet-400 text-xl "></i>{" "}
                Free gym t-shirt
              </h1>
              <h1 className=" flex gap-2 items-center text-xl">
                <i class="fa-solid fa-square-check text-violet-400 text-xl "></i>{" "}
                30% discount on all gym products
              </h1>
              <h1 className=" flex gap-2 items-center text-xl">
                <i class="fa-solid fa-square-check text-violet-400 text-xl "></i>{" "}
                Personal trainer for 3 days a week
              </h1>
            </div>
          </div>

          <button className=" bg-violet-600 w-full text-xl font-semibold py-2 rounded-md active:scale-90 ">
            {" "}
            Select Plan
          </button>
        </div>
      </div>
    </div>
  );
};

export default Price;
