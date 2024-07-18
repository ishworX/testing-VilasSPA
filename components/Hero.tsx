import React from 'react'
import Button from './ui/Button'
import { TbAdFilled } from 'react-icons/tb';
import Image from 'next/image';

function ActionButtons() {
    return (
        <div className="flex gap-4">
            <Button buttonStyle={{ color: 'yellow', rounded: 'lg', size: 'md' }}>
                Book Appointment
            </Button>

            <Button
                buttonStyle={{ color: 'yellow', rounded: 'lg', size: 'md' }}
                buttonVariant="outline"
            >
                See Services
            </Button>
        </div>
    );
};

export const Hero = () => {
    return (
        // Trying new section
    )
}
