import { Link } from 'react-router-dom'

import { ICard } from '../../types/components'

const Card: React.FC<ICard> = (props) => (
  <div className={`card ${props.className ? ' ' + props.className : ''}`}>
    <div className="card-content white-text">
      <span className="card-title">{props.title}</span>
      <p>{props.text}</p>
    </div>
    <div className="card-action">
      <Link to={props.link}>Перейти</Link>
    </div>
  </div>
)

export default Card
