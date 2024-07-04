"use client"
import Link from 'next/link'
import { NavItems } from "@/constants"
import { useState } from 'react'
import { IoClose } from 'react-icons/io5'
import { IoIosMenu } from 'react-icons/io'
import { motion } from "framer-motion"

const Navbar = () => {
    const [isOpen, setOpen] = useState(false);
    return (
        <div className="bg-[#f19cbb] fixed top-0 left-0 w-full" >
            <nav className='max-w-screen-xl h-[70px] mx-auto flex items-center justify-between px-4 text-white'>
                <Link className='text-xl uppercase font-semibold' href={"/"}> 
                Logo 
                </Link>

                <ul className='hidden md:flex items-center gap-7'>
                    {NavItems.map((item) => (
                        <li key={item.id}> 
                            <Link href={item.link}> {item.label} </Link>
                        </li>
                    ))}
                </ul>

                {isOpen && (
                    <motion.ul 
                        initial={{x:200, y:200, opacity:0}} 
                        animate={{x:0, y:0, opacity:1}} 
                        className='fixed top-[70px] right-0 w-2/4 bg-cyan-950 h-[calc(100dvh-70px)] flex items-center justify-around flex-col'>
                        {NavItems.map((item) => (
                            <li key={item.id}> 
                                <Link href={item.link}> {item.label} </Link>
                            </li>
                        ))}
                    </motion.ul>
                    )
                }

                <motion.div 
                        initial={{x:200, y:200, opacity:0}} 
                        animate={{x:0, y:0, opacity:1}} 
                    
                        onClick={() => setOpen(!isOpen)} 
                    className='block text-4xl cursor-pointer md:hidden'>
                    {isOpen ? <IoClose/> : <IoIosMenu />}
                </motion.div>
            </nav>
        </div>
    )
}

export default Navbar