import { ComponentProps, ReactNode } from 'react';
import { tv } from 'tailwind-variants';

interface ButtonProps extends ComponentProps<'button'> {
    children?: ReactNode,
    variants?: {
        color?: "primary" | "disabled",
        size?: "md"
    }
}

const button = tv({
    base: 'font-semibold transition-transform transform flex justify-center items-center',
    variants: {
        color: {
            primary: "bg-indigo-700 text-white hover:-translate-y-1",
            disabled: "bg-gray-500 text-white"
        },
        size: {
            md: "w-full h-12"
        }
    },
    defaultVariants: {
        size: 'md',
        color: 'primary'
    }
})

export function Button({ children, variants, ...props }: ButtonProps) {
    return (
        <button {...props} className={button({ color: variants?.color, size: variants?.size })}>{children}</button>
    )

}