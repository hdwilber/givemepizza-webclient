import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware, { END, } from 'redux-saga'
import reducers from './reducers'
import rootSaga from './rootSagas'

const { NODE_ENV } = process.env
const enhancers = []
if (NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}
const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducers,
  {},
  compose(
    applyMiddleware(sagaMiddleware),
    ...enhancers,
  )
)
store.runSaga = sagaMiddleware.run(rootSaga)
store.close = () => store.dispatch(END)

export default store
