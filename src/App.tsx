import { Route, Switch } from 'react-router'

import Header from './containers/Header'

const App = () => (
  <div className="app">
    <Header />
    <Switch>
      <Route path="/" exact component={() => <div>Home Page</div>} />
      <Route path="/time" exact component={() => <div>Time Page</div>} />
      <Route path="/weather" exact component={() => <div>Weather Page</div>} />
    </Switch>
  </div>
)

export default App
