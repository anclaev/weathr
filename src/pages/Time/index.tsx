import Helmet from '../../components/Helmet'
import Title from '../../components/Title'
import Timer from '../../containers/Timer'

import { getToday } from '../../funcs'

const TimePage: React.FC = () => (
  <section className="time">
    <Helmet title="Время | Weathr" />
    <Title className="time-title">{getToday()}</Title>
    <Timer className="time-wrapper" />
  </section>
)

export default TimePage
