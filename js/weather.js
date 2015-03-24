var Weather = function() {
  this.weathers = ["sunny", "stormy"]
  this.todaysWeather = this.forecast()
};

Weather.prototype.forecast = function () {
  this.todaysWeather = this.weathers[Math.floor(Math.random() * this.weathers.length)];
  return this.todaysWeather;
};
