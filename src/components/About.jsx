import React from 'react'

const About = () => {
  return (
    <div id='about' className=' w-full h-fit  flex px-3   md:flex-row mt-20 flex-col gap-5'>
      <div className='   md:w-[50%] w-full'>
        <img className=' w-full h-full object-contain' src="https://plus.unsplash.com/premium_photo-1661265933107-85a5dbd815af?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z3ltfGVufDB8fDB8fHww" alt="" />
      </div>
      <div className=' h-[40%] text-white md:w-[50%]  w-full flex flex-col'>
        <h1 className=' text-white font-semibold'> <span><i class="fa-solid fa-dumbbell text-purple-600"></i></span> About Us </h1>
        <h2 className=' font-bold text-xl sm:text-3xl'>Effortless Strength, Timely Gains: <br /> Building BetterBodies, Faster</h2>
      <div className=' space-y-3 mt-3 text-gray-400'> 
      <p>At Our Gym, we prioritize a holistic approach to health, offering a range of cutting edge equipment,personalized training programs,and diverse fitness classes. <br /></p>
      <p>Our Knowledgeable and friendly staff are committed to creating an inclisive and motivative environment,ensurig that everyone feels welcome and empowered. Discover a place where your fitness aspirations become reality. From streagth training to cardio workouts, we provide the tools and expertise you need to sculpt your body,boost your energy , and enhance your overall well-being. Join our bibrant community and experience the transformation that awaits you . Your fiteness journey begins here.</p>
      </div>
      <a href='#price'  className=' px-5 py-3 bg-[#373641] border border-purple-500 text-purple-500 uppercase rounded-lg mt-5 cursor-pointer active:scale-90 w-fit '> become a member</a>
      </div>
    </div>
  )
}

export default About
