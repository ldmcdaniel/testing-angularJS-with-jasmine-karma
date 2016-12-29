describe('Pokemon factory', function () {
  var Pokemon;

  beforeEach(angular.mock.module('api.pokemon'));
  beforeEach(inject(function (_Pokemon_) {
    Pokemon = _Pokemon_;
  }));

  it('should exist', function () {
    expect(Pokemon).toBeDefined();
  });
});
