export interface ILogo {
  href?: string
  width?: number
  height?: number
  className?: string
  alt?: string
}

export interface IMenu {
  items: IMenuItem[]
  className?: string
}

export interface IMenuItem {
  to: string
  text: string
  icon: string
  className?: string
  activeClassName?: string
}

export interface ITitle {
  className?: string
}

export interface ICard {
  title: string
  text: string
  link: string
  className: string
  primary?: boolean
}
