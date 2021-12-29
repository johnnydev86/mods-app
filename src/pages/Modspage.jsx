import React from 'react'
import { Navbar } from '../components/Navbar'
import UserList from '../components/UserList'
import { motion } from 'framer-motion'
import { chakra, Container, Heading } from '@chakra-ui/react'


export default function Modspage() {
    return (
        <div>
            <Navbar />
            <motion.div
             initial={{opacity:0}} 
             animate={{opacity:1}}
             exit={{opacity:0}}
             >
            <Heading>Mods</Heading>
            <UserList />
            </motion.div>
        </div>
    )
}
