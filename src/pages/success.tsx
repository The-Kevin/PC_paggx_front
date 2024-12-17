import AllrightIcon from '../assets/icons/allright_document.svg'

export function Success() {
    return (
        <div className='h-screen flex flex-col items-center px-7'>
            <div className='flex flex-col items-center justify-center'>
                <div className='font-semibold'>Parabéns, terminou!</div>
                <div className='font-extralight'>Obrigado por verificar a sua identidade</div>
                <div className='w-full h-1/3 p-7'>
                    <img src={AllrightIcon} alt="ok" />
                </div>
            </div>

        </div>
    )
}