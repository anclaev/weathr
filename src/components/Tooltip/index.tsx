import { CSSTransition } from 'react-transition-group'

import { useTooltip } from './context'

const Tooltip: React.FC = () => {
  const { state } = useTooltip()

  return (
    <CSSTransition
      timeout={500}
      classNames="tooltip"
      unmountOnExit
      mountOnEnter
      in={state.status}
    >
      <div className="tooltip" style={{ left: state.x, top: state.y + 35 }}>
        {state.title}
      </div>
    </CSSTransition>
  )
}

export default Tooltip
