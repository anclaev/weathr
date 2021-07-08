import { AutoInit } from 'materialize-css'

import Input from '../../components/Input'
import Button from '../../components/Button'

import { useInput } from '../../funcs'

import { IContainer } from '../../types/containers'

const WeatherForm: React.FC<IContainer> = (props) => {
  const city = useInput('', 5)

  AutoInit()

  return (
    <div className={props.className}>
      <Input
        {...city}
        className={`${props.className}-input`}
        placeholder="Ваш город"
      />
      <Button
        className={`${props.className}-button btn-floating btn-large waves-effect waves-light`}
        onClick={() => console.log('click!')}
      >
        <span className={`material-icons ${props.className}-button__icon`}>
          touch_app
        </span>
      </Button>
    </div>
  )
}

export default WeatherForm
