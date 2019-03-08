describe('Thermostat', function() {
  var thermo;

  beforeEach(function(){
    thermo = new Thermostat();
  });

  describe('Thermostat', function(){
  it('has a starting temperature 20', function(){
    expect(thermo._temp).toEqual(20);
  });

  it('has a minimum temperature 10', function(){
    expect(thermo._minTemp).toEqual(10);
  });

  it('has a maximum temperature 25', function(){
    expect(thermo._maxTemp).toEqual(25);
  });
});
  describe('Thermostat', function(){
    it('new thermostat with default value true', function(){
      thermo1 = new Thermostat();
      expect(thermo._powerSaving).toBe(true);
    });
  });

  describe('Thermostat', function(){
    it('can have a function to increase temperature', function(){
      thermo.increase(10);
      expect(thermo._temp).toBeGreaterThan(20);
    });
  });

  describe('Thermostat', function(){
    it('can have a function to decrease temperature', function(){
      thermo.decrease(10);
      expect(thermo._temp).toBeLessThan(20);
    })
  });

  describe('Thermostat', function(){
    it('has a power saving mode', function(){
      expect(thermo._powerSaving).toBe(true);
      });
  });

  describe('Thermostat', function(){
    it('has a on mode', function(){
      thermo.modeOn();
      expect(thermo._powerSaving).toBe(true);
    });
  });

  describe('Thermostat', function(){
    it('has a off mode', function(){
      thermo.modeOff();
      expect(thermo._powerSaving).toBe(false);
    });
  });

  describe('Thermostat', function(){
    it('has a maximum temperature when mode on', function(){
      thermo.modeOn();
      expect(thermo._maxTemp).toBe(25);
    });
  });

  describe('Thermostat', function(){
    it('has a maximum temperature when mode off', function(){
      thermo.modeOff();
      expect(thermo._maxTemp).toBe(32);
    });
  });

  describe('Thermostat', function(){
    it('can reset a temperature to 20 with reset function', function(){
      thermo.reset();
      expect(thermo._temp).toEqual(20);
    });
  });

  describe('Thermostat', function(){
    it('can tell low usage', function(){
      thermo.decrease(3);
      expect(thermo.usage()).toEqual('low usage');
    });

  });

  describe('Thermostat', function(){
    it('can tell medium usage', function(){
      thermo.increase(4);
      expect(thermo.usage()).toEqual('medium usage');
    });
  });

  describe('Thermostat', function(){
    it('can tell high usage', function(){
      thermo.increase(6);
      expect(thermo.usage()).toEqual('high usage');
    });
  });

  // describe('Thermostat', function(){
  //   it('checks the condition for setMaxTemp' function(){
  //
  //
  //   });
  // });
});
