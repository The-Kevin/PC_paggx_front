import { useLocation, useNavigate } from 'react-router-dom'
import { Button } from '../components/button'
import FaceId from '../assets/icons/face-id.svg'

export function ValidateSelfFace() {
    const { state } = useLocation()
    const navigate = useNavigate()

    return (
        <div className='h-screen flex flex-col items-center px-7'>
            <div className='h-4/5 flex flex-col justify-center gap-5'>
                <div className='font-semibold text-2xl'>Vamos certificar-nos de que é quem diz ser</div>
                <div className='font-extralight'>Posicione-se ao centro da câmera e, após, mova a sua face para a esquerda e direita para exibir ambos os lados</div>
                <div className='w-full flex justify-center py-10'>
                    <img className='max-h-24' src={FaceId} alt="face id icon" />
                </div>
                <Button onClick={() => navigate('/identification/capture_self', {
                    state
                })}>
                    Iniciar
                </Button>
                <Button variants={({
                    color: 'secundary'
                })}>
                    Continue em outro dispositivo
                </Button>
            </div>
        </div>
    )
}