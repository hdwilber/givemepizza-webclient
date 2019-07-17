import * as services from '../../services'
import { types } from './actions'
import { call, put, } from 'redux-saga/effects'
import { types as statusTypes } from '../status/actions'

export function* getToppingsSaga({ payload }) {
  try {
    const result = yield call(services.getToppings)
    payload.result = result
    yield put({
      type: types.getToppings[1],
      payload,
    })
  } catch (error) {
    payload.error = error
    yield put({
      type: types.getToppings[2],
      payload,
    })
  }
}

export function* createToppingSaga({payload}) {
  try {
    yield put({
      type: statusTypes.addRequest,
      payload: {
        info: {
          path: 'toppings.createTopping',
          name: 'Create topping',
          description: 'foo',
        }
      }
    })
    const { data } = payload
    const result = yield call(services.createTopping, data )
    payload.result = result

    yield put({
      type: types.createTopping[1],
      payload,
    })
  } catch (error) {
    payload.error = error
    yield put({
      type: types.createTopping[2],
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
          path: 'toppings.deleteTopping',
          name: 'Delete topping',
          description: 'foo',
        }
      }
    })
    const { toppingId } = payload
    const result = yield call(services.removeTopping, toppingId)
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
