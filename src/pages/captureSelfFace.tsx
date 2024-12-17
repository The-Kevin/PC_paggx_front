import Webcam from 'react-webcam'
import { Button } from '../components/button'
import { useEffect, useRef, useState } from 'react'
import LoadingDots from '../components/atoms/loadingDots'
import { useLocation, useNavigate } from 'react-router-dom'
import base64ToBlob from '../utils/base64ToBlob'
export function CaptureSelfFace() {

    const { state } = useLocation()
    const navigate = useNavigate()

    const [isCaptured, setIsCaptured] = useState<boolean>(false)

    const currentImageRef = useRef<Webcam>(null)

    const [firstImage, setFirstImage] = useState<Blob | undefined | null>(undefined);
    const [secondImage, setSecondImage] = useState<Blob | undefined | null>(undefined);
    const [thirdImage, setThirdImage] = useState<Blob | undefined | null>(undefined);

    useEffect(() => { // fake delay to simulate IA
        setTimeout(() => setIsCaptured(false), 2000)
    }, [isCaptured])



    function nextPhoto() {
        setIsCaptured(true)
        if (!firstImage) {
            setFirstImage(base64ToBlob(currentImageRef?.current?.getScreenshot()!))
            return
        }
        if (!secondImage) {
            setSecondImage(base64ToBlob(currentImageRef?.current?.getScreenshot()!))
            return
        }
        if (!thirdImage) {
            setThirdImage(base64ToBlob(currentImageRef?.current?.getScreenshot()!))
        }

        if (firstImage && secondImage && thirdImage) {
            navigate('/identification/loading_self', {
                state: {
                    ...state,
                    firstImage,
                    secondImage,
                    thirdImage
                }
            })

        }
    }

    return (
        <div className='h-screen flex flex-col items-center'>
            <div className='h-4/6 flex flex-col px-7 items-center justify-center gap-5'>
                <div>
                    Aproxime-se da câmera
                </div>
                <div className='w-2/3 aspect-square rounded-full overflow-hidden'>
                    <Webcam className='w-full h-full object-cover' ref={currentImageRef} />
                </div>
                {
                    !isCaptured ? (
                        <Button onClick={() => nextPhoto()}>
                            Tirar fotos
                        </Button>
                    ) : (
                        <Button disabled variants={
                            ({
                                color: 'disabled'
                            })
                        }>
                            <LoadingDots />
                        </Button>)
                }
            </div>
        </div >
    )

}