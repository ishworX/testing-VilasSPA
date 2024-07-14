import React from 'react'
import Button from './ui/Button'
import { TbAdFilled } from 'react-icons/tb';
import Image from 'next/image';

function ActionButtons() {
    return (
        <div className="flex gap-4">
            <Button buttonStyle={{ color: 'pink', rounded: 'lg', size: 'md' }}>
                Book Appointment
            </Button>

            <Button
                buttonStyle={{ color: 'pink', rounded: 'lg', size: 'md' }}
                buttonVariant="outline"
            >
                See Services
            </Button>
        </div>
    );
};

export const Hero = () => {
    return (
        <div className='h-[calc(100vh-13vh)] w-full flex justify-center flex-col'>
            <div className='w-4/5 mx-auto items-center grid grid-cols-1 lg:grid-cols-5 gap-8'>
            {/* Text Content */}
            <div className='col-span-2'>
                <h1 className='text-2xl sm:text-4xl lg:text-5xl xl:text-7xl text-blue-950 font-bold'>
                    This will be the title!
                </h1>
                <p className='text-sm md:text-[17px] text-gray-700 text-opacity-80 mt-4 font-medium'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus magni, deleniti quis tempora consectetur eligendi magnam tenetur enim saepe voluptates libero alias placeat aliquam odit ut sit deserunt laborum fuga ipsum. Cum, ad maxime corrupti possimus quos eum aliquid sapiente perspiciatis minus modi inventore natus provident ullam itaque sit similique.
                </p>
                <div className='flex items-center space-x-2 mt-10'>
                    <ActionButtons />
                </div>
            </div>
            {/* Image Content */}
            <div>
                <Image src="/hero.png" alt="hero" width={700} height={700}/>

            </div>

            </div>

        </div>
    )
}
