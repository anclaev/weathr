import { IInput } from '../../types/components'

const Input: React.FC<IInput> = (props) => (
  <div className={`input-field col s6 ${props.className}`}>
    <input
      id={props.className}
      type="text"
      value={props.value}
      data-valid={props.valid}
      onChange={props.onChange}
      onKeyPress={props.onKeyPress}
      disabled={props.disabled}
    />
    <label htmlFor={props.className}>{props.placeholder}</label>
  </div>
)

export default Input
