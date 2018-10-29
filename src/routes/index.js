import React, { Fragment, lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import PageLoading from '../components/PageLoading'

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
    <Fragment>
      <Route path='/' render={renderChunk(Home)} exact />
      <Route path='/about' render={renderChunk(About)} />
      <Route path='/contact' render={renderChunk(Contact)} />
    </Fragment>
  </Router>
)

export default Routes