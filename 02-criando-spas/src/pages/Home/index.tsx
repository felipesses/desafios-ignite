import { HomeContainer, PresentationContainer, CircleIcon } from './styles'
import presentationLogo from '../../assets/presentation-logo.svg'
import { Clock, Coffee, Package, ShoppingCart } from 'phosphor-react'

export function Home() {
  return (
    <HomeContainer>
      <PresentationContainer>
        <aside>
          <div>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </div>
          <ul>
            <li>
              <CircleIcon variant="yellow-dark">
                <ShoppingCart weight="fill" size={20} color="white" />
              </CircleIcon>
              Compra simples e segura
            </li>
            <li>
              <CircleIcon variant="base-text">
                <Package weight="fill" size={20} color="white" />
              </CircleIcon>
              Embalagem mantém o café intacto
            </li>

            <li>
              <CircleIcon variant="yellow">
                <Clock weight="fill" size={20} color="white" />
              </CircleIcon>
              Entrega rápida e rastreada
            </li>
            <li>
              <CircleIcon variant="purple-dark">
                <Coffee weight="fill" size={20} color="white" />
              </CircleIcon>
              O café chega fresquinho até você
            </li>
          </ul>
        </aside>

        <img src={presentationLogo} alt="" />
      </PresentationContainer>
    </HomeContainer>
  )
}
