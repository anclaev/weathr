import { IButton } from '../../types/components'

const Button: React.FC<IButton> = (props) => (
  <button onClick={props.onClick} className={props.className}>
    {props.text ?? props.children}
  </button>
)

export default Button
