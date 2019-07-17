import { takeLatest, } from 'redux-saga/effects'
import * as sagas from './sagas'
import { types, } from './actions'

export default function* watchPizzas() {
  yield takeLatest(types.getPizzas[0], sagas.getAllPizzasSaga)
  yield takeLatest(types.createPizza[0], sagas.createPizzaSaga)
  yield takeLatest(types.deletePizza[0], sagas.deletePizzaSaga)
  yield takeLatest(types.addTopping[0], sagas.addToppingSaga)
  yield takeLatest(types.deleteTopping[0], sagas.deleteToppingSaga)
}

