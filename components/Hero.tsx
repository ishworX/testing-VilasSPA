import React from 'react'
import Button from './ui/Button'
import { TbAdFilled } from 'react-icons/tb';

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
        <section
            className="max-w-screen-2xl m-auto w-full grid grow gap-4 px-0 sm:px-0 md:grid-cols-2 md:flex-row lg:gap-6 lg:px-0 xl:px-0"
        >
            <div className="flex flex-1 flex-col items-start gap-12 pb-6 md:my-20 lg:my-44 lg:pb-0 pl-3 sm:pl-8 lg:pl-16 xl:pl-32">
                <div className="flex max-w-lg flex-col gap-6">
                    <h3 className="text-4xl font-semibold text-slate-950 md:text-5xl">
                        VILAS AESTHETICS NAILS & SPA.
                    </h3>
                    <h4 className="text-lg font-normal leading-7 text-slate-500">
                        Experience the exceptional spa services at Vilas Aesthitcs. Our dedicated team is here to serve you.
                    </h4>
                </div>
                <ActionButtons />
            </div>
            <div className="order-first flex w-full flex-1 items-center justify-center bg-[#FFDCE7] py-28 md:order-last lg:py-0">
                <img
                    src="./hero.png"
                    alt=""
                    width={587}
                    height={816}
                    className="h-[200px] w-[250px] md:h-[600px] md:w-[600px]"
                />
            </div>
        </section>


    )
}
