import MenuItem from './MenuItem'

import { IMenu, IMenuItem } from '../../types/components'

const renderMenuItems = (items: IMenuItem[], className?: string) =>
  items.map((item: IMenuItem) => (
    <MenuItem
      text={item.text}
      icon={item.icon}
      to={item.to}
      className={className ? className + '-item' : undefined}
      activeClassName={className ? className + '-item--active' : undefined}
    />
  ))

const Menu: React.FC<IMenu> = ({ className, items }) => {
  return (
    <ul className={className ?? 'menu'}>{renderMenuItems(items, className)}</ul>
  )
}

export default Menu
