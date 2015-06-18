import 'angular';
import {app} from 'app/module';
import 'app/main';

angular.element(document).ready(function() {
  angular.bootstrap(document.querySelector('[my-app]'), [app.name]);
});
