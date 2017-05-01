
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.register')
      .controller('RegisterCtrl', RegisterCtrl);

  /** @ngInject */
  function RegisterCtrl($scope,$firebaseArray) {
    const rootRef = firebase.database().ref().child('angular');
    const ref = rootRef.child('object');
    $scope.contacts = $firebaseArray(ref);

    $scope.addFormShow = true;
    $scope.editFormShow = false;
    this.userName='Sebastian';

    //$scope.id ='';
    $scope.showEditForm = function(contact){
      $scope.addFormShow = false;
      $scope.editFormShow = true;

      $scope.id = contact.$id;
      //console.log($scope.id);
      $scope.name = contact.name;
      $scope.email = contact.email;
      $scope.phone = contact.phone;
    }

    $scope.addContact = function(){
      console.log('Adding contact ...');
      $scope.contacts.$add({
        name: $scope.name,
        email: $scope.email,
        phone: $scope.phone
      }).then(function(){
        //var id = ref.key();
        //console.log('added contact '+id);
        $scope.name='';
        $scope.email='';
        $scope.phone='';
      });
    }

    $scope.editContact = function(){
      var id = $scope.id;
      var record = $scope.contacts.$getRecord(id);

      //console.log(record);

      record.name = $scope.name;
      record.email = $scope.email;
      record.phone = $scope.phone;

      //Save
      $scope.contacts.$save(record).then(function(ref){
        console.log(ref.key);
      });

      $scope.name='';
      $scope.email='';
      $scope.phone='';
      $scope.addFormShow = true;
      $scope.editFormShow = false;
    }

    $scope.removeContact = function(contact){
      $scope.contacts.$remove(contact);
    }
  

  }
})();