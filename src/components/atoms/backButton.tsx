import { Link, LinkProps } from 'react-router-dom'
import GoToBack from '../../assets/icons/back.svg'

interface BackButtonProps extends LinkProps {
    to: string,

}

export function BackButton({ to, ...props }: BackButtonProps) {
    return (
        <Link to={to} {...props}>
            <img src={GoToBack} alt="back_icon" />
        </Link>
    )

}