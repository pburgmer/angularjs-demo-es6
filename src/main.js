import {app} from 'module';

import 'routes/home/home';

app.config(function ($urlRouterProvider) {
  $urlRouterProvider.otherwise('/home');
});
