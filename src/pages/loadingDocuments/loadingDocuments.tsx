import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import AxiosInstance from '../../services/axios'
import FrontGenericCard from '../../assets/icons/front_generic_card.svg'

export function LoadingDocuments() {
    const props = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        const formData = new FormData()

        formData.append('frontDocumentImage', props.state.frontDocumentImage)
        formData.append('backDocumentImage', props.state.backDocumentImage)
        formData.append('identificationTypeId', props.state.identificationTypeId)

        AxiosInstance.post('/upload/documents', formData).then(response => {
            if (response.status !== 200) {
                navigate('/identification/fail_loading_documents')
            }

            navigate('/identification/validate_self', {
                state: {
                    identificationId: response.data.id
                }
            })
        }).catch((_) => {
            navigate('/identification/fail_loading_documents')
        })
    }, [])

    return (
        <div className='h-screen flex flex-col items-center px-7'>
            <div className='flex flex-col items-center justify-center h-4/6'>
                <div className='h-1/2 flex flex-col justify-center items-center gap-7'>
                    <h1 className='font-semibold text-3xl w-full '>
                        Processamento de identificação
                    </h1>
                    <div className='text-lg font-extralight'>
                        Por favor, aguarde enquanto processamos os seus carregamentos. Isto poderá demorar alguns segundos.
                    </div>
                </div>
                <div className='w-full flex justify-center items-center'>
                    <div className='bg-indigo-900/50 border-indigo-900 border-2 w-2/3 h-8 rounded-full absolute animate-float'></div>
                    <img className='size-2/3' src={FrontGenericCard} alt="front generic card" />
                </div>
            </div>
        </div>

    )
}