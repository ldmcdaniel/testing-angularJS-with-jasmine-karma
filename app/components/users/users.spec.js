describe('UsersController', function () {
  var $controller, UsersController, UsersFactory;

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

  beforeEach(angular.mock.module('ui.router'));
  beforeEach(angular.mock.module('components.users'));
  beforeEach(angular.mock.module('api.users'));
  beforeEach(inject(function (_$controller_, _Users_) {
    $controller = _$controller_;
    UsersFactory = _Users_;
    spyOn(UsersFactory, 'all').and.callFake(function () {
      return userList;
    });
    UsersController = $controller('UsersController', { Users: UsersFactory });
  }));

  it('should be defined', function () {
    expect(UsersController).toBeDefined();
  });

  it('should initialize with a call to Users.all()', function () {
    expect(UsersFactory.all).toHaveBeenCalled();
    expect(UsersController.users).toEqual(userList);
  });
});
