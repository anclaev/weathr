import { useState, useEffect } from 'react'

import { ITimeState } from '../../types/containers'

const Time: React.FC = () => {
  const [time, setTime] = useState<ITimeState>({
    hour: 0,
    minute: 0,
    second: 0,
  })

  const timeChangeHandler = (localeTime: string) => {
    let newTime = time

    newTime.hour =
      newTime.hour !== Number(localeTime.split(':')[0])
        ? Number(localeTime.split(':')[0])
        : newTime.hour

    newTime.minute =
      newTime.minute !== Number(localeTime.split(':')[1])
        ? Number(localeTime.split(':')[1])
        : newTime.minute

    newTime.second =
      newTime.second !== Number(localeTime.split(':')[2])
        ? Number(localeTime.split(':')[2])
        : newTime.second

    setTime({ ...time, ...newTime })
  }

  const tickInterval = setInterval(() => {
    timeChangeHandler(new Date().toLocaleTimeString())
  }, 1000)

  useEffect(() => {
    return () => {
      clearInterval(tickInterval)
    }
  })

  return <div>{JSON.stringify(time)}</div>
}

export default Time
