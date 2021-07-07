import Helmet from '../../components/Helmet'
import Time from '../../containers/Time'

const TimePage: React.FC = () => (
  <section>
    <Helmet title="Время | Weathr" />
    <Time />
  </section>
)

export default TimePage
