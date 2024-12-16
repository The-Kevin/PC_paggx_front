import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import AxiosInstance from '../services/axios'

export function LoadingDocuments() {
    const props = useLocation()
    const [isLoading, setIsLoading] = useState<boolean>(true)

    useEffect(() => {
        const formData = new FormData()

        formData.append('frontDocumentImage', props.state.frontDocumentImage)
        formData.append('backDocumentImage', props.state.backDocumentImage)
        formData.append('identificationTypeId', props.state.identificationTypeId)

        AxiosInstance.post('/upload/documents', formData).then(response => {
            if (response.status === 200) {
                setIsLoading(false)
            }
        })
    }, [isLoading])


    return (

        <div className='h-screen flex'>
            {
                isLoading ? (
                    <div className='flex flex-col items-center px-7 '>
                        <div className='h-1/2 flex flex-col justify-center items-center gap-7'>
                            <h1 className='font-semibold text-3xl w-full '>
                                Processamento de identificação
                            </h1>
                            <div className='text-lg font-extralight'>
                                Por favor, aguarde enquanto processamos os seus carregamentos. Isto poderá demorar alguns segundos.
                            </div>
                        </div>
                        <div>
                            oxe
                        </div>
                    </div>
                ) : (
                    <div className='flex flex-col items-center px-7 '>
                        <div className='h-1/2 flex flex-col justify-center items-center gap-7'>
                            <h1 className='font-semibold text-3xl w-full '>
                                Parabéns, terminou!
                            </h1>
                            <div className='text-lg font-extralight'>
                                Obrigado por verificar a sua identidade.
                            </div>
                        </div>
                        <div>
                            oxe
                        </div>
                    </div>
                )
            }

        </div>

    )
}