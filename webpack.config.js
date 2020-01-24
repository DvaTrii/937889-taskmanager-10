const MomentLocalesPlugin = require(`moment-locales-webpack-plugin`);
const path = require(`path`);

module.exports = {
  mode: `development`, // Режим сборки
  entry: `./src/main.js`, // Точка входа приложения
  output: {// Настройка выходного файла
    filename: `bundle.js`,
    path: path.join(__dirname, `public`)
  },
  devtool: `source-map`,
  devServer: {
    contentBase: path.join(__dirname, `public`), // Где искать сборку
    publicPath: `http://localhost:8080/`, // Веб адрес сборки
    compress: true, // Сжатие
    // Автоматическая перезагрузка страницы
    // Если не работает по стандартному URLу в браузере ‘http:/localhost:8080’,
    // то добавьте к нему ‘/webpack-dev-server/‘: ‘http:/localhost:8080/webpack-dev-server/'
    watchContentBase: true
  },
  plugins: [
    new MomentLocalesPlugin({
      localesToKeep: [`es-us`],
    })
  ]
};
