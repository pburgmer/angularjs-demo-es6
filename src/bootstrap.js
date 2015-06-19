import 'angular';
import {app} from 'module';
import 'main';

angular.element(document).ready(function() {
  angular.bootstrap(document.querySelector('[my-app]'), [app.name]);
});
