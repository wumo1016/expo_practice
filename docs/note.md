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
- 公共样式
- 静态资源
- 国际化

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
- 登录 `eas login`

## 本地开发

```sh
# 安装包
npx expo install expo-dev-client

# 首次构建(更新第三方包后也需构建)
eas build --profile development --platform android

# 安装远程线上apk
eas build:run -p android
```

### 本地构建

```sh
npm run prebuild:android
expo run:android --variant release
```

### 云构建

- 执行 `eas build`

```sh
# 直接构建
eas build
```
