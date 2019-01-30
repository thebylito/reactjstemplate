import {
  call, put, all, takeLatest,
} from 'redux-saga/effects';
import { Creators as AppActions, Types as AppTypes } from '../ducks/app';
import api from '../../services/api';

function* getApp({ payload: { field1, field2 } }) {
  try {
    const response = yield call(api.post, '/myApi', {
      field1,
      field2,
    });
    yield put(AppActions.getAppSuccess(response.data));
  } catch (err) {
    yield put(AppActions.getAppFailure('Erro ao buscar dados da API'));
  }
}

export default function* AppSagas() {
  yield all([takeLatest(AppTypes.GET_REQUEST, getApp)]);
}
