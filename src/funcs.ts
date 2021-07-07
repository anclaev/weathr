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
