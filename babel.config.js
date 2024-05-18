module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          extensions: [
            '.ios.js',
            '.android.js',
            '.ios.jsx',
            '.android.jsx',
            '.js',
            '.jsx',
            '.json',
            '.ts',
            '.tsx'
          ],
          root: ['.'],
          alias: {
            '@assets': './assets',
            '@components': './src/components',
            '@lib': './src/lib',
            '@navigation': './src/navigation',
            '@screens': './src/screens',
            '@hooks': './src/hooks'
          }
        }
      ]
    ]
  }
}
