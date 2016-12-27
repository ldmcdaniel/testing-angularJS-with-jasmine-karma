describe('Users factory', function () {
  var Users;

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
  var singleUser = {
    id: '2',
    name: 'Jennifer',
    role: 'Developer',
    location: 'Chicago',
    twitter: 'gijennifer'
  };

  beforeEach(angular.mock.module('api.users'));

  beforeEach(inject(function (_Users_) {
    Users = _Users_;
  }));

  it('should exist', function () {
    expect(Users).toBeDefined();
  });

  describe('.all()', function () {
    it('should exist', function () {
      expect(Users.all).toBeDefined();
    });

    it('should return a hard-coded list of users', function () {
      expect(Users.all()).toEqual(userList);
    });
  });

  describe('.findById(id)', function () {
    it('should exist', function () {
      expect(Users.findById).toBeDefined();
    });

    it('should return one user object if it exists', function () {
      expect(Users.findById('2')).toEqual(singleUser);
    });

    it('should return undefined if the user cannot be found', function () {
      expect(Users.findById('ABC')).not.toBeDefined();
    });
  });
});
