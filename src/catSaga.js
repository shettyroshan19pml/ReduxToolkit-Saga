import {call, put, takeEvery} from "redux-saga/effects";
import {getCatsSuccess} from './catState'

function* workerSaga(){
    console.log("workerSaga");
    const catsData = yield call(()=>fetch('https://api.thecatapi.com/v1/breeds'));
    console.log(catsData);
    const formattedCats = yield catsData.json();
    const formattedCatsSlice = formattedCats.slice(0,10);
    yield put(getCatsSuccess(formattedCatsSlice));
}

function* catSaga(){
    yield takeEvery('cats/getCatsFetch',workerSaga);
}

export default catSaga;