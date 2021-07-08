import { ICard } from './components'

export interface ITimeState {
  hour: string
  minute: string
  second: string
}

export interface IContainer {
  className: string
}

export interface ICards extends IContainer {
  items: ICard[]
  className: string
}

export interface IWeather extends IContainer {
  title: string
}

export interface IWeatherForm extends IContainer {
  pageState: IWeatherState
  setPageState: (state: IWeatherState) => void
}

export interface IWeatherState {
  status: boolean
  title: string
}
