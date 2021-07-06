import logo from '../../assets/logo.svg'
import { ILogo } from '../../types/components'

const Logo: React.FC<ILogo> = (props) => {
  const node = (
    <img
      src={logo}
      className={
        props.className
          ? props.className + '__img'
          : props.href
          ? 'logo__img'
          : 'logo'
      }
      alt={props.alt ?? 'Img: Weathr Logo'}
      width={props.width}
      height={props.height}
    />
  )

  return props.href ? (
    <a href={props.href} className={props.className ?? 'logo'}>
      {node}
    </a>
  ) : (
    node
  )
}

export default Logo
