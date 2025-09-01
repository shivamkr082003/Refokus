import React from 'react'
import Product from './Product'
import { useState } from 'react'
import { motion } from 'framer-motion'
import vid1 from "../assets/ttr.webm"
import vid2 from "../assets/yir.webm"
import vid3 from "../assets/yahoo.webm"
import vid4 from "../assets/arqitel.webm"
import vid5 from "../assets/lavender.webm"


function Products() {
  var products = [
    { title: "arqitel", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam totam nostrum ut nam dolores doloribus quos ipsum itaque. Odit nulla similique !", live: true, case: false },
    { title: "TTR", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam totam nostrum ut nam dolores doloribus quos ipsum itaque. Odit nulla similique !", live: true, case: false },
    { title: "YIR 2022", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam totam nostrum ut nam dolores doloribus quos ipsum itaque. Odit nulla similique !", live: true, case: true },
    { title: "Yahoo", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam totam nostrum ut nam dolores doloribus quos ipsum itaque. Odit nulla similique !", live: true, case: true },
  ]

  const [pos, setPos] = useState(0);

  const mover = (val) => {
    setPos(val * 23);
  }

  return (
    <div className='mt-32 relative'>
      {products.map((val, index) =>
        <Product mover={mover} count={index} val={val} />
      )}
      <div className='absolute w-full h-full pointer-events-none top-0'>
        <motion.div
          initial={{ y: pos, x: pos }}
          animate={{ y: pos + `rem` }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
          className='window absolute w-[32rem] h-[23rem] bg-white-100 left-[44%] -translate-x-[50%] overflow-hidden'>

          <motion.div transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }} animate={{ y: -pos + `rem` }} className=' w-full h-full '>
            <video
              className="w-full h-full object-cover"
              src={vid1}
              autoPlay
              loop
              muted
              playsInline
            />
          </motion.div>

          <motion.div transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }} animate={{ y: -pos + `rem` }} className=' w-full h-full '>
            <video
              className="w-full h-full object-cover"
              src={vid2}
              autoPlay
              loop
              muted
              playsInline
            />
          </motion.div>
          <motion.div
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            animate={{ y: -pos + `rem` }}
            className='w-full h-full flex items-center justify-center bg-black'>
            <video
              className="w-full h-full object-cover"
              src={vid3}
              autoPlay
              loop
              muted
              playsInline
            />
          </motion.div>

          <motion.div transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }} animate={{ y: -pos + `rem` }} className=' w-full h-full '>
            <video
              className="w-full h-full object-cover"
              src={vid4}
              autoPlay
              loop
              muted
              playsInline
            />
          </motion.div>
          <motion.div transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }} animate={{ y: -pos + `rem` }} className=' w-full h-full '>
            <video
              className="w-full h-full object-cover"
              src={vid5}
              autoPlay
              loop
              muted
              playsInline
            />

          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Products