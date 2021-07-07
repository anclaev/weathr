import { useState, useEffect } from 'react'
import { CSSTransition } from 'react-transition-group'

import Cell from '../../components/Cell'

import { getTimeLabel } from '../../funcs'

import { ITime, ITimeState } from '../../types/containers'

const Timer: React.FC<ITime> = (props) => {
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

  return (
    <div className={props.className}>
      <Cell
        className={props.className + '-item'}
        val={time.hour}
        label={getTimeLabel(time.hour, 'h')}
      />
      <Cell
        className={props.className + '-item'}
        val={time.minute}
        label={getTimeLabel(time.minute, 'm')}
      />
      <Cell
        className={props.className + '-item'}
        val={time.second}
        label={getTimeLabel(time.second, 's')}
      />
    </div>
  )
}

export default Timer
