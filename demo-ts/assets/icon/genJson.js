const fs = require('fs')
const path = require('path')

const lineReader = require('readline').createInterface({
  input: require('fs').createReadStream(path.join(__dirname, './iconfont.svg'))
})

const names = []
console.log('create...')
lineReader.on('line', function (line) {
  let words = line.split(' ')
  if (words[6] === '<glyph') {
    let [key, value] = [words[7].slice(12, -1), words[8].slice(11, -2)]
    if (value) {
      names.push('    "' + key + '":' + value)
    }
  }
})
lineReader.on('close', function () {
  return fs.writeFile(
    path.resolve(__dirname, './iconfont.json'),
    '{\n' + names.join(',\n') + '\n}',
    function (err) {
      if (err) {
        throw new Error(err)
      } else {
        console.log('create successe.')
      }
    }
  )
})
