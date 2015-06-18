import {app} from 'app/module';

import 'app/routes/home/home';

app.config(function ($urlRouterProvider) {
  $urlRouterProvider.otherwise('/home');
});
