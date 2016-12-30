describe('Pokemon factory', function () {
  var Pokemon, $q, $httpBackend;
  var API = 'http://pokeapi.co/api/v2/pokemon/';
  var RESPONSE_SUCCESS = {
    'id': 25,
    'name': 'pikachu',
    'sprites': {
      'front_default': 'http://pokeapi.co/media/sprites/pokemon/25.png'
    },
    'types': [{
      'type': { 'name': 'electric' }
    }]
  };

  beforeEach(angular.mock.module('api.pokemon'));
  beforeEach(inject(function (_Pokemon_, _$q_, _$httpBackend_) {
    Pokemon = _Pokemon_;
    $q = _$q_;
    $httpBackend = _$httpBackend_;
  }));

  it('should exist', function () {
    expect(Pokemon).toBeDefined();
  });

  describe('findByName()', function () {
    var result;
    beforeEach(function () {
      resutl = {};
      spyOn(Pokemon, "findByName").and.callThrough();
    });

    it('should return a Pokemon when called with a valid name', function () {
      var search = 'pikachu';

      $httpBackend.whenGET(API + search).respond(200, $q.when(RESPONSE_SUCCESS));

      expect(Pokemon.findByName).not.toHaveBeenCalled();
      expect(result).toEqual({});

      Pokemon.findByName(search)
      .then(function (res) {
        result = res;
      });

      $httpBackend.flush();

      expect(Pokemon.findByName).toHaveBeenCalledWith(search);
      expect(result.id).toEqual(25);
      expect(result.name).toEqual('pikachu');
      expect(result.sprites.front_default).toContain('.png');
      expect(result.types[0].type.name).toEqual('electric');
    });
  })
});
