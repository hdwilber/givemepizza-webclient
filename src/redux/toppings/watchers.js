import { takeLatest, } from 'redux-saga/effects'
import * as sagas from './sagas'
import { types } from './actions'

export default function* watchToppings() {
  yield takeLatest(types.getToppings[0], sagas.getToppingsSaga)
  yield takeLatest(types.createTopping[0], sagas.createToppingSaga)
  yield takeLatest(types.deleteTopping[0], sagas.deleteToppingSaga)
}
