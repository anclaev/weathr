import { ICard } from './components'

export interface ITimeState {
  hour: string
  minute: string
  second: string
}

export interface ICards {
  items: ICard[]
  className: string
}

export interface ITime {
  className: string
}
