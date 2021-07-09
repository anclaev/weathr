import { IIcon } from '../../types/components'

export const Icons = {
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
    src={Icons[props.src as keyof typeof Icons] ?? Icons.sun}
    alt={`Icon: ${props.src}`}
  />
)

export default Icon
