import Next from '../assets/icons/next.svg'

interface ChooseButtonProps {
    imageUrl: string,
    imageAlt: string
    name: string,

}

export function ChooseButton({ imageAlt, imageUrl, name }: ChooseButtonProps) {
    return (
        <div className='w-full px-6 flex justify-between'>
            <div className='flex items-center gap-2'>
                <img src={imageUrl} alt={imageAlt} />
                <span>{name}</span>
            </div>
            <img src={Next} alt="next" />
        </div>
    )

}