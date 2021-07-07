import { IMenuItem } from '../../../types/components'

const MenuItem: React.FC<IMenuItem> = (props) => (
  <li className={`menu-item${props.className ? ` ${props.className}` : ''}`}>
    <i className={`material-icons menu-item__icon`}>{props.icon}</i>
    <span className="menu-item__text">{props.text}</span>
  </li>
)

export default MenuItem
