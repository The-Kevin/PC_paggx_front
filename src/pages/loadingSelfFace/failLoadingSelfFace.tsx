import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '../../components/button';
import SadFaceId from '../../assets/icons/sad-face-id.svg'

export function FailLoadingSelfFace() {

    const { state } = useLocation()
    const navigate = useNavigate()
    return (
        <div className='h-screen px-7 flex justify-center'>
            <div className='flex flex-col gap-5 justify-center h-5/6'>
                <div className='font-semibold text-2xl'>Não foi possível verificar</div>
                <div className='font-extralight'>Por favor, siga estas sugestões para nos ajudar a verificar a sua identidade.</div>
                <div className='w-full flex py-10 justify-center'>
                    <img className="max-h-20 " src={SadFaceId} alt="face id" />
                </div>
                <div className='font-extralight py-5'>Certifique-se de que a sua face é visível e bem iluminada.</div>
                <Button onClick={() => navigate('/identification/loading_self', {
                    state
                })}>
                    Continuar
                </Button>
            </div>

        </div>
    )
}