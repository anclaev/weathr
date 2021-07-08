import { IWeather } from '../../types/containers'

import Icon from '../../components/Icon'

const WeatherContainer: React.FC<IWeather> = (props) => (
  <div className={`${props.className}-container`}>
    <div className={`${props.className}-poster`}>
      <Icon src="sun" className={`${props.className}-poster__img rotate`} />
      <span>{props.title}</span>
    </div>
    <div className={`${props.className}-info`}>
      <div className={`${props.className}-info-temp`}>
        <div className={`${props.className}-info-temp-val`}>
          <span>27</span>
          <div className={`${props.className}-info-temp-val__dott`}></div>
          <span
            className={`${props.className}-info-temp-val__icon`}
            data-label="мин"
          >
            <Icon src="temp" />
          </span>
        </div>
        <div className={`${props.className}-info-temp-val`}>
          <span>31</span>
          <div className={`${props.className}-info-temp-val__dott`}></div>
          <span className={`${props.className}-info-temp-val__icon`}>
            <Icon src="temp" />
          </span>
        </div>
        <div className={`${props.className}-info-temp-val`}>
          <span>33</span>
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
            21
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
            2.3
          </span>
        </div>
      </div>
    </div>
  </div>
)

export default WeatherContainer
