import { Button } from '../../components/button';
import FailGenericCard from '../../assets/icons/fail_generic_card.svg'
import { useNavigate } from 'react-router-dom';
export function FailLoadingDocuments() {

    const navigate = useNavigate()

    return (
        <div className='h-screen px-7 flex justify-center'>
            <div className='flex flex-col gap-5 justify-center h-2/3'>
                <div className='font-semibold text-2xl'>Não foi possível verificar as fotos</div>
                <div className='font-extralight'>Siga estas dicas para nos ajudar a verificar sua identidade.</div>
                <div className='w-full flex justify-center'>
                    <img src={FailGenericCard} alt="fail document" />
                </div>
                <div className='font-extralight py-5'>Por favor, submeta uma identificação governamental dentro da validade.</div>
                <Button onClick={() => navigate('/identification')}>
                    Tentar novamente
                </Button>
            </div>

        </div>
    )
}