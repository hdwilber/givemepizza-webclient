import * as services from '../../services'
import { types } from './actions'
import { call, put, } from 'redux-saga/effects'

export function* getAllPizzasSaga({ payload }) {
  try {
    const result = yield call(services.getAllPizzas)
    payload.result = result
    console.log(payload);

    yield put({
      type: types.getPizzas[1],
      payload,
    })
  } catch (error) {
    payload.error = error
    yield put({
      type: types.getPizzas[2],
      payload,
    })
  }
}

export function* getPizzaSaga({ payload }) {
  try {
    const result = yield call(services.getPizzaById, payload.pizzaId)
    payload.result = result

    yield put({
      type: types.getPizza[1],
      payload,
    })
  } catch (error) {
    payload.error = error
    yield put({
      type: types.getPizza[2],
      payload,
    })
  }
}
