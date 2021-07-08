import { IIcon } from '../../types/components'

const icons = {
  clouds: 'img/clouds.svg',
  cloudWithSun: 'img/cloudsun.svg',
  rain: 'img/rain.svg',
  sun: 'img/sun.svg',
  temp: 'img/temp.svg',
  shtorm: 'img/thunderstorm.svg',
  water: 'img/water.svg',
  wind: 'img/wind.svg',
}

const Icon: React.FC<IIcon> = (props) => (
  <img
    className={props.className}
    src={icons[props.src as keyof typeof icons] ?? icons.sun}
    alt={`Icon: ${props.src}`}
  />
)

export default Icon
