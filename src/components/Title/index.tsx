import { ITitle } from '../../types/components'

const Title: React.FC<ITitle> = (props) => (
  <h1 className={props.className}>{props.children}</h1>
)

export default Title
