import React from 'react'

const Trainer = () => {
        const trainers = [
                {
                  id: 1,
                  trainerImg: "https://images.unsplash.com/photo-1550345332-09e3ac987658?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGd5bSUyMHRyYWluZXJ8ZW58MHx8MHx8fDA%3D",
                  name: "Dr. Binal Vaghel",
                  role: "Body Building Coach",
                },
                {
                  id: 2,
                  trainerImg: "https://images.unsplash.com/photo-1611672585731-fa10603fb9e0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fGd5bSUyMHRyYWluZXJ8ZW58MHx8MHx8fDA%3D",
                  name: "Dr. Ajay Prajapati",
                  role: "Gym Trainer",
                },
                {
                  id: 3,
                  trainerImg: "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGd5bSUyMHRyYWluZXJ8ZW58MHx8MHx8fDA%3D",
                  name: "Mrs. Lilly Doe",
                  role: "Prof. fitness coach",
                },
                {
                  id: 4,
                  trainerImg: "https://images.unsplash.com/photo-1577221084712-45b0445d2b00?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGd5bSUyMHRyYWluZXJ8ZW58MHx8MHx8fDA%3D",
                  name: "Roman Reigns",
                  role: "Prof. wrestling coach",
                },
              ];
  return (
    <div className=' flex items-center  flex-col   mt-20 gap-5 py-5'>
         <h1 className="text-white mb-1 text-center w-full font-semibold">
        <span>
          <i className="fa-solid fa-dumbbell text-purple-600"></i>
        </span>{" "}
        Our Expert Trainers
      </h1>
       <div className="w-full  h-auto grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5  px-5">
        {trainers.map((item) => {
          return (
            <div
              key={item.id}
              className="relative flex items-center flex-col h-72 p-5 rounded-xl overflow-hidden text-center "
              style={{
                backgroundImage: `url(${item.trainerImg})`,
                backgroundSize:'cover',
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              {/* Overlay */}
              <div className="absolute  bottom-0 w-full bg-black/40 flex flex-col items-center justify-center p-4">
                <h1 className=' font-semibold'>{item.name}</h1>
                <h1 className=' font-semibold text-gray-400'>{item.role}</h1>
              </div>
            </div>
          );
        })}
      </div>
        <button className=" px-10 py-2 border text-violet-400 border-violet-400 font-bold rounded-lg">View All Services <i className="fa fa-arrow-right-long active:scale-90"></i></button>
    </div>
  )
}

export default Trainer
