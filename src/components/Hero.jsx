import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const Hero = () => {
  const swiperData = [
    {
      id: 1,
      bgImg:
        "https://plus.unsplash.com/premium_photo-1664299685813-eafae169c04a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZmF0ZSUyMGJ1cm4lMjBneW18ZW58MHx8MHx8fDA%3D",
      slogan: "Keep your body",
      title: "Burning",
      desc: "Get ready to burn off some serious fat with our high quality products.",
    },
    {
      id: 2,
      bgImg:
        "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGZhdGUlMjBidXJuJTIwZ3ltfGVufDB8fDB8fHww",
      slogan: "Just Believe In",
      title: "Yourself",
      desc: "We are here to help you achieve your goals.",
    },
    {
      id: 3,
      bgImg:
        "https://plus.unsplash.com/premium_photo-1664298705779-823a10f8f10a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGZhdGUlMjBidXJuJTIwZ3ltJTIweW9nYXxlbnwwfHwwfHx8MA%3D%3D",
      slogan: "Grow Your Body",
      title: "Strength",
      desc: "Make your body stronger with our high quality products.",
    },
  ];

  const gymData = [
    { number: "1200+", title: "Memburs" },
    { number: "120+", title: "Expert Trainers" },
    { number: "13+", title: "Years of Experience" },
    {
      number: "368+",
      title: "GYMs",
    },
  ];

  const items = swiperData.map((item) => {
    return (
      <div
      id="home"
        key={item.id}
        className="w-full text-white flex items-center flex-col px-2 justify-center h-[70vh]"
        style={{
          backgroundImage: `url(${item.bgImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}>
        <h1 className="uppercase sm:text-4xl text-2xl text-purple-400 font-semibold">
          {item.slogan}
        </h1>
        <h1 className="uppercase sm:text-7xl text-6xl text-purple-100 font-bold">
          {item.title}
        </h1>
        <p className="text-gray-400 sm:text-lg text-sm text-center">
          {item.desc}
        </p>
        <a href="#price" className=" px-5 py-3 bg-purple-400 rounded-full cursor-pointer active:scale-90 mt-5">
          {" "}
          Get Stared
        </a>
      </div>
    );
  });

  return (
    <div className="w-full h-auto">
      <AliceCarousel
        mouseTracking
        infinite
        responsive={{ 0: { items: 1 } }}
        autoPlayInterval={1500}
        animationDuration={1500}
        autoPlay
        items={items}
        disableButtonsControls
        d
      />
      <div className=" w-full  flex items-center justify-evenly flex-wrap mt-5 gap-5">
        {gymData.map((item,index)=>{
                return (
                        <div key={index} className=" bg-gray-800 p-4 lg:w-48 sm:w-[48%] w-full  text-white items-center justify-center flex flex-col rounded">
                                <span className=" text-3xl font-bold text-purple-300 ">{item.number}</span>
                                <span>{item.title}</span>
                        </div>
                )
        })}
      </div>
    </div>
  );
};

export default Hero;
