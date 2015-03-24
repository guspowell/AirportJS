var Weather = function() {
  this.weathers = ["sunny", "stormy"]
  this.todaysWeather = this.forecast()
};

Weather.prototype.forecast = function () {
  this.todaysWeather = this.weathers[Math.floor(Math.random() * this.weathers.length)];
  return this.todaysWeather;
};

Weather.prototype.stormy = function () {
  if (this.todaysWeather === "stormy") {
    return true;
  } else {
    return false;
  }
};
