import {src, dest, parallel} from 'gulp';
import babel                 from 'gulp-babel';
import uglify                from 'gulp-uglify';
import {getDir}              from '../helpers/gets';
import cached                from 'gulp-cached';
import webpack               from 'webpack-stream';
import {webpackConfig}       from '../webpack/webpack.config';

/**
 * Собирает бандлы
 *
 * @param cb  —  callback
 */
export function buildScriptsBundle(cb) {
  src('./src/scripts/index.js')
    .pipe(webpack(webpackConfig)
      .on('error', e => console.log(e)))
    .pipe(babel({presets: ['@babel/env']}))
    .pipe(uglify({mangle: false}))
    .pipe(dest(`${getDir()}/scripts/`));

  cb ? cb() : 0;
}

/**
 * Простое копирование скрипта дебаг меню
 *
 * @param cb  —  callback
 */
export function buildDebugMenu(cb) {
  if (true) {
    src(['./src/scripts/frontend-debug-menu.js'])
      .pipe(cached('frontendDebugMenu'))
      .pipe(dest(`${getDir()}/scripts/`));
  }

  cb ? cb() : 0;
}

/**
 * Копирует сторонние скрипты в билд
 *
 * @param cb  —  callback
 */
export function buildVendorScripts(cb) {
  src(['./src/scripts/vendor/*.js'])
    .pipe(cached('scriptsVendor'))
    .pipe(dest(`${getDir()}/scripts/vendor/`));

  cb ? cb() : 0;
}

exports.buildScripts = parallel(
  buildScriptsBundle,
  buildDebugMenu,
  buildVendorScripts,
);
