import { useState, useEffect } from 'react'

import Cell from '../../components/Cell'

import { getTimeLabel, TimeTypes } from '../../funcs'

import { ITime, ITimeState } from '../../types/containers'
import { ICellRender } from '../../types/components'

const renderCells = (items: ICellRender[], className: string) =>
  items.map((item, key) => (
    <Cell
      className={className + '-item'}
      val={item.val.toString().length !== 1 ? item.val : '0' + item.val}
      label={getTimeLabel(Number(item.val), item.type)}
      key={key}
    />
  ))

const Timer: React.FC<ITime> = (props) => {
  const [time, setTime] = useState<ITimeState>({
    hour: '00',
    minute: '00',
    second: '00',
  })

  const timeChangeHandler = (localeTime: string) => {
    let newTime = time

    newTime.hour =
      newTime.hour !== localeTime.split(':')[0]
        ? localeTime.split(':')[0]
        : newTime.hour

    newTime.minute =
      newTime.minute !== localeTime.split(':')[1]
        ? localeTime.split(':')[1]
        : newTime.minute

    newTime.second =
      newTime.second !== localeTime.split(':')[2]
        ? localeTime.split(':')[2]
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
      {renderCells(
        [
          {
            val: time.hour,
            type: TimeTypes.h,
          },
          {
            val: time.minute,
            type: TimeTypes.m,
          },
          {
            val: time.second,
            type: TimeTypes.s,
          },
        ],
        props.className
      )}
    </div>
  )
}

export default Timer
