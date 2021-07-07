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
  text: string
  icon: string
  className?: string
}
