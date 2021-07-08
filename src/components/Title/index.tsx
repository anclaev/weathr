import { IComponent } from '../../types/components'

const Title: React.FC<IComponent> = (props) => (
  <h1 className={props.className + ' title'}>{props.children}</h1>
)

export default Title
