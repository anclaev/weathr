import { ICell } from '../../types/components'

const Cell: React.FC<ICell> = (props) => (
  <div className={props.className}>
    <span className={props.className + '__text'} data-label={props.label}>
      {props.val}
    </span>
  </div>
)

export default Cell
