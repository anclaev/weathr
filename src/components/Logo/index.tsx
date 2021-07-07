import { Link } from 'react-router-dom'

import { ILogo } from '../../types/components'

import logo from '../../assets/logo.svg'

const Logo: React.FC<ILogo> = (props) => {
  const node = (
    <img
      src={logo}
      className={
        props.href
          ? 'logo__img'
          : 'logo' + props.className
          ? ` ${props.className}`
          : ''
      }
      alt={props.alt ?? 'Img: Weathr Logo'}
      width={props.width}
      height={props.height}
    />
  )

  return props.href ? (
    <Link
      to={props.href}
      className={`logo${props.className ? ` ${props.className}` : ''}`}
    >
      {node}
    </Link>
  ) : (
    node
  )
}

export default Logo
