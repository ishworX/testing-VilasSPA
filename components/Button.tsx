import Image from "next/image";

type ButtonProps = {
    type: 'button' | 'submit';
    title: string;
    icon?: string;
    variant: string;
    full?: boolean;
}

const Button = ({ type, title, full }: ButtonProps) => {
    return (
        <button
            className={`flexCenter gap-3 rounded-full border bg-green-90 px-8 py-4 text-pink transition-all hover:bg-red ${full && 'w-full'}`}
            type={type}
        >
            <label className="bold-16 whitespace-nowrap cursor-pointer">{title}</label>
        </button>

    )
}

export default Button