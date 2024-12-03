import { run } from 'node-cmd'

export default function cocosPluginUpdater(options) {
  const { src, dest } = options
  return {
    name: 'cocos-plugin-update',
    closeBundle() {
      // console.log(process.env)
      if (!src || !dest) {
        return
      }

      console.log('cocos-plugin-update copy folder to global cocos plugin packages')
      run(`if exist "${dest}" rd /s /q "${dest}"`)
      // 创建目标目录并复制
      run(`mkdir "${dest}" && xcopy "${src}" "${dest}" /E /I /H /Y`)
      console.log('cocos-plugin-update copy folder success')
    }
  }
}