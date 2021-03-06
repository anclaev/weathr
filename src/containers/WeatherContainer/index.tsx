import { useRef } from 'react'

import { IWeather } from '../../types/containers'

import { useTooltip } from '../../components/Tooltip/context'

import Icon from '../../components/Icon'

const WeatherContainer: React.FC<IWeather> = (props) => {
  const { state, setState } = useTooltip()

  const targetDott = useRef<HTMLInputElement>(null)

  const dottHoverHandler = (
    status: boolean,
    e?: React.MouseEvent<HTMLDivElement>
  ) => {
    let newState = state

    newState = {
      status: status,
      title: `Ощущается как ${props.temp.feels}°c`,
      x: status ? e?.pageX || 0 : state.x,
      y: status ? e?.pageY || 0 : state.y,
    }

    setState(newState)
  }

  return (
    <div className={`${props.className}-container`}>
      <div className={`${props.className}-poster`}>
        <Icon
          src={props.icon}
          className={`${props.className}-poster__img${
            props.icon === 'sun' ? ' rotate' : ''
          }`}
        />
        <span>{props.title}</span>
      </div>
      <div className={`${props.className}-info`}>
        <div className={`${props.className}-info-temp`}>
          <div className={`${props.className}-info-temp-val`}>
            <span>{props.temp.min}</span>
            <div className={`${props.className}-info-temp-val__dott`}></div>
            <span
              className={`${props.className}-info-temp-val__icon`}
              data-label="мин"
            >
              <Icon src="temp" />
            </span>
          </div>
          <div className={`${props.className}-info-temp-val`}>
            <span>{props.temp.val}</span>
            <div
              className={`${props.className}-info-temp-val__dott`}
              onMouseOver={(e: React.MouseEvent<HTMLDivElement>) =>
                dottHoverHandler(true, e)
              }
              onMouseOut={(e: React.MouseEvent<HTMLDivElement>) =>
                dottHoverHandler(false)
              }
              ref={targetDott}
            ></div>
            <span className={`${props.className}-info-temp-val__icon`}>
              <Icon src="temp" />
            </span>
          </div>
          <div className={`${props.className}-info-temp-val`}>
            <span>{props.temp.max}</span>
            <div className={`${props.className}-info-temp-val__dott`}></div>
            <span
              className={`${props.className}-info-temp-val__icon`}
              data-label="макс"
            >
              <Icon src="temp" />
            </span>
          </div>
          <div className={`${props.className}-info-temp__line`}></div>
        </div>
        <div className={`${props.className}-info-wind`}>
          <div className={`${props.className}-info-wind-item`}>
            <Icon
              src="water"
              className={`${props.className}-info-wind-item__img`}
            />
            <span
              className={`${props.className}-info-wind-item__val`}
              data-label="%"
            >
              {props.water}
            </span>
          </div>
          <div className={`${props.className}-info-wind-item`}>
            <Icon
              src="wind"
              className={`${props.className}-info-wind-item__img`}
            />
            <span
              className={`${props.className}-info-wind-item__val`}
              data-label="м/с"
            >
              {props.wind}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WeatherContainer
