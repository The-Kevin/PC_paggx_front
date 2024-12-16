import { Link, LinkProps } from 'react-router-dom'
import blackButtonIconBack from '../../assets/icons/black_button_icon_back.svg'
import whiteButtonIconBack from '../../assets/icons/white_button_icon_back.svg'
import { tv } from 'tailwind-variants'


const backButton = tv({
    base: 'flex items-center justify-center size-8 rounded-md duration-300',
    variants: {
        hoverBackgroundColor: {
            'white': 'hover:bg-white/25',
            'black': 'hover:bg-black/5'
        }
    },
    defaultVariants: {
        hoverBackgroundColor: 'black'
    }
})
interface BackButtonProps extends LinkProps {
    to: string,
    iconColor?: 'white' | 'black',
    variants?: {
        hoverBackgroundColor: 'white' | 'black'
    }
}

export function BackButton({ to, iconColor = 'black', variants, ...props }: BackButtonProps) {
    return (
        <Link to={to} {...props} className={backButton({ hoverBackgroundColor: variants?.hoverBackgroundColor })}>
            <img className='size-3/6' src={(iconColor === 'black') ? blackButtonIconBack : whiteButtonIconBack} alt="back_icon" />
        </Link>
    )

}