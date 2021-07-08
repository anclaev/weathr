import { useRef } from 'react'
import { AutoInit } from 'materialize-css'

import Input from '../../components/Input'
import Button from '../../components/Button'

import { useInput } from '../../funcs'

import { IWeatherForm } from '../../types/containers'

const cityMinLength = 5

const WeatherForm: React.FC<IWeatherForm> = (props) => {
  const city = useInput('', cityMinLength)
  const ref = useRef<HTMLInputElement>(null)

  AutoInit()

  const buttonClickHandler = () =>
    props.setPageState({ ...props.pageState, status: !props.pageState.status })

  return (
    <div className={props.className}>
      <Input
        value={city.value}
        valid={city.valid}
        ref={ref}
        onChange={city.onChange}
        className={`${props.className}-input`}
        placeholder="Ваш город"
      />
      <Button
        className={`${props.className}-button btn-floating btn-large waves-effect waves-light`}
        onClick={buttonClickHandler}
      >
        <span className={`material-icons ${props.className}-button__icon`}>
          touch_app
        </span>
      </Button>
    </div>
  )
}

export default WeatherForm
