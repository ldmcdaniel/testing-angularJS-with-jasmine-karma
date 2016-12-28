(function() {
  'use strict';

  angular.module('api.users', [])
  .factory('Users', function () {
    var Users = {};
    var userList = [
      {
        id: '1',
        name: 'Joel',
        role: 'Designer',
        location: 'Nashville',
        twitter: 'gijoel'
      },
      {
        id: '2',
        name: 'Jennifer',
        role: 'Developer',
        location: 'Chicago',
        twitter: 'gijennifer'
      },
      {
        id: '3',
        name: 'Jill',
        role: 'Educator',
        location: 'Nashville',
        twitter: 'gijill'
      },
      {
        id: '4',
        name: 'James',
        role: 'Builder',
        location: 'Pittsburgh',
        twitter: 'gijames'
      },
      {
        id: '5',
        name: 'Jani',
        role: 'Stripper',
        location: 'Las Vegas',
        twitter: 'gijani'
      }
    ];
    Users.all = function () {
      return userList;
    };

    Users.findById = function (id) {
      return userList.find(function (user) {
        return user.id === id;
      });
    };

    return Users;
  });
})();
