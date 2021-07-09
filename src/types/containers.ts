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
  icon: string
  title: string
  water: number
  wind: number
  temp: {
    val: number
    min: number
    max: number
    feels: number
  }
}

export interface IWeatherForm extends IContainer {
  pageState: IWeatherState
  setPageState: (state: IWeatherState) => void
}

export interface IWeatherState extends IWeather {
  status: boolean
}
