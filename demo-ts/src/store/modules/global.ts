/*
 * @Description:
 * @Author: wyb
 * @LastEditors: wyb
 * @LastEditTime: 2024-04-08 20:38:39
 */

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  token: '',
  userInfo: {}
}

const globalStore = createSlice({
  name: 'global',
  initialState,
  reducers: {
    /**
     * @Author: wyb
     * @Descripttion:
     * @param {*} state
     * @param {*} param2
     */
    setToken(state, { payload }) {
      state.token = payload
    }
  }
})

export const globalReducer = globalStore.reducer

export const { setToken } = globalStore.actions
