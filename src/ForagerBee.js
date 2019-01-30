var ForagerBee = function() {
  HoneyMakerBee.call(this);
  this.age = 10;
  this.job = "find pollen";
  this.canFly = true;
  this.treasureChest = [];
};

ForagerBee.prototype = Object.create(HoneyMakerBee.prototype);
ForagerBee.prototype.constructor = ForagerBee;

ForagerBee.prototype.forage = function(arg1){
  this.treasureChest.push(arg1);
}