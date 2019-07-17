import * as services from '../../services'
import { types } from './actions'
import { types as statusTypes } from '../status/actions'
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

export function* createPizzaSaga({payload}) {
  try {
    yield put({
      type: statusTypes.addRequest,
      payload: {
        info: {
          path: 'pizzas.createPizza',
          name: 'Create pizza',
          description: 'foo',
        }
      }
    })
    const { data } = payload
    const result = yield call(services.createPizza, data )
    payload.result = result

    yield put({
      type: types.createPizza[1],
      payload,
    })
  } catch (error) {
    payload.error = error
    yield put({
      type: types.createPizza[2],
      payload,
    })
  }
}

export function* deletePizzaSaga({payload}) {
  try {
    yield put({
      type: statusTypes.addRequest,
      payload: {
        info: {
          path: 'pizzas.deletePizza',
          name: 'Delete pizza',
          description: 'foo',
        }
      }
    })
    const { pizzaId } = payload
    const result = yield call(services.removePizza, pizzaId)
    payload.result = result

    yield put({
      type: types.deletePizza[1],
      payload,
    })
  } catch (error) {
    payload.error = error
    yield put({
      type: types.deletePizza[2],
      payload,
    })
  }
}

export function* addToppingSaga({payload}) {
  try {
    yield put({
      type: statusTypes.addRequest,
      payload: {
        info: {
          path: 'pizzas.addTopping',
          name: 'Add topping to pizza',
          description: 'foo',
        }
      }
    })
    const { pizzaId, toppingId } = payload
    const result = yield call(services.addTopping, pizzaId, toppingId)
    payload.result = result

    yield put({
      type: types.addTopping[1],
      payload,
    })
  } catch (error) {
    payload.error = error
    yield put({
      type: types.addTopping[2],
      payload,
    })
  }
}

export function* deleteToppingSaga({payload}) {
  try {
    yield put({
      type: statusTypes.addRequest,
      payload: {
        info: {
          path: 'pizzas.deleteTopping',
          name: 'Delete topping to pizza',
          description: 'foo',
        }
      }
    })
    const { pizzaId, toppingId } = payload
    const result = yield call(services.deleteTopping, pizzaId, toppingId)
    payload.result = result

    yield put({
      type: types.deleteTopping[1],
      payload,
    })
  } catch (error) {
    payload.error = error
    yield put({
      type: types.deleteTopping[2],
      payload,
    })
  }
}
