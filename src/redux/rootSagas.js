import { all, fork } from 'redux-saga/effects'
import pizzasWatchers from './pizzas/watchers'

export default function* startSagas() {
  yield all([
    fork(pizzasWatchers),
  ])
}

