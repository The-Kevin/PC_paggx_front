import { useState } from 'react'
import StartPageDocumentsSvg from './assets/start_page_documents.svg'
import { Button } from './components/button'
import LoadingDots from './components/atoms/loadingDots'
import { Link } from 'react-router-dom'
function App() {

  const [isLoading, setIsLoading] = useState(false)

  return (
    <div className='h-screen flex flex-col justify-center items-center'>
      <div className='px-7 flex flex-col items-center'>
        <div className='flex w-full flex-col gap-6 items-start'>
          <div className='font-semibold text-2xl'>
            Iniciar
          </div>
          <div>
            Necessitamos de algumas informações para nos auxiliar a confirmar a sua identidade.
          </div>
        </div>
        <img className="size-60" src={StartPageDocumentsSvg} alt="main_svg" />
        <div className='flex flex-col gap-6'>
          <div className='text-xs font-extralight'>
            Ao clicar no botão abaixo, você concorda que a Persona, nosso fornecedor, colete, faça uso e utilize seus provedores de serviços para processar suas informações biométricas para verificar sua identidade, identificar fraudes e melhorar a plataforma da Persona de acordo com sua <a className='text-blue-700 underline' href="https://withpersona.com/legal/privacy-policy">Política de Privacidade.</a> Suas informações biométricas serão armazenadas por no máximo 3 anos.
          </div>

          <Link to='/identification'>
            {
              !isLoading ? <Button onClick={() => setIsLoading(true)}>
                Iniciar Verificação
              </Button> : <Button variants={({ color: 'disabled' })}>
                <LoadingDots />
              </Button>
            }
          </Link>


        </div>

      </div>

    </div>

  )
}

export default App
