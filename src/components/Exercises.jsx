import React from "react";

const Exercises = () => {
  const exercises = [
    {
      id: 1,
      trainerImg:
        "https://images.unsplash.com/photo-1608216958660-afe291732df0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2FybXVwfGVufDB8fDB8fHww",
      name: "Warm up",
      duration: 15,
      sets: 3,
      calories: 100,
    },
    {
      id: 2,
      trainerImg:
        "https://images.unsplash.com/photo-1585152968992-d2b9444408cc?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTF8fHNob2xkZXIlMjB3b3Jrb3V0fGVufDB8fDB8fHww",
      name: "Shoulder Workout",
      duration: 20,
      sets: 4,
      calories: 150,
    },
    {
      id: 3,
      trainerImg:
        "https://plus.unsplash.com/premium_photo-1663011449750-7c44e1d9ee1d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fHlvZ2F8ZW58MHx8MHx8fDA%3D",
      name: "Yoga Session",
      duration: 55,
      sets: 5,
      calories: 250,
    },
    {
      id: 4,
      trainerImg:
        "https://images.unsplash.com/photo-1646495001290-39103b31873a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGxlZyUyMHdvcmtvdXR8ZW58MHx8MHx8fDA%3D",
      name: "Leg Workout",
      duration: 18,
      sets: 4,
      calories: 120,
    },
  ];
  return (
    <div className=" flex items-center  flex-col   mt-20 gap-5 py-5">
      <h1 className="text-white mb-1 text-center w-full font-semibold">
        <span>
          <i className="fa-solid fa-dumbbell text-purple-600"></i>
        </span>{" "}
        Our Expert Trainers
      </h1>
      <div className="w-full  h-auto grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5  px-5">
        {exercises.map((item) => {
          return (
            <div>
              <div
                key={item.id}
                className="relative flex items-center flex-col h-72 p-5 rounded-xl overflow-hidden text-center "
                style={{
                  backgroundImage: `url(${item.trainerImg})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}></div>
              <div className=" w-full  text-white flex flex-col justify-center  py-2">
                <h1 className=" font-semibold">{item.name}</h1>
              <div className=" flex items-center  gap-3 text-gray-400  sm:text-xs">
<span>{item.duration} min</span>
<span className=" w-1 h-1 bg-gray-400  rounded-full"></span>
<span>{item.sets} sets</span>
<span className=" w-1 h-1 bg-gray-400  rounded-full"></span>

<span>{item.calories} calories</span>
              </div>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};

export default Exercises;
