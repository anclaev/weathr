import Helmet from '../../components/Helmet'
import Title from '../../components/Title'
import WeatherForm from '../../containers/WeatherForm'

const WeatherPage: React.FC = () => (
  <section className="weather">
    <Helmet title="Погода | Weathr" />
    <Title className="weather-title">Погода</Title>
    <WeatherForm className="weather-form" />
  </section>
)

export default WeatherPage
