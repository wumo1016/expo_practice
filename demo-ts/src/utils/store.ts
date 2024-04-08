/*
 * @Description:
 * @Author: wyb
 * @LastEditors: wyb
 * @LastEditTime: 2024-04-08 20:39:55
 */
import store from '@s'

/**
 * @Author: wyb
 * @Descripttion: 获取token
 */
export const getToken = () => store.getState().global.token
