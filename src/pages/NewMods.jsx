import React from 'react'
import Addmodsform from '../components/Addmodsform'
import { Layout } from '../components/Layout'
import { AnimatePresence, motion } from 'framer-motion'

export default function NewMods() {
    return (
        <Layout>
             <motion.div 
             initial={{opacity:0}} 
             animate={{opacity:1}}
             exit={{opacity:0}}
             >
           <AnimatePresence>
           <Addmodsform />
           </AnimatePresence>
           </motion.div>
        </Layout>
    )
}

