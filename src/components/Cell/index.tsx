import { ICell } from '../../types/components'

const Cell: React.FC<ICell> = (props) => (
  <div>
    <span>{props.val}</span>
  </div>
)

export default Cell
