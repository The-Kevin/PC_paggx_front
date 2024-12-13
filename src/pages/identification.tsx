import { Link } from 'react-router-dom'
import GoToBack from '../assets/icons/back.svg'
import { ChooseButton } from '../components/chooseButton'
import axios from 'axios'
import { useState, useEffect } from 'react'

interface IIdentificationType {
    id: string,
    name: string,
    imageIconLink: string,
    pageTitle: string,
    pageImageCardLink: string
}

export function Identification() {

    const [identificationTypes, setIdentificationTypes] = useState<IIdentificationType[] | null>(null)

    useEffect(() => {
        axios.get('http://localhost:3000/indentification/type').then(({ data }) => {
            setIdentificationTypes(data)
        })
    }, [])

    return (
        <div>
            <div className='flex flex-col justify-center  gap-5 p-7'>
                <Link to='/' className=''>
                    <img src={GoToBack} alt="back_icon" />
                </Link>
                <div className="text-2xl font-semibold" >
                    Carregar uma identificação com foto
                </div>
                <div>
                    Necessitamos de uma foto de um documento de identificação governamental para verificar a sua identidade.
                </div>
                <div>
                    Escolha 1 das seguintes opções carregar outra identificação.
                </div>

            </div >
            <div className='flex flex-col items-center'>
                {
                    identificationTypes && identificationTypes.map((type, index) => {
                        return (
                            <Link key={type.id} to="" className={`flex w-full py-4 justify-center border-b-[1px] ${index === 0 ? 'border-t-[1px]' : ''} border-black  hover:bg-slate-100" to="/identification/cnh`}>
                                <ChooseButton name={type.name} imageAlt={type.name} imageUrl={type.imageIconLink} />
                            </Link>
                        )
                    })
                }
            </div>

        </div>

    )

}