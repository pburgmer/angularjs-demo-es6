System.config({
  meta: {
    'components/angular/angular': { format: 'global', exports: 'angular' },
    'components/angular-ui-router/angular-ui-router/release/angular-ui-router': { deps: ['angular'] },
  },
  map: {
    'angular': 'components/angular/angular.js',
    'angular-ui-router': 'components/angular-ui-router/release/angular-ui-router.js',
    'angular-mock': 'components/angular-mocks/angular-mocks.js',
    'babel': '../node_modules/babel-core/browser.js'
  },
  "defaultJSExtensions": true,
  // or 'traceur' or 'typescript'
  transpiler: 'babel',
  // or traceurOptions or typescriptOptions
  babelOptions: {

  }
});
//System.baseURL = '/client';
