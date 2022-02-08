import { Header, FeatureBox, AboutUs } from './components'

import GlobalStyles from './styles/Global'

export function App(): JSX.Element {
  return (
    <>
      <Header />
      <FeatureBox />
      <AboutUs />
      <GlobalStyles />
    </>
  )
}
