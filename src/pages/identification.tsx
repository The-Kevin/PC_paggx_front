import { Link } from 'react-router-dom'
import GoToBack from '../assets/icons/back.svg'
import CNH from '../assets/icons/cnh.svg'
import Passport from '../assets/icons/passport.svg'
import CID from '../assets/icons/c_id.svg'
import Residence_permit from '../assets/icons/residence_permit.svg'
import Next from '../assets/icons/next.svg'
import { DiviseLine } from '../components/atoms/diviseLine'


export function Identification() {
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
            <div className='flex flex-col items-center gap-3'>
                <DiviseLine />
                <div className='flex w-full justify-between px-10'>
                    <div className='flex items-center gap-4'>
                        <img src={CNH} alt="cnh" />
                        <span>CNH</span>
                    </div>
                    <img src={Next} alt="next" />
                </div>
                <DiviseLine />
                <div className='flex w-full justify-between px-10'>
                    <div className='flex items-center gap-4'>
                        <img src={CID} alt="card id" />
                        <span>Carteira de Identidade</span>
                    </div>
                    <img src={Next} alt="next" />
                </div>
                <DiviseLine />
                <div className='flex w-full justify-between px-10'>
                    <div className='flex items-center gap-4'>
                        <img src={Passport} alt="passport" />
                        <span>Passaporte</span>
                    </div>
                    <img src={Next} alt="next" />
                </div>
                <DiviseLine />
                <div className='flex w-full justify-between px-10'>
                    <div className='flex items-center gap-4'>
                        <img src={Residence_permit} alt="residence permit" />
                        <span>Autorização de Residência</span>
                    </div>
                    <img src={Next} alt="next" />
                </div>
                <DiviseLine />
            </div>

        </div>

    )

}