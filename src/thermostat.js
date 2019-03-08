function Thermostat() {

   this._temp = 20;
   this._minTemp = 10;
   this._powerSaving = true;
   this._maxTemp = 25;
   this._lowUsage = 18;

};
Thermostat.prototype.increase = function (value) {
  this._temp = this._temp + value;
};

Thermostat.prototype.decrease = function (value) {
  this._temp = this._temp - value;
};
Thermostat.prototype.modeOn = function () {
  this._powerSaving = true;
  this.setMaxTemp();
};
Thermostat.prototype.modeOff = function(){
  this._powerSaving = false;
  this.setMaxTemp();
};
Thermostat.prototype.setMaxTemp = function () {
  if (this._powerSaving == false) {
    this._maxTemp = 32;
  } else {
    this._maxTemp = 25;
  }

};
Thermostat.prototype.reset = function(){
  this._temp = 20;
};

Thermostat.prototype.usage = function () {
  if (this._temp < 18) {
    return "lowusage";
  } else if (this._temp >=18 && this._temp < 25) {
    return "mediumusage";
  } else {
    return "highusage";
  }
};
