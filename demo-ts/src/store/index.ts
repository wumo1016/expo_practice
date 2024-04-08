/*
 * @Description:
 * @Author: wyb
 * @LastEditors: wyb
 * @LastEditTime: 2024-04-08 21:41:00
 */
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist'

import { globalReducer, setToken } from './modules/global'
import { Storage } from '@u/storage'

const store = configureStore({
  reducer: persistReducer(
    {
      key: 'root',
      storage: {
        getItem: async key => Storage.get(key),
        setItem: async (key, value) => Storage.set(key, value),
        removeItem: async key => Storage.delete(key)
      },
      blacklist: []
    },
    combineReducers({
      global: globalReducer
    })
  ),
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
})

const persistor = persistStore(store)

export type TState = ReturnType<typeof store.getState>

export { setToken, persistor }

export default store
