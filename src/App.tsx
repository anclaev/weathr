import { Route } from 'react-router'
import { CSSTransition } from 'react-transition-group'

import TooltipProvider from './components/Tooltip/context'

import Header from './containers/Header'
import HomePage from './pages/Home'
import WeatherPage from './pages/Weather'
import TimePage from './pages/Time'

const routes = [
  { path: '/', Component: HomePage, exact: true },
  {
    path: '/time',
    Component: TimePage,
  },
  {
    path: '/weather',
    Component: WeatherPage,
  },
]

const App = () => (
  <TooltipProvider>
    <div className="app">
      <Header />
      {routes.map(({ path, Component, exact }) => (
        <Route key={path} exact={exact} path={path}>
          {({ match }) => (
            <CSSTransition
              timeout={1000}
              classNames="app-wrapper"
              unmountOnExit
              mountOnEnter
              in={match != null}
            >
              <Component />
            </CSSTransition>
          )}
        </Route>
      ))}
    </div>
  </TooltipProvider>
)

export default App
