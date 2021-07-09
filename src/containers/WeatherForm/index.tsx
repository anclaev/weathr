import { AutoInit } from 'materialize-css'

import Input from '../../components/Input'
import Button from '../../components/Button'

import {
  useInput,
  getWeather,
  showToast,
  setWeatherIcon,
  convertTemp,
} from '../../funcs'

import { IWeatherForm } from '../../types/containers'

const cityMinLength = 3

const WeatherForm: React.FC<IWeatherForm> = (props) => {
  const city = useInput('', cityMinLength)

  AutoInit()

  const keyPressHandler = (e: any) =>
    e.key === 'Enter' ? buttonClickHandler() : null

  const buttonClickHandler = async () => {
    if (props.pageState.status) {
      props.setPageState({
        ...props.pageState,
        status: false,
      })
      city.setValue('')
      city.setValid(false)
      return null
    }

    if (!city.valid && city.value.indexOf(' ') !== -1) {
      showToast('В городе недоступны пробелы')
      return null
    } else if (!city.valid) {
      showToast(`Город не может быть меньше ${cityMinLength} символов`)
      return null
    }

    await getWeather(city.value).then(([data, error]: any) => {
      if (error !== '') {
        showToast(error ?? 'Ошибка')
        return null
      }

      let title = data.weather[0].description
      let icon = setWeatherIcon(title)
      let water = data.main.humidity
      let wind = data.wind.speed.toFixed(1)
      let temp = {
        val: convertTemp(data.main.temp),
        min: convertTemp(data.main.temp_min),
        max: convertTemp(data.main.temp_max),
        feels: convertTemp(data.main.feels_like),
      }

      title = title[0].toUpperCase() + title.substring(1)

      props.setPageState({
        ...props.pageState,
        status: true,
        title,
        icon,
        water,
        wind,
        temp,
      })
    })
  }

  return (
    <div className={props.className}>
      <Input
        value={city.value}
        valid={city.valid}
        disabled={props.pageState.status}
        onKeyPress={keyPressHandler}
        onChange={city.onChange}
        className={`${props.className}-input`}
        placeholder="Ваш город"
      />
      <Button
        className={`${props.className}-button btn-floating btn-large`}
        onClick={buttonClickHandler}
      >
        <span
          className={`material-icons ${props.className}-button__icon${
            props.pageState.status
              ? ` ${props.className}-button__icon--hide`
              : ''
          }`}
        >
          touch_app
        </span>
        <span
          className={`material-icons ${props.className}-button__icon${
            !props.pageState.status
              ? ` ${props.className}-button__icon--hide`
              : ''
          }`}
        >
          replay
        </span>
      </Button>
    </div>
  )
}

export default WeatherForm
