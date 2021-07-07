import { NavLink } from 'react-router-dom'

import { IMenuItem } from '../../../types/components'

const MenuItem: React.FC<IMenuItem> = (props) => (
  <NavLink
    to={props.to}
    className="menu-link"
    activeClassName={
      props.activeClassName ? props.activeClassName : 'menu-link--current'
    }
  >
    <li className={`menu-item${props.className ? ` ${props.className}` : ''}`}>
      <i className={`material-icons menu-item__icon`}>{props.icon}</i>
      <span className="menu-item__text">{props.text}</span>
    </li>
  </NavLink>
)

export default MenuItem
