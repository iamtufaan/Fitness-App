import React from 'react'
import Button from './Button'

const Banner = () => {
  return (
    <div className=' w-full flex-col space-y-3  h-[30vh] flex items-center justify-center py-5' style={{backgroundImage:`url(${'https://images.unsplash.com/photo-1507398941214-572c25f4b1dc?q=80&w=1373&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'})`,backgroundSize:'cover'}}>
      <h1 className=' font-bold uppercase lg:text-8xl md:text-6xl sm:text-4xl text-2xl'>no <span className=' text-violet-500'>pain</span>, no <span className=' text-violet-500'>gain</span></h1>
      <p className=' lg:text-3xl md:text-lg sm:text-xl text-sm'>Ignite your fitenss journey with premium solutions.</p>
      <Button/>
    </div>
  )
}

export default Banner
