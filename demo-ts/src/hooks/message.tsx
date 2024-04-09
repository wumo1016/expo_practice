/*
 * @Description: 消息提示
 * @Author: wyb
 * @LastEditors: wyb
 * @LastEditTime: 2024-04-09 16:33:38
 */
import { IObject } from '@dts'
import { useToast } from '@gluestack-ui/themed'
import { StyleSheet, Text, View } from 'react-native'

type MsgType = 'info' | 'success' | 'warning' | 'error'

export interface IMsgProps {
  type?: MsgType
  duration?: number
  message?: string
}

const styleMap: IObject = {
  info: {
    color: '#909399',
    bgColor: '#f4f4f5',
    bdColor: '#e9e9eb'
  },
  success: {
    color: '#67c23a',
    bgColor: '#f0f9eb',
    bdColor: '#e1f3d8'
  },
  warning: {
    color: '#e6a23c',
    bgColor: '#fdf6ec',
    bdColor: '#faecd8'
  },
  error: {
    color: '#f56c6c',
    bgColor: '#fef0f0',
    bdColor: '#fde2e2'
  }
}

/**
 * @Author: wyb
 * @Descripttion:
 */
export const useMessgae = () => {
  const toast = useToast()

  const showToast =
    (type: MsgType) =>
    (message: string, props: IMsgProps = {}) =>
      toast.show({
        placement: 'top',
        duration: props.duration || 2000,
        render: () => msgView({ type, message, ...props }),
        containerStyle: {
          maxWidth: '80%'
        }
      })

  return {
    info: showToast('info'),
    success: showToast('success'),
    warning: showToast('warning'),
    error: showToast('error')
  }
}

function msgView(props: IMsgProps) {
  const { color, bgColor, bdColor } = styleMap[props.type as never] || {}
  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: bgColor,
        borderColor: bdColor
      }}
    >
      <Text style={{ color }}>{props.message}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    borderWidth: 1,
    borderStyle: 'solid',
    padding: 10,
    marginTop: 20
  }
})
