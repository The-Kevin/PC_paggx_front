import { useLocation, useNavigate } from 'react-router-dom'
import { Button } from '../components/button'
import Cam from '../assets/icons/cam.svg'
import { BackButton } from '../components/atoms/backButton'

export function IdentificationChoose() {

    const navigate = useNavigate()
    const props = useLocation()

    return (
        <div className='flex flex-col justify-center items-center p-7 gap-5'>
            <div className='flex flex-col gap-10 self-start'>
                <BackButton to='/identification' />
                <div className='text-3xl font-semibold'>{props.state.title}</div>
            </div>

            <div>Tire uma foto nítida da frente da sua identificação governamental.</div>
            <div className='w-full py-12 flex justify-center items-center bg-violet-100 rounded-lg'>
                <img className='size-2/6' src={props.state.imageLink} alt="document image" />
            </div>

            <Button onClick={() => navigate('/identification/capture_documents', {
                state: {
                    identificationTypeId: props.state.identificationTypeId
                }
            })}>
                <img src={Cam} alt="cam icon" />
            </Button>
            <Button variants={({ color: 'secundary' })}>
                Continue em outro dispositivo
            </Button>
        </div>
    )
}