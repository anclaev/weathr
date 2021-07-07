import Title from '../../components/Title'
import Cards from '../../containers/Cards'

import { getHello } from '../../funcs'

import { ICard } from '../../types/components'

const cards: ICard[] = [
  {
    title: 'Время',
    text: 'Получите текущее время в вашем часовом поясе.',
    link: '/time',
    className: 'home-cards',
    primary: true,
  },
  {
    title: 'Погода',
    text: 'Получите погоду на сегодня в указанном городе.',
    link: '/weather',
    className: 'home-cards',
  },
]

const HomePage: React.FC = () => (
  <section className="home">
    <Title className="home-title">{getHello()}</Title>
    <Cards className="home-cards" items={cards} />
  </section>
)

export default HomePage
