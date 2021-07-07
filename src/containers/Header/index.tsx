import Logo from '../../components/Logo'
import Menu from '../../components/Menu'

import { IMenuItem } from '../../types/components'

const menuItems: IMenuItem[] = [
  {
    text: 'Время',
    icon: 'access_time',
    to: '/time',
  },
  {
    text: 'Погода',
    icon: 'cloud_queue',
    to: '/weather',
  },
]

const Header: React.FC = () => (
  <header className="app-header">
    <Logo href="/" />
    <Menu items={menuItems} />
  </header>
)

export default Header
