import Webcam from 'react-webcam';
import FrontGenericCard from '../assets/icons/front_generic_card.svg'
import BackGenericCard from '../assets/icons/back_generic_card.svg'

interface DocumentCaptureCamProps {
    currentImageRef: React.RefObject<Webcam>
    currentImage: string
    isCaptured: boolean
    currentDocumentReference: 'front' | 'back'

}
export function DocumentCaptureCam({ isCaptured, currentImage, currentImageRef, currentDocumentReference }: DocumentCaptureCamProps) {
    return (
        <div className='container'>
            {!isCaptured ? (<Webcam className='w-full rounded' ref={currentImageRef} audio={false} screenshotQuality={1} screenshotFormat="image/jpeg">
            </Webcam>) : <img src={currentImage} alt="screenShot" />}
            <div className='w-full rounded bg-neutral-200 h-14 flex justify-start items-center gap-3 px-4'>
                <img className='h-2/5' src={currentDocumentReference === 'front' ? FrontGenericCard : BackGenericCard} alt="card id" />

                <div className='font-extralight text-nowrap'>{
                    currentDocumentReference === 'front' ? 'Frente da ID' : 'Verso da ID'}
                </div>
            </div>
        </div>
    )
}