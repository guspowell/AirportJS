var Plane = function() {
  this.flying = true;
};

Plane.prototype.land = function () {
  if (this.flying === false) { throw Error("plane already landed") }
  else { this.flying = false; }
};

Plane.prototype.takeOff = function () {
  this.flying = true;
};



var Airport = function() {
  this.planes = [];
};
