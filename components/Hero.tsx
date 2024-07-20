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
            className="container py-12 xl:py-24 h-[auto] text-center lg:py-0 lg:text-left lg:flex lg:justify-between"
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
            <div className="w-1/2">
                <img
                    src="./hero1.jpg"
                    alt=""
                    width={800}
                    height={500}
                    className="absolute right-20 xl:h-[448px] xl:w-[700px] lg:h-[344px] lg:w=[500px] hidden lg:block"
                />
            </div>
        </section>


    )
}
