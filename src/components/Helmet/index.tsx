import { Helmet as ReactHelmet } from 'react-helmet'

const Helmet: React.FC<{ title: string }> = (props) => (
  <ReactHelmet title={props.title} />
)

export default Helmet
