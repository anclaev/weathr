import Card from '../../components/Card'

import { ICard } from '../../types/components'
import { ICards } from '../../types/containers'

const renderCards = (items: ICard[], className: string) =>
  items.map((item: ICard) => (
    <Card
      link={item.link}
      title={item.title}
      text={item.text}
      className={`${className}${
        item.primary ? ' ' + className + '--primary' : ''
      }
      `}
    ></Card>
  ))

const Cards: React.FC<ICards> = (props) => (
  <div className={props.className}>
    {renderCards(props.items, props.className + '__item')}
  </div>
)

export default Cards
