import path from 'path';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
// import favicon from 'serve-favicon';
import webpackConfig from './webpack.config.dev';
import app from './server/routes/index';


const compiler = webpack(webpackConfig);

app.use(webpackMiddleware(compiler, {
  hot: true,
  pubilcPath: webpackConfig.output.publicPath,
  noInfo: true
}));
app.use(webpackHotMiddleware(compiler));
// app.use(favicon(path.join(__dirname, 'assets', 'public', 'favicon.ico')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './client/index.html'));
});

app.listen(5000, () => console.log('Running on port 5000....'));
