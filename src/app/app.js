'use strict';

angular.module('BlurAdmin', [
  'ngAnimate',
  'ui.bootstrap',
  'ui.sortable',
  'ui.router',
  'ngTouch',
  'toastr',
  'smart-table',
  "xeditable",
  'ui.slimscroll',
  'ngJsTree',
  'angular-progress-button-styles',

  'BlurAdmin.theme',
  'BlurAdmin.pages',
  'firebase'
]);

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyD5X_HsxrL1hGL9ap1pO6f0CIh2VW5dMWE",
    authDomain: "example4-a5f23.firebaseapp.com",
    databaseURL: "https://example4-a5f23.firebaseio.com",
    projectId: "example4-a5f23",
    storageBucket: "example4-a5f23.appspot.com",
    messagingSenderId: "616000860962"
  };
  firebase.initializeApp(config);