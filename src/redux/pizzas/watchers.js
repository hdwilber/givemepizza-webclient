import { takeLatest, } from 'redux-saga/effects'
import * as sagas from './sagas'
import { types, } from './actions'

export default function* watchAccount() {
  yield takeLatest(types.getPizzas[0], sagas.getAllPizzasSaga)
  yield takeLatest(types.createPizza[0], sagas.createPizzaSaga)
}

