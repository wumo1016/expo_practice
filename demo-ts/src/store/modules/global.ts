/*
 * @Description:
 * @Author: wyb
 * @LastEditors: wyb
 * @LastEditTime: 2024-04-09 14:38:35
 */

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: false,
  token: '',
  userInfo: {}
}

const globalStore = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setLoading(state, { payload }) {
      state.loading = payload
    },
    /**
     * @Author: wyb
     * @Descripttion: 设置token
     * @param {*} state
     * @param {*} param2
     */
    setToken(state, { payload }) {
      state.token = payload
    }
  }
})

export const globalReducer = globalStore.reducer

export const { setToken, setLoading } = globalStore.actions
