import Helmet from '../../components/Helmet'
import Title from '../../components/Title'
import Time from '../../containers/Time'

import { getToday } from '../../funcs'

const TimePage: React.FC = () => (
  <section className="time">
    <Helmet title="Время | Weathr" />
    <Title className="time-title title">{getToday()}</Title>
    <Time />
  </section>
)

export default TimePage
