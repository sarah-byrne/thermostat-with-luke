describe('Thermostat', function() {
  var thermo;

  beforeEach(function(){
    thermo = new Thermostat;
  });
  
  describe('Thermostat', function(){
  it('has a starting temperature 20', function(){
    var thermo = new Thermostat;
    expect(thermo._temp).toEqual(20);
  });
});
});
