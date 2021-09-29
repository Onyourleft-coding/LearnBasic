import { createStore, combineReducers } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import { CollApsedReducer } from './reducers/CollapsedReducer'
import { LoadingReducer } from './reducers/LoadingReducer'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

//配置
const persistConfig = {
    key: 'xiaolin',
    storage,
    // 黑名单，哪个属性不需要被持久化
    blacklist: ['LoadingReducer'] // navigation will not be persisted
}

const reducer = combineReducers({
    CollApsedReducer,
    LoadingReducer
})
const persistedReducer = persistReducer(persistConfig, reducer)
//合并reducer

const store = createStore(persistedReducer)
const persistor = persistStore(store)

export {
    store, persistor
}
/*
store.dispatch('action', payload)

store.subscribe(handler)
*/