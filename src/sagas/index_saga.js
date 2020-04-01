import Api from '../services/api_service'
import { takeLatest, call, put } from 'redux-saga/effects';


export function* sagas() {
    yield takeLatest('SIGNUP', signUpSaga);
  }

function* signUpSaga (action){
    try {
        const response = yield call(Api.signUp , action.payload);
        let result = response.data;
        yield put({ type: 'YOUR_ACTION', payload:result });
    }catch (e) {
        yield put({ type: 'YOUR_ACTION_FAILED'});

    }

}