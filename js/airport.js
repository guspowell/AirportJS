var Airport = function(weather) {
  this.planes = [];
  this.capacity = 20;
  this.airportWeather = weather.forecast();
};

Airport.prototype.acceptPlane = function (plane) {
  if (airport.full()) {
    throw Error("airport is full");
  } else if (this.airportWeather === "stormy") {
    throw Error("the weather is too stormy to land");
  } else {
    plane.land();
    this.planes.push(plane);
  }
};

Airport.prototype.launchPlane = function (plane) {
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
