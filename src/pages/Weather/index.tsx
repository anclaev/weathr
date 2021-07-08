import Helmet from '../../components/Helmet'
import Title from '../../components/Title'
import WeatherForm from '../../containers/WeatherForm'
import WeatherContainer from '../../containers/WeatherContainer'

const WeatherPage: React.FC = () => (
  <section className="weather">
    <Helmet title="Погода | Weathr" />
    <Title className="weather-title">Погода</Title>
    <WeatherForm className="weather-form" />
    <WeatherContainer className="weather" title="Ясно" />
  </section>
)

export default WeatherPage
