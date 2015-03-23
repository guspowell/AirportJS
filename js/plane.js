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



var Airport = function() {
  this.planes = [];
  this.capacity = 20;
};

Airport.prototype.accept_plane = function (plane) {
  if (airport.full()) {
    throw Error("airport is full")
  } else {
    plane.land();
    this.planes.push(plane);
  }
};

Airport.prototype.launch_plane = function (plane) {
  plane.takeOff();
  this.planes.splice(plane);
};

Airport.prototype.plane_count = function () {
  return this.planes.length;
};

Airport.prototype.full = function () {
  if (this.plane_count() >= this.capacity) { return true }
  else { return false }
};
