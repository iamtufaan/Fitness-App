import React from "react";

const Services = () => {
  const services = [
    {
      id: 1,
      serviceImg: "https://images.unsplash.com/photo-1550259979-ed79b48d2a30?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGZpdG5lc3N8ZW58MHx8MHx8fDA%3D",
      title: "Fitness",
      desc: "Get ready to burn off some serious fat with our high quality products.",
      link: "#services",
    },
    {
        id: 2,
        serviceImg: "https://images.unsplash.com/photo-1600881333168-2ef49b341f30?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fHlvZ2ElMjBneW18ZW58MHx8MHx8fDA%3D",
  
        title: "Yoga",
        desc: "Get ready to burn off some serious fat with our high quality products.",
        link: "#services",
      },
      {
        id: 3,
        serviceImg: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGd5bXxlbnwwfHwwfHx8MA%3D%3D",
  
        title: "Gym",
        desc: "Get ready to burn off some serious fat with our high quality products.",
        link: "#services",
      },
      {
        id: 4,
        serviceImg: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGFyb2JpY3MlMjBneW18ZW58MHx8MHx8fDA%3D",
  
        title: "Aerobics",
        desc: "Get ready to burn off some serious fat with our high quality products.",
        link: "#services",
      },
      {
        id: 5,
        serviceImg: "https://images.unsplash.com/photo-1672589008772-4f22acf38f6f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGJveGluZyUyMGd5bXxlbnwwfHwwfHx8MA%3D%3D",
  
        title: "Boxing",
        desc: "Get ready to burn off some serious fat with our high quality products.",
        link: "#services",
      },
      {
        id: 6,
        serviceImg: "https://images.unsplash.com/photo-1600881333168-2ef49b341f30?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fHlvZ2ElMjBneW18ZW58MHx8MHx8fDA%3D",
  
        title: "Yoga",
        desc: "Get ready to burn off some serious fat with our high quality products.",
        link: "#services",
      },
      {
        id: 7,
        serviceImg: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGd5bXxlbnwwfHwwfHx8MA%3D%3D",
  
        title: "Gym",
        desc: "Get ready to burn off some serious fat with our high quality products.",
        link: "#services",
      },
      {
        id: 8,
        serviceImg: "https://images.unsplash.com/photo-1581122584612-713f89daa8eb?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fHp1bWJhJTIwZ3ltfGVufDB8fDB8fHww",
  
        title: "Zumba",
        desc: "Get ready to burn off some serious fat with our high quality products.",
        link: "#services",
      },
  ];

  return (
    <div id="services" className="w-full flex items-center justify-center flex-col px-4 py-20 space-y-3">
      <h1 className="text-white mb-1 text-center w-full font-semibold">
        <span>
          <i className="fa-solid fa-dumbbell text-purple-600"></i>
        </span>{" "}
        Services
      </h1>
      <div className="w-full  h-auto grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
        {services.map((item) => {
          return (
            <div
              key={item.id}
              className="relative flex items-center flex-col h-72 p-5 rounded-xl overflow-hidden text-center "
              style={{
                backgroundImage: `url(${item.serviceImg})`,
                backgroundSize:'cover',
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center p-4">
                <span className="rounded-full p-2 border-2 border-purple-600 mb-2">
                  <i className="fa-solid fa-dumbbell text-purple-400"></i>
                </span>
                <h2 className="text-white text-xl font-semibold">{item.title}</h2>
                <p className="text-gray-300 text-sm mt-2">{item.desc}</p>
                <a href={item.link} className="text-purple-400 mt-3  flex items-center gap-3 justify-center">
                  Read More <i className="fa fa-arrow-right-long"></i>
                </a>
              </div>
            </div>
          );
        })}
      </div>
        <button className=" px-10 py-2 border text-violet-400 border-violet-400 font-bold rounded-lg">View All Services <i className="fa fa-arrow-right-long active:scale-90"></i></button>
    </div>
  );
};

export default Services;
