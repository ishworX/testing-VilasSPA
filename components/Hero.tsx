import React from 'react'
import Button from './ui/Button'
import { TbAdFilled } from 'react-icons/tb';
import Image from 'next/image';

function ActionButtons() {
    return (
        <div className="flex gap-4">
            <Button
                type="button"
                title="Book Appointment"
                variant="btn_green"
            />

            <Button
                type="button"
                title="See Services"
                variant="btn_green"
            />
        </div>
    );
};

export const Hero = () => {
    return (
        <section
            className="max-w-screen-2xl m-auto w-full grid grow gap-4 px-0 sm:px-0 md:grid-cols-2 md:flex-row lg:gap-6 lg:px-0 xl:px-0"
        >
            <div className="flex flex-1 flex-col items-start gap-12 pb-6 md:my-20 lg:my-44 lg:pb-0 pl-3 sm:pl-8 lg:pl-16 xl:pl-32">
                <div className="flex max-w-lg flex-col gap-6 ">
                    <h3 className="text-4xl xs:mt-10 font-semibold text-slate-950 md:text-5xl">
                        VILAS AESTHETICS NAILS & SPA.
                    </h3>
                    <h4 className="text-lg font-normal leading-7 text-slate-500">
                        Experience the exceptional spa services at Vilas Aesthitcs. Our dedicated team is here to serve you.
                    </h4>
                    <div className='flex gap-9'>
                        <Image
                        src="/spa1.jpg"
                        alt="spa_image"
                        width={100}
                        height={100}
                        className="rounded-full"
                    />
                    <Image
                        src="/spa2.jpg"
                        alt="spa_image"
                        width={100}
                        height={100}
                        className="rounded-full"
                    />
                    <Image
                        src="/spa3.jpg"
                        alt="spa_image"
                        width={100}
                        height={100}
                        className="rounded-full"
                    />
                    </div>
                </div>
                <ActionButtons />
            </div>
            <div className="w-1/2">
                <img
                    src="./hero1.jpg"
                    alt=""
                    width={800}
                    height={500}
                    className="absolute right-20 mt-20 xl:h-[448px] xl:w-[700px] lg:h-[344px] lg:w=[500px] hidden lg:block"
                />
            </div>
        </section>


    )
}
