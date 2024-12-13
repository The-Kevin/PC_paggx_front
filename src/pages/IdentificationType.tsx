import { Link, useLocation } from 'react-router-dom'
import { Button } from '../components/button'
import Cam from '../assets/icons/cam.svg'
import GoToBack from '../assets/icons/back.svg'

export function IdentificationType() {

    const props = useLocation()

    return (
        <div className='flex flex-col justify-center items-center p-7 gap-5'>
            <div className='flex flex-col gap-10 self-start'>
                <Link to='/identification' className=''>
                    <img src={GoToBack} alt="back_icon" />
                </Link>
                <div className='text-3xl font-semibold'>{props.state.title}</div>
            </div>

            <div>Tire uma foto nítida da frente da sua identificação governamental.</div>
            <div className='w-full py-12 flex justify-center items-center bg-violet-100 rounded-lg'>
                <img className='size-2/6' src={props.state.imageLink} alt="document image" />
            </div>

            <Button>
                <img src={Cam} alt="cam icon" />
            </Button>
            <Button variants={({ color: 'secundary' })}>
                Continue em outro dispositivo
            </Button>
        </div>
    )
}