import React from 'react'
import { motion, useScroll } from 'motion/react'

const App = () => {
  const scrollYProg = useScroll().scrollYProgress
  return (
    <>
      <div>
        {/* <motion.div
        className="box"
        initial={{
          x: 500
        }}
        animate={{
          x: 1000,
          rotate: 360,
        }}
        transition={{
          duration: 2,
          delay: 1,
          repeat: Infinity,
          ease: 'anticipate'
        }}
      >
      </motion.div> */}
        {/* <motion.div 
      className="circle"
      animate={{
        x: 400,
        scale: 0.5
      }}
      ></motion.div> */}
        {/* <motion.h1 animate={{ x: 100 }} transition={{ duration: 2, delay:1 }}>Subscribe</motion.h1> */}
        {/* <motion.div
        className="box"
        initial={{
          x: 0,
          y: 0
        }}
        animate={{ x: [0,800,800,0,0], y: [0,0,300,300,0], rotate: [360,-360,-360,360,360] }}
        transition={{ duration: 2, delay: 1 }}
      ></motion.div> */}
        {/* <motion.div
        whileHover={{
          backgroundColor: 'palegoldenrod'
        }}
        whileTap={{
          border: '2px solid yellow'
        }}
        drag
        whileDrag={{
          scale: 0.8
        }}
        dragConstraints={{
          left: 0,
          top: 0,
          right: 500,
          bottom: 500
          }}
          dragDirectionLock='true'
          className="box"
          ></motion.div> */}
      </div>
      <div className='p-20 text-center text-white font-mono'>
        <motion.div className="bg-red-500 w-full h-1 fixed top-0 origin-left left-0" style={{scaleX: scrollYProg}}></motion.div>
        <h2 className='text-4xl font-bold m-8'>Hello World</h2>
        <p className='text-2xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam, perspiciatis labore quia quisquam debitis quibusdam optio quas reiciendis dicta voluptatibus minima numquam unde assumenda ea quod laborum dignissimos sequi incidunt fugit molestias asperiores magni quam eum! Perferendis non nostrum at amet magnam repellendus omnis, aut rem, alias culpa, a nulla obcaecati. Incidunt explicabo eveniet minima. Laborum aliquid optio sit minima illum nostrum, odio ut corrupti porro hic in, amet voluptatibus similique eveniet perferendis doloribus reprehenderit dolor unde aperiam consequuntur ab suscipit delectus? Ut recusandae quo quisquam ipsa eligendi ad dolores. Perspiciatis facere deleniti explicabo molestias, iusto molestiae laboriosam ducimus dicta?<br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quod adipisci quo corrupti doloribus exercitationem rerum quia ab tenetur, consequuntur omnis minima repellat facere nemo repudiandae recusandae enim totam porro at libero voluptatem atque impedit. Sapiente, excepturi commodi modi ratione ut sunt voluptate atque at consequuntur totam beatae dolore temporibus iure facere, ipsam aut tenetur inventore omnis deserunt nemo? Aliquam voluptas tempora nulla quos reprehenderit nihil quae vel pariatur recusandae neque voluptatem eveniet, nemo nam exercitationem vitae deleniti quam iure repellat at quisquam repellendus. Consequatur corporis est porro magni itaque voluptas sint maiores, assumenda dolorum. Consectetur provident eos ad facilis.<br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quod adipisci quo corrupti doloribus exercitationem rerum quia ab tenetur, consequuntur omnis minima repellat facere nemo repudiandae recusandae enim totam porro at libero voluptatem atque impedit. Sapiente, excepturi commodi modi ratione ut sunt voluptate atque at consequuntur totam beatae dolore temporibus iure facere, ipsam aut tenetur inventore omnis deserunt nemo? Aliquam voluptas tempora nulla quos reprehenderit nihil quae vel pariatur recusandae neque voluptatem eveniet, nemo nam exercitationem vitae deleniti quam iure repellat at quisquam repellendus. Consequatur corporis est porro magni itaque voluptas sint maiores, assumenda dolorum. Consectetur provident eos ad facilis.<br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quod adipisci quo corrupti doloribus exercitationem rerum quia ab tenetur, consequuntur omnis minima repellat facere nemo repudiandae recusandae enim totam porro at libero voluptatem atque impedit. Sapiente, excepturi commodi modi ratione ut sunt voluptate atque at consequuntur totam beatae dolore temporibus iure facere, ipsam aut tenetur inventore omnis deserunt nemo? Aliquam voluptas tempora nulla quos reprehenderit nihil quae vel pariatur recusandae neque voluptatem eveniet, nemo nam exercitationem vitae deleniti quam iure repellat at quisquam repellendus. Consequatur corporis est porro magni itaque voluptas sint maiores, assumenda dolorum. Consectetur provident eos ad facilis.<br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quod adipisci quo corrupti doloribus exercitationem rerum quia ab tenetur, consequuntur omnis minima repellat facere nemo repudiandae recusandae enim totam porro at libero voluptatem atque impedit. Sapiente, excepturi commodi modi ratione ut sunt voluptate atque at consequuntur totam beatae dolore temporibus iure facere, ipsam aut tenetur inventore omnis deserunt nemo? Aliquam voluptas tempora nulla quos reprehenderit nihil quae vel pariatur recusandae neque voluptatem eveniet, nemo nam exercitationem vitae deleniti quam iure repellat at quisquam repellendus. Consequatur corporis est porro magni itaque voluptas sint maiores, assumenda dolorum. Consectetur provident eos ad facilis.<br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quod adipisci quo corrupti doloribus exercitationem rerum quia ab tenetur, consequuntur omnis minima repellat facere nemo repudiandae recusandae enim totam porro at libero voluptatem atque impedit. Sapiente, excepturi commodi modi ratione ut sunt voluptate atque at consequuntur totam beatae dolore temporibus iure facere, ipsam aut tenetur inventore omnis deserunt nemo? Aliquam voluptas tempora nulla quos reprehenderit nihil quae vel pariatur recusandae neque voluptatem eveniet, nemo nam exercitationem vitae deleniti quam iure repellat at quisquam repellendus. Consequatur corporis est porro magni itaque voluptas sint maiores, assumenda dolorum. Consectetur provident eos ad facilis.</p>
      </div>
    </>
  )
}

export default App