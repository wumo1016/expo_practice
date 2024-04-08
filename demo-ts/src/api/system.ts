/*
 * @Description:
 * @Author: wyb
 * @LastEditors: wyb
 * @LastEditTime: 2024-04-08 11:37:46
 */

import { IObject } from '@dts'
import request from '@u/request'

export class SystemApi {
  /**
   * @Author: wyb
   * @Descripttion: 登录
   * @param {IObject} data
   */
  static login = (data: IObject): Promise<IObject> =>
    request({
      url: 'Login/CheckLogin',
      method: 'post',
      data
    })
}
