import { all, fork } from 'redux-saga/effects'
import pizzasWatchers from './pizzas/watchers'
import toppinsWatchers from './toppings/watchers'

export default function* startSagas() {
  yield all([
    fork(pizzasWatchers),
    fork(toppinsWatchers),
  ])
}

