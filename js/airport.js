var Airport = function() {
  this.planes = [];
  this.capacity = 20;
};

Airport.prototype.acceptPlane = function (plane, weather) {
  if (airport.full()) {
    throw Error("airport is full");
  } else if (weather.todaysWeather === "stormy") {
    throw Error("the weather is too stormy to land");
  } else {
    plane.land();
    this.planes.push(plane);
  }
};

Airport.prototype.launchPlane = function (plane, weather) {
  plane.takeOff();
  this.planes.splice(plane);
};

Airport.prototype.planeCount = function () {
  return this.planes.length;
};

Airport.prototype.full = function () {
  if (this.planeCount() >= this.capacity) { return true }
  else { return false }
};
