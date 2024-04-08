/*
 * @Description:
 * @Author: wyb
 * @LastEditors: wyb
 * @LastEditTime: 2024-04-08 20:46:56
 */
import { configureStore } from '@reduxjs/toolkit'
import { globalReducer, setToken } from './modules/global'

const store = configureStore({
  reducer: {
    global: globalReducer
  }
})

export type TState = ReturnType<typeof store.getState>

export { setToken }

export default store
