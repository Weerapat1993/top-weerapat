import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import PageLoading from '../components/PageLoading'
import Layout from '../components/Layout';

const Home = lazy(() => import('../pages/Home'))
const About = lazy(() => import('../pages/About'))
const Contact = lazy(() => import('../pages/Contact'))

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
    <Layout>
      <Switch>
        <Route key='home' path='/' render={renderChunk(Home)} exact />
        <Route key='about' path='/about' render={renderChunk(About)} />
        <Route key='contact' path='/contact' render={renderChunk(Contact)} />
      </Switch>
    </Layout>
  </Router>
)

export default Routes