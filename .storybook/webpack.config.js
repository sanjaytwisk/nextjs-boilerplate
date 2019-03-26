const path = require('path')

module.exports = async ({ config }) => {
  /** add scss loader */
  config.module.rules.push({
    test: /\.scss$/,
    loaders: [
      'style-loader',
      'css-loader',
      {
        loader: 'sass-loader',
        options: {
          includePaths: [path.join(process.cwd(), 'src', 'common', 'css')],
        },
      },
    ],
    include: path.resolve(__dirname, '../src'),
  })

  /** add svg sprite loaders */
  config.module.rules.push({
    test: /\.svg$/,
    include: path.join(process.cwd(), 'src', 'components', 'icon', 'icons'),
    loaders: [
      {
        loader: 'svg-sprite-loader',
      },
      {
        loader: 'svgo-loader',
        options: {
          plugins: [
            { removeAttrs: { attrs: '(fill)' } },
            { removeTitle: true },
            { cleanupIDs: true },
            { removeStyleElement: true },
          ],
        },
      },
    ],
  })

  /** get file loader */
  const fileLoader = config.module.rules.find(
    rule =>
      rule.test.toString() ===
      '/\\.(svg|ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani)(\\?.*)?$/'
  )

  /** remove svg files from file loader */
  fileLoader.test = /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani)(\?.*)?$/

  return config
}
