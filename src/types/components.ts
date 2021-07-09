import { TimeTypes } from '../funcs'

export interface IComponent {
  className?: string
}

export interface ILogo extends IComponent {
  href?: string
  width?: number
  height?: number
  alt?: string
}

export interface IMenu extends IComponent {
  items: IMenuItem[]
}

export interface IMenuItem extends IComponent {
  to: string
  text: string
  icon: string
  activeClassName?: string
}

export interface ICard extends IComponent {
  title: string
  text: string
  link: string
  primary?: boolean
}

export interface ICell extends IComponent {
  val: string
  label?: string
}

export interface ICellRender extends ICell {
  type: TimeTypes
}

export interface IInput extends IComponent {
  value: string
  valid: boolean
  disabled?: boolean
  placeholder: string
  onChange: React.ChangeEventHandler
  onKeyPress: any
}

export interface IButton extends IComponent {
  text?: string
  onClick: () => void
}

export interface IIcon extends IComponent {
  src: string
}

export interface ITooltipState {
  title: string
  status: boolean
  x: number
  y: number
}

export interface ITooltipContext {
  state: ITooltipState
  setState: (state: ITooltipState) => void
}
