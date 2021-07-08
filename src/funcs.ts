import { useState } from 'react'

// Weather API KEY: 9a2f3c0844d466865551ca8df54f619a

export enum TimeTypes {
  'h' = 'h',
  'm' = 'm',
  's' = 's',
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

  const onChange = (e: any) => {
    if (minLength) setValid(e.target.value.length >= minLength)
    setValue(e.target.value)
  }

  return {
    value,
    valid,
    setValue,
    onChange,
  }
}
