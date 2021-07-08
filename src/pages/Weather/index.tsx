import { useState } from 'react'
import { CSSTransition } from 'react-transition-group'

import { IWeatherState } from '../../types/containers'

import Helmet from '../../components/Helmet'
import Title from '../../components/Title'
import WeatherForm from '../../containers/WeatherForm'
import WeatherContainer from '../../containers/WeatherContainer'

const initialState: IWeatherState = {
  status: false,
  title: 'Погода',
}

const WeatherPage: React.FC = () => {
  const [weather, setWeather] = useState<IWeatherState>(initialState)

  const changeStateHandler = (state: IWeatherState) => setWeather(state)

  return (
    <section className="weather">
      <Helmet title="Погода | Weathr" />
      <CSSTransition
        timeout={1000}
        classNames={'weather-title-a'}
        unmountOnExit
        mountOnEnter
        in={!weather.status}
      >
        <Title className="weather-title">Погода</Title>
      </CSSTransition>
      <WeatherForm
        className="weather-form"
        pageState={weather}
        setPageState={changeStateHandler}
      />
      <CSSTransition
        timeout={1000}
        classNames={'weather-a'}
        unmountOnExit
        mountOnEnter
        in={weather.status}
      >
        <WeatherContainer className="weather" title="Ясно" />
      </CSSTransition>
    </section>
  )
}

export default WeatherPage
