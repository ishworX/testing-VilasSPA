import React from 'react'
import Button from './ui/Button'
import { FaCircleRight } from 'react-icons/fa6';
import { TbAdFilled } from 'react-icons/tb';

function ActionButtons() {
    return (
        <div className="flex gap-4">
            <Button buttonStyle={{ color: 'yellow', rounded: 'lg', size: 'md' }}>
                Get a template
            </Button>

            <Button
                buttonStyle={{ color: 'yellow', rounded: 'lg', size: 'md' }}
                rightIcon={<TbAdFilled size={20} />}
            >
                See more
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
                    <h3 className="text-4xl font-semibold text-slate-950 md:text-6xl">
                        Here is your new Tailwind UI kit, welcome!
                    </h3>
                    <h4 className="text-lg font-normal leading-7 text-slate-500">
                        We've done it carefully and simply. The elements work well together to create stunning landings.
                    </h4>
                </div>
                <ActionButtons />
            </div>
            <div className="order-first flex w-full flex-1 items-center justify-center bg-slate-50 py-28 md:order-last lg:py-0">
                <img
                    src="https://www.tailframes.com/images/illustration.webp"
                    alt=""
                    width={183}
                    height={345}
                    className="h-[172px] w-[91px] md:h-[345px] md:w-[183px]"
                />
            </div>
        </section>


    )
}
