var Plane = function() {
  this.flying = true;
};

Plane.prototype.land = function () {
  if (this.flying === false) { throw Error("plane already landed"); }
  else { this.flying = false; }
};

Plane.prototype.takeOff = function () {
  if (this.flying === true) { throw Error("plane already flying") }
  else { this.flying = true }
};
