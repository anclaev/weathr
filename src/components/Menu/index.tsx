import MenuItem from './Item'

import { IMenu, IMenuItem } from '../../types/components'

const renderMenuItems = (items: IMenuItem[], className?: string) =>
  items.map((item: IMenuItem) => (
    <MenuItem
      text={item.text}
      icon={item.icon}
      className={className ? className + '-item' : undefined}
    />
  ))

const Menu: React.FC<IMenu> = ({ className, items }) => {
  return (
    <ul className={className ?? 'menu'}>{renderMenuItems(items, className)}</ul>
  )
}

export default Menu
