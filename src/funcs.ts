import { useState } from 'react'
import { toast } from 'materialize-css'
import axios from 'axios'

const apiKey = '&APPID=9a2f3c0844d466865551ca8df54f619a'

export enum TimeTypes {
  'h' = 'h',
  'm' = 'm',
  's' = 's',
}

export const WeatherIcons = {
  пасмурно: 'clouds',
  'переменная облачность': 'clouds',
  'небольшой дождь': 'rain',
  'облачно с прояснениями': 'cloudWithSun',
  ясно: 'sun',
  гроза: 'shtorm',
  дождь: 'rain',
}

export const getHello = (): string => {
  let currentHour = new Date().getHours()

  if (currentHour >= 5 && currentHour <= 11) return 'Доброе утро.'
  if (currentHour >= 12 && currentHour <= 16) return 'Добрый день.'
  if (currentHour >= 17 && currentHour <= 22) return 'Добрый вечер.'
  if (currentHour >= 23 || (currentHour >= 0 && currentHour <= 4))
    return 'Доброй ночи.'
  return 'Здравствуйте.'
}

export const getToday = (): string => {
  let date = new Date().toLocaleDateString(undefined, {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  })

  return typeof date === 'string' && date.trim() !== ''
    ? date[0].toUpperCase() + date.slice(1)
    : 'Сегодня'
}

export const getTimeLabel = (val: number, type: TimeTypes): string => {
  const decCases = [2, 0, 1, 1, 1, 2]

  let decCache: number[] = []
  let titles: string[] = []

  switch (type) {
    case 'h':
      titles = ['час', 'часа', 'часов']
      break
    case 'm':
      titles = ['минута', 'минуты', 'минут']
      break
    case 's':
      titles = ['секунда', 'секунды', 'секунд']
      break
  }

  if (!decCache[val])
    decCache[val] =
      val % 100 > 4 && val % 100 < 20 ? 2 : decCases[Math.min(val % 10, 5)]
  return titles[decCache[val]]
}

export const useInput = (initialValue: string, minLength?: number) => {
  const [value, setValue] = useState(initialValue)
  const [valid, setValid] = useState(false)

  let min = minLength ?? 0

  const onChange = (e: any) => {
    if (e.target.value.indexOf(' ') === -1 && e.target.value.length >= min) {
      setValid(true)
    } else setValid(false)

    setValue(e.target.value)
  }

  return {
    value,
    valid,
    setValue,
    setValid,
    onChange,
  }
}

export const getWeather = async (city: string) => {
  let req = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru${apiKey}`
  let data = null
  let error = ''

  await axios
    .get(req)
    .then((res) => (data = res.data))
    .catch((err) => {
      error =
        err.response.status === 404
          ? 'Город не найден'
          : 'Сервер временно недоступен'
    })

  return [data, error]
}

export const setWeatherIcon = (type: string) =>
  WeatherIcons[type as keyof typeof WeatherIcons] ?? WeatherIcons.ясно

export const convertTemp = (temp: number) => Math.round(temp - 273)

export const showToast = (text: string) => toast({ html: text })
