import React from 'react'
import { motion } from 'framer-motion';

const svgVariants = {
  hidden:{rotate:-180},
  visible:{rotate:0, transition:{
      duration:1
    }
  }
}

const Header = () => {
  return (
    <header>
        <div className='logo'>
            <motion.img className='pizza-svg' src={require("../images/logoImg.png")}
              drag
              dragConstraints={{left:0,top:0,right:0,bottom:0}}
              dragElastic={2}
              variants={svgVariants}
              initial="hidden"
              animate="visible"
            />
        </div>
        
        <motion.div className='title'
          initial ={{y:-250}}
          animate={{y:-10}}
          transition={{delay:0.2, type:'spring',stiffness:120}}
        >
            <h1>Pizza Joint</h1>
        </motion.div>
    </header>
  )
}

export default Header