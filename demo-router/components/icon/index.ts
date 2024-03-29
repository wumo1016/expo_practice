import { createIconSet } from '@expo/vector-icons'
import glyphMap from '@/assets/icon/iconfont.json'

export default createIconSet(
  glyphMap,
  'iconfont',
  require('@/assets/icon/iconfont.ttf')
)
