import { Route, Switch } from 'react-router'

import Header from './containers/Header'
import HomePage from './pages/Home'
import WeatherPage from './pages/Weather'
import TimePage from './pages/Time'

const App = () => (
  <div className="app">
    <Header />
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/time" component={TimePage} />
      <Route path="/weather" component={WeatherPage} />
    </Switch>
  </div>
)

export default App
