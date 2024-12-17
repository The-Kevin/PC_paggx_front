import Webcam from 'react-webcam';
import Info from '../assets/icons/info.svg'
import { Button } from '../components/button';
import { useCallback, useRef, useState } from 'react';
import base64ToBlob from '../utils/base64ToBlob';
import { useLocation, useNavigate } from 'react-router-dom';
import { DocumentCaptureCam } from '../components/documentCaptureCam';
import { BackButton } from '../components/atoms/backButton';

export function CaptureDocuments() {

    const props = useLocation()
    const navigate = useNavigate()

    const [isCaptured, setIsCaptured] = useState(false)

    const currentImageRef = useRef<Webcam>(null)
    const [currentImage, setCurrentImage] = useState<string | undefined>(undefined)
    const [currentDocumentReference, setCurrentDocumentReference] = useState<'front' | 'back'>('front')

    const [frontDocumentImage, setFrontDocumentImage] = useState<Blob | undefined>(undefined)
    const [backDocumentImage, setBackDocumentImage] = useState<Blob | undefined>(undefined)

    const capture = useCallback(() => {
        const imageSrc = currentImageRef?.current?.getScreenshot() || undefined;
        setCurrentImage(imageSrc)
        setIsCaptured(true)
    }, [currentImageRef])

    function setNextDocument() {
        if (!frontDocumentImage) {
            setFrontDocumentImage(base64ToBlob(currentImage!))
            setIsCaptured(false)
            setCurrentDocumentReference('back')
            return
        }
        if (!backDocumentImage) {
            setBackDocumentImage(base64ToBlob(currentImage!))
        }

        if (frontDocumentImage && backDocumentImage) {
            navigate('/identification/loading_documents', {
                state: {
                    frontDocumentImage,
                    backDocumentImage,
                    identificationTypeId: props.state.identificationTypeId
                }
            })
        }
    }

    return (
        <div className='h-full p-10 bg-black flex flex-col justify-center items-center'>
            <div className='flex w-full justify-start'>
                <BackButton to='#' iconColor='white' />
                <div className='bg-white/15 mx-auto flex justify-self-center justify-center items-center px-4 py-1 rounded-xl gap-1'>
                    <div className='rounded-full bg-white size-1.5' />
                    <div className='text-white text-xs font-extralight'>Autocaptura ativada</div>
                </div>
            </div>
            <div className='flex flex-col gap-4 py-14'>
                <div className='bg-white/15 flex justify-center items-center rounded-sm'>
                    <div className='text-white text-center max-w-xs py-3'>Tire uma foto nítida da frente da sua identificação governamental.</div>
                </div>
                <DocumentCaptureCam currentDocumentReference={currentDocumentReference} currentImage={currentImage!} currentImageRef={currentImageRef} isCaptured={isCaptured} />
                <div className='text-white self-center flex gap-1'>
                    <img src={Info} alt="info" />
                    <div>Dicas de Captura</div>
                </div>
                {
                    !isCaptured ? (
                        <Button onClick={capture} variants={({
                            color: 'tertiary'
                        })}>
                            Tirar foto
                        </Button>
                    ) : (
                        <div className='flex flex-col gap-4'>
                            <Button onClick={() => setNextDocument()} variants={({
                                color: 'tertiary'
                            })}>
                                Utilize esta foto.
                            </Button>
                            <Button onClick={() => setIsCaptured(false)} variants={({
                                color: 'quaternary'
                            })}>
                                Tirar foto novamente
                            </Button>
                        </div>
                    )
                }
            </div>
        </div >
    )
}
