
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.register')
      .controller('RegisterCtrl', RegisterCtrl)
      .filter('reverseArray', function() {
    return function(items) {
      return items.slice().reverse();
    }
    });

  /** @ngInject */
  function RegisterCtrl($scope,$firebaseArray) {

    const rootRef = firebase.database().ref().child('angular');
    const ref = rootRef.child('object');
    $scope.contacts = $firebaseArray(ref);
    console.log('contacts',$scope.contacts);
    $scope.rowCollection = $scope.contacts;    
    $scope.displayedCollection = [].concat($scope.rowCollection);
    
    $scope.client = {};
    $scope.addFormShow = true;
    $scope.editFormShow = false;
    $scope.smartTablePageSize = 10;

    //$scope.id ='';
    $scope.showEditForm = function(contact){
      $scope.addFormShow = false;
      $scope.editFormShow = true;

      $scope.client.id = contact.$id;
      //console.log($scope.id);
      $scope.client.rut = contact.rut;
      $scope.client.nombre = contact.nombre;
      $scope.client.origen = contact.origen;
      $scope.client.fnac = contact.fnac;
      $scope.client.madre = contact.madre;
      $scope.client.padre = contact.padre;
      $scope.client.letras = contact.letras;
      $scope.client.tra1 = contact.tra1;
      $scope.client.tra2 = contact.tra2;
      $scope.client.tra3 = contact.tra3;
      $scope.client.obser = contact.obser;
    }

    $scope.addContact = function(){
      // console.log('Adding contact ...');
      $scope.contacts.$add($scope.client).then(function(){
        //var id = ref.key();
        
        $scope.client= {}
      });
    }

    $scope.editContact = function(){
      var id = $scope.client.id;
      var record = $scope.contacts.$getRecord(id);
      // console.log('record',record);
      record.rut = $scope.client.rut;
      record.nombre = $scope.client.nombre;
      record.origen = $scope.client.origen;
      record.fnac = $scope.client.fnac;
      record.madre = $scope.client.madre;
      record.padre = $scope.client.padre;
      record.letras = $scope.client.letras;
      record.tra1 = $scope.client.tra1;
      record.tra2 = $scope.client.tra2;
      record.tra3 = $scope.client.tra3;
      record.obser = $scope.client.obser;
      // console.log('client',$scope.client);
      // console.log('record',record);
      //Save
      $scope.contacts.$save(record).then(function(ref){
        // console.log(ref.key);
      });

      $scope.client = {}
      $scope.addFormShow = true;
      $scope.editFormShow = false;
    }

    $scope.cancelEdit = function(){
      $scope.client = {}
      $scope.addFormShow = true;
      $scope.editFormShow = false;
    }

    $scope.removeContact = function(contact){
      $scope.contacts.$remove(contact);
    }
  

  }
})();