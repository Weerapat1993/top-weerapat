import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import posed, { PoseGroup } from 'react-pose';
import PageLoading from '../components/PageLoading'
import Layout from '../components/Layout';

const Home = lazy(() => import('../pages/Home'))
const About = lazy(() => import('../pages/About'))
const Contact = lazy(() => import('../pages/Contact'))

const RouteContainer = posed.div({
  enter: { opacity: 1, delay: 300, beforeChildren: true },
  exit: { opacity: 0 }
});

const renderChunk = (WrapperComponent) => {
  const RenderChunk = (props) => (
    <Suspense fallback={<PageLoading />}>
      <WrapperComponent {...props} />
    </Suspense>
  )
  return RenderChunk
}

const Routes = () => (
  <Router>
    <Route
      key='root'
      render={({ location }) => (
        <Layout>
          <PoseGroup>
            <RouteContainer key={location.key}>
              <Switch location={location}>
                <Route key='home' path='/' render={renderChunk(Home)} exact />
                <Route key='about' path='/about' render={renderChunk(About)} />
                <Route key='contact' path='/contact' render={renderChunk(Contact)} />
              </Switch>
            </RouteContainer>
          </PoseGroup>
        </Layout>
      )}
    />
  </Router>
)

export default Routes