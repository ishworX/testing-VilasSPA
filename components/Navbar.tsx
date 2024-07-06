"use client"
import Link from 'next/link'
import { NavItems } from "@/constants"
import { useState } from 'react'
import { IoClose, IoMenu } from 'react-icons/io5'
import { motion } from "framer-motion"

const Navbar = () => {
    const [isOpen, setOpen] = useState(false);
    const handleNavbar = () => {
        setOpen(!isOpen);
    }
    return (
        <>
            <div className="bg-[#f19cbb] flex justify-between items-center h-24 mx-auto text-white px-4" >
                {/* <div className='max-w-screen-xl h-[70px] mx-auto flex items-center justify-between px-4 text-white'> */}
                <Link className='text-xl uppercase text-[#ffffff] font-semibold' href={"/"}>
                    Logo
                </Link>

                <ul className='hidden md:flex'>
                    {NavItems.map((item) => (
                        <li key={item.id}
                            className='p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black'>
                            <Link href={item.link}> {item.label} </Link>
                        </li>
                    ))}
                </ul>

                <div onClick={handleNavbar} className='block md:hidden cursor-pointer'>
                    {isOpen ? <IoClose size={30} /> : <IoMenu size={30} />}
                </div>

                <ul className={
                    isOpen ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r-gray-900 bg-cyan-950 ease-in-out duration-500'
                        :
                        'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[100%]'}>

                    <h1 className='w-full text-3xl font-bold text-[#00d9fa] m-4 uppercase'> Logo </h1>

                    {/* <Link className='w-full text-3xl font-bold text-[#00d9fa] m-4 uppercase' href={"/"}>
                    Logo
                    </Link> */}

                    {
                        NavItems.map((item) => (
                            <li key={item.id}
                                className='p-4 border-b rounded-xl hover:bg-[#00d9fa]  during-300 hover:text-black cursor-pointer border-gray-600'>
                                <Link href={item.link}> {item.label} </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </>
    )
}

export default Navbar

//saving for later bg-cyan-950