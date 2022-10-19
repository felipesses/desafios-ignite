import { HeaderContainer } from './styles'
import { MapPin, ShoppingCart } from 'phosphor-react'
import logo from '../../assets/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="" />
      <nav>
        <div>
          <MapPin size={22} weight="fill" />
          <p>Santo Amaro, BA</p>
        </div>
        <button>
          <ShoppingCart size={22} weight="fill" />
        </button>
      </nav>
    </HeaderContainer>
  )
}
