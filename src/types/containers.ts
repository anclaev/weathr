import { ICard } from './components'

export interface ITimeState {
  hour: number
  minute: number
  second: number
}

export interface ICards {
  items: ICard[]
  className: string
}

export interface ITime {
  className: string
}
