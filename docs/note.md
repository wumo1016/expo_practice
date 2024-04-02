## 封装

- [路由导航](https://docs.expo.dev/router/introduction/)
  - 要为目录创建布局路由，请在目录中创建名为 `_layout.js` 的文件
  - router
    - push
    - back
  - 获取路由参数: useLocalSearchParams
- [图标](https://expo.nodejs.cn/guides/icons/#expovector-icons)
- [缓存 react-native-mmkv](https://github.com/mrousavy/react-native-mmkv)
  - set
  - get
  - getString
  - getNumber
  - getBoolean
  - contains
  - getAllKeys
  - delete
  - clearAll
- 接口
- 字体
- 国际化
- 公共样式
- 静态资源

## 其他

- 日期选择器
- 扫码
- debugger
- 地图
- 使用 react native 包

## 预构建

- `npx expo prebuild`: 为您的项目生成本机 android 和 ios 目录

## 打包发布

- 安装脚手架 `npm install -g eas-cli`
- `app.json` 添加一些内容

```json
{
  "ios": {
    "supportsTablet": true,
    "bundleIdentifier": "com.yiban.learn"
  },
  "android": {
    "adaptiveIcon": {
      "foregroundImage": "./assets/images/adaptive-icon.png",
      "backgroundColor": "#ffffff"
    },
    "package": "com.yiban.mis"
  },
  "extra": {
    "router": {
      "origin": false
    },
    "eas": {
      "projectId": "0158cf08-b2e5-45b5-8dbc-135676ef7754"
    }
  }
}
```

- 创建 `eas.json` 文件, 其内容为

```json
{
  "cli": {
    "version": ">= 0.49.0"
  },
  "ios": { "simulator": true },
  "build": {
    "preview": {
      "android": {
        "buildType": "apk"
      },
      "env": {
        "REACT_APP_MODE": "prod"
      }
    },
    "production": {}
  },
  "submit": {
    "production": {}
  }
}
```

- 执行打包命令

```sh
eas build -p ios --profile preview
```
