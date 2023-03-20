import {watch} from 'gulp';

import {
  buildPages,
  buildStyles,
  buildVendorScripts,
  buildScriptsBundle,
  buildDebugMenu,
  buildOther,
  buildFonts,
  buildFavicons,
  buildImages
} from './build';


const watchers = [
  [
    [
      'src/pages/**/*.twig',
      'src/blocks/**/*.twig',
      'src/templates/**/*.twig'
    ],
    buildPages
  ],
  [
    [
      'src/styles/**/*.scss',
      'src/blocks/**/*.scss'
    ],
    buildStyles
  ],
  [
    [
      'src/scripts/**/*.js',
      '!src/scripts/vendor/**/*.js',
      '!src/scripts/api.js',
      '!src/scripts/frontend-debug-menu.js'
    ],
    buildScriptsBundle
  ],
  [['src/scripts/vendor/**/*.js', './src/scripts/old/**/*.js'], buildVendorScripts],
  [['src/assets/img/**/*.*'], buildImages],
  [['src/assets/favicon/**/*.*'], buildFavicons],
  [['src/assets/fonts/**/*.*'], buildFonts],
  [['src/scripts/frontend-debug-menu.js'], buildDebugMenu],
  [['src/assets/other/**/*.*'], buildOther]
];


export function watchSrc(cb) {
  watchers.forEach(watcher => {
    watch(watcher[0], watcher[1]);
  });

  cb();
}
